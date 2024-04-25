package com.omasystem.omas.Service; 

import java.util.ArrayList; 
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.omasystem.omas.Dao.ReservationDao; 
import com.omasystem.omas.Dao.SeatDao;
import com.omasystem.omas.Dao.UserDao;
import com.omasystem.omas.Dao.UserProjectDao;
import com.omasystem.omas.Model.ReservationInputBodyModel; 
import com.omasystem.omas.Model.ReservationModel;
import com.omasystem.omas.Model.ReservationPerSeatModel;
import com.omasystem.omas.Model.UserModel;
import com.omasystem.omas.Model.UserProjectModel;
import com.omasystem.omas.Model.Enum.SeatStatus;

@Service 
public class ReservationService {

    @Autowired 
    private ReservationDao reservationDao;

    @Autowired
    private UserProjectDao userProjectDao;

    @Autowired
    private UserDao userDao;

    @Autowired
    private SeatDao seatDao;

    Map<String, Object> response = new HashMap<String, Object>(); // Initializing a response map

    // ** sample data for emp_id until the implementation of session using spring
    // security.
    public static final String EMP_ID = "101"; // Static constant for employee ID

    // Retrieves all reservation per seat and data are converted to string.
    public Map<String, Object> getAllReservationPerSeat(Long seat_id) {

        try {
            List<ReservationPerSeatModel> reservationPerSeats = reservationDao.getAllReservationPerSeat(seat_id); // Retrieving reservation data from DAO

            if (reservationPerSeats.size() == 0) { // Checking if there are no reservations
                response.put("message", "Free Space"); // Setting response message
            } else {
                List<Map<String, Object>> stringList = new ArrayList<>(); // Initializing a list to store reservation data

                for (ReservationPerSeatModel reservation : reservationPerSeats) { // Iterating over each reservation
                    Map<String, Object> reservationMap = new HashMap<>(); // Creating a map to store reservation details
                    reservationMap.put("reservation_id", String.valueOf(reservation.getReservation_id())); // Adding reservation ID to map
                    reservationMap.put("seat_id", String.valueOf(reservation.getSeat_id())); // Adding seat ID to map
                    reservationMap.put("start_date", reservation.getStart_date()); // Adding start date to map
                    reservationMap.put("end_date", reservation.getEnd_date()); // Adding end date to map
                    reservationMap.put("position_sn", reservation.getPosition_sn()); // Adding position serial number to map
                    reservationMap.put("first_name", reservation.getFirst_name()); // Adding first name to map
                    reservationMap.put("middle_name", reservation.getMiddle_name()); // Adding middle name to map
                    reservationMap.put("last_name", reservation.getLast_name()); // Adding last name to map
                    reservationMap.put("client_sn", reservation.getClient_sn()); // Adding client serial number to map

                    stringList.add(reservationMap); // Adding reservation map to list
                }

                response.put("message", stringList); // Setting response message with list of reservations
            }
        } catch (Exception e) { // Catching any exceptions
            response.put("message", e.getMessage()); // Setting error message in response
        }
        return response; // Returning response
    }

    // Retrieves reservations by employee ID
    public List<ReservationModel> getReservationByEmpId(String emp_id) {
        return reservationDao.findByEmpId(emp_id); // Calling DAO method to fetch reservations by employee ID
    }

    // Retrieves reservation by reservation ID
    public ReservationModel getReservationById(Long reservationId) {
        return reservationDao.findById(reservationId); // Calling DAO method to fetch reservation by ID
    }

    ///FOR ADMIN
    // Updates reservation details (there is no update reservation in frontend)
    // public Map<String, Object> updateReservation(Long reservationId, ReservationInputBodyModel body) {
    //     Map<String, Object> response = new HashMap<>(); // Initializing response map

    //     try {
    //         // Retrieve the reservation to update
    //         ReservationModel reservation = reservationDao.findById(reservationId); // Fetching reservation from DAO

    //         if (reservation == null) { // Checking if reservation exists
    //             response.put("message", "Reservation not found"); // Setting error message in response
    //             return response; // Returning response
    //         }

    //         // Retrieve the currently logged-in user's emp_id
    //         Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // Getting authentication information
    //         UserModel currentUser = userDao.getPrincipal(authentication.getName()); // Retrieving current user details
    //         String loggedInEmpId = currentUser.getEmp_id(); // Getting current user's employee ID

    //         // Check if the reservation belongs to the current user
    //         if (!reservation.getEmp_id().equals(loggedInEmpId)) { // Checking ownership of reservation
    //             response.put("message", "You are not authorized to update this reservation"); // Setting error message in response
    //             return response; // Returning response
    //         }

    //         // Update reservation details
    //         reservation.setStart_date(body.getStart_date()); // Updating start date
    //         reservation.setEnd_date(body.getEnd_date()); // Updating end date
    //         reservation.setNote(body.getNote()); // Updating note

    //         // Call the DAO to update the reservation
    //         reservationDao.updateReservation(reservation); // Updating reservation in DAO

    //         response.put("message", "Reservation updated successfully"); // Setting success message in response
    //     } catch (Exception e) { // Catching any exceptions
    //         response.put("message", e.getMessage()); // Setting error message in response
    //     }
    //     return response; // Returning response
    // }

    // Inserts a new reservation
    public Map<String, Object> insertReservation(Long seat_id, ReservationInputBodyModel body) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // Getting authentication information

        ReservationInputBodyModel bodyContainer = new ReservationInputBodyModel(); // Initializing reservation body container

        UserModel principal = userDao.getPrincipal(authentication.getName()); // Retrieving current user details

        UserProjectModel currentProjectOfUser = userProjectDao.getProjectInvolvedOfUser(String.valueOf(principal.getEmp_id())); // Retrieving current user's project

        if (currentProjectOfUser != null) { // Checking if user is associated with a project
            bodyContainer.setProj_id(currentProjectOfUser.getProj_id()); // Setting project ID in body container
        } else {
            bodyContainer.setProj_id(1); // Setting default project ID
        }

        try {
            bodyContainer.setEmp_id(String.valueOf(principal.getEmp_id())); // Setting employee ID in body container
            bodyContainer.setSeat_id(Integer.parseInt(seat_id.toString())); // Setting seat ID in body container
            bodyContainer.setStart_date(body.getStart_date()); // Setting start date in body container
            bodyContainer.setEnd_date(body.getEnd_date()); // Setting end date in body container
            bodyContainer.setNote(body.getNote()); // Setting note in body container
            bodyContainer.setReservation_seat_status(body.getReservation_seat_status());

            reservationDao.insertReservation(bodyContainer); // Inserting reservation into database

            // Update seat status to "occupied"
            // seatDao.updateSeatStatus(seat_id, SeatStatus.available); // Updating seat status in DAO

            response.put("message", "Reservation Added Successfully"); // Setting success message in response
        } catch (Exception e) { // Catching any exceptions
            response.put("message", e.getMessage()); // Setting error message in response
        }
        return response; // Returning response
    }

    //   // Seats OCCUPIED FOR ADMIN
    //   public Map<String, Object> ReservedToOccupied (Long seat_id, ReservationInputBodyModel body) {
    //     Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // Getting authentication information

    //     ReservationInputBodyModel bodyContainer = new ReservationInputBodyModel(); // Initializing reservation body container

    //     UserModel principal = userDao.getPrincipal(authentication.getName()); // Retrieving current user details

    //     UserProjectModel currentProjectOfUser = userProjectDao.getProjectInvolvedOfUser(String.valueOf(principal.getEmp_id())); // Retrieving current user's project

    //     if (currentProjectOfUser != null) { // Checking if user is associated with a project
    //         bodyContainer.setProj_id(currentProjectOfUser.getProj_id()); // Setting project ID in body container
    //     } else {
    //         bodyContainer.setProj_id(1); // Setting default project ID
    //     }

    //     try {
    //         bodyContainer.setEmp_id(String.valueOf(principal.getEmp_id())); // Setting employee ID in body container
    //         bodyContainer.setSeat_id(Integer.parseInt(seat_id.toString())); // Setting seat ID in body container
    //         bodyContainer.setStart_date(body.getStart_date()); // Setting start date in body container
    //         bodyContainer.setEnd_date(body.getEnd_date()); // Setting end date in body container
    //         bodyContainer.setNote(body.getNote()); // Setting note in body container

    //         reservationDao.insertReservation(bodyContainer); // Inserting reservation into database

    //         // Update seat status to "repairing"
    //         seatDao.updateSeatStatus(seat_id, SeatStatus.occupied); // Updating seat status in DAO

    //         response.put("message", "Seat is occupied"); // Setting success message in response
    //     } catch (Exception e) { // Catching any exceptions
    //         response.put("message", e.getMessage()); // Setting error message in response
    //     }
    //     return response; // Returning response
    // }

    // Seats under restoration FOR ADMIN
    public Map<String, Object> underRepairing(Long seat_id, ReservationInputBodyModel body) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // Getting authentication information

        ReservationInputBodyModel bodyContainer = new ReservationInputBodyModel(); // Initializing reservation body container

        UserModel principal = userDao.getPrincipal(authentication.getName()); // Retrieving current user details

        UserProjectModel currentProjectOfUser = userProjectDao.getProjectInvolvedOfUser(String.valueOf(principal.getEmp_id())); // Retrieving current user's project

        if (currentProjectOfUser != null) { // Checking if user is associated with a project
            bodyContainer.setProj_id(currentProjectOfUser.getProj_id()); // Setting project ID in body container
        } else {
            bodyContainer.setProj_id(1); // Setting default project ID
        }

        try {
            bodyContainer.setEmp_id(String.valueOf(principal.getEmp_id())); // Setting employee ID in body container
            bodyContainer.setSeat_id(Integer.parseInt(seat_id.toString())); // Setting seat ID in body container
            bodyContainer.setStart_date(body.getStart_date()); // Setting start date in body container
            bodyContainer.setEnd_date(body.getEnd_date()); // Setting end date in body container
            bodyContainer.setNote(body.getNote()); // Setting note in body container

            reservationDao.insertReservation(bodyContainer); // Inserting reservation into database

            // Update seat status to "repairing"
            seatDao.updateSeatStatus(seat_id, SeatStatus.repairing); // Updating seat status in DAO

            response.put("message", "Seat is under restoration"); // Setting success message in response
        } catch (Exception e) { // Catching any exceptions
            response.put("message", e.getMessage()); // Setting error message in response
        }
        return response; // Returning response
    }

    // Repaired seats into available FOR ADMIN
    public Map<String, Object> FixedSeat(Long seat_id, ReservationInputBodyModel body) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // Getting authentication information

        ReservationInputBodyModel bodyContainer = new ReservationInputBodyModel(); // Initializing reservation body container

        UserModel principal = userDao.getPrincipal(authentication.getName()); // Retrieving current user details

        UserProjectModel currentProjectOfUser = userProjectDao.getProjectInvolvedOfUser(String.valueOf(principal.getEmp_id())); // Retrieving current user's project

        if (currentProjectOfUser != null) { // Checking if user is associated with a project
            bodyContainer.setProj_id(currentProjectOfUser.getProj_id()); // Setting project ID in body container
        } else {
            bodyContainer.setProj_id(1); // Setting default project ID
        }

        try {
            bodyContainer.setEmp_id(String.valueOf(principal.getEmp_id())); // Setting employee ID in body container
            bodyContainer.setSeat_id(Integer.parseInt(seat_id.toString())); // Setting seat ID in body container
            bodyContainer.setStart_date(body.getStart_date()); // Setting start date in body container
            bodyContainer.setEnd_date(body.getEnd_date()); // Setting end date in body container
            bodyContainer.setNote(body.getNote()); // Setting note in body container

            reservationDao.insertReservation(bodyContainer); // Inserting reservation into database

            // Update seat status to "fixed"
            seatDao.updateSeatStatus(seat_id, SeatStatus.available); // Updating seat status in DAO

            response.put("message", "Seat is already fixed"); // Setting success message in response
        } catch (Exception e) { // Catching any exceptions
            response.put("message", e.getMessage()); // Setting error message in response
        }
        return response; // Returning response
    }
    
    // Retrieves all reservations
    public List<ReservationModel> getAllReservation() {
        return reservationDao.getAllReservation(); // Fetching all reservations from DAO
    }

    // Retrieves all reservations with user info
    public List<ReservationPerSeatModel> getAllReservationWithUserInfo() {
        return reservationDao.getAllReservationWithUserInfo(); // Fetching all reservations with user info from DAO
    }

    // Archives a reservation
    public String ArchiveReservation(Long reservationId) {
        ReservationModel reservation = reservationDao.findById(reservationId); // Retrieving reservation from DAO

        if (reservation != null) { // Checking if reservation exists
            if (reservation.getDel_flag() == 1) { // Checking if reservation is already deleted
                return "Reservation with ID " + reservationId + " has already been deleted."; // Returning message
            } else {
                // Perform logical deletion
                reservationDao.ArchiveReservation(reservationId); // Archiving reservation in DAO

                return "Reservation with ID " + reservationId + " deleted successfully."; // Returning success message
            }
        } else {
            return "Reservation with ID " + reservationId + " cannot be found."; // Returning error message
        }
    }
}
