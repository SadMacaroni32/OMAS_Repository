package com.omasystem.omas.Service;

import java.util.HashMap; 
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.omasystem.omas.Dao.SeatDao; 
import com.omasystem.omas.Model.SeatModel; 
import com.omasystem.omas.Model.Enum.SeatStatus; 

@Service // Indicates that this class is a service component in Spring
public class SeatService {

    @Autowired // Dependency injection using Spring's autowiring feature
    SeatDao seatDao; // Initializing SeatDao

    Map<String, Object> response = new HashMap<String, Object>(); // Initializing response map

    // <------------- GET ALL SEATS ---------->
    public ResponseEntity<List<SeatModel>> getAllSeats() {
        try {
            List<SeatModel> seats = seatDao.getAllSeats(); // Retrieving all seats from DAO
            if (seats != null && !seats.isEmpty()) { // Checking if seats exist and not empty
                return ResponseEntity.ok(seats); // Returning seats with OK status
            } else {
                return ResponseEntity.notFound().build(); // Returning not found status if seats are empty
            }
        } catch (Exception e) { // Catching any exceptions
            e.printStackTrace(); // Log the exception
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Returning internal server error status
        }
    };

    // GET ALL AVAILABLE SEATS
    public List<SeatModel> getAvailableSeat() {
        // Assuming SeatStatus.AVAILABLE represents the available seats
        return seatDao.getSeatStatus(SeatStatus.available); // Retrieving available seats from DAO
    }

    // GET ALL OCCUPIED SEATS
    public List<SeatModel> getOccupiedSeat() {
        // Assuming SeatStatus.OCCUPIED represents the available seats
        return seatDao.getSeatStatus(SeatStatus.occupied); // Retrieving occupied seats from DAO
    }

    // GET ALL REPAIRING SEAT
    public List<SeatModel> getRepairingSeat() {
        // Assuming SeatStatus.REPAIRING represents the seats that are under repair
        return seatDao.getSeatStatus(SeatStatus.repairing); // Retrieving repairing seats from DAO
    }

    // GET ALL SEATS BY PROJECT
    public ResponseEntity<Map<String, Object>> getTotalSeatsByProject(Long projectId) {
        Map<String, Object> response = new HashMap<>(); // Initializing response map

        try {
            List<SeatModel> seatsByProject = seatDao.getTotalSeatsByProject(projectId); // Retrieving seats by project ID from DAO
            response.put("Number of seats occupied by project", seatsByProject); // Putting seats count by project in response
            return ResponseEntity.ok(response); // Returning response with OK status
        } catch (Exception e) { // Catching any exceptions
            e.printStackTrace(); // Log the exception
            response.put("error", "Internal Server Error"); // Putting error message in response
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response); // Returning internal server error status
        }
    }

    // Get all seats with project name
    public List<SeatModel> getAllSeatsWithProjectName(Long proj_id){
        return seatDao.getAllSeatsWithProjectName(proj_id); // Retrieving all seats with project name from DAO
    }
}
