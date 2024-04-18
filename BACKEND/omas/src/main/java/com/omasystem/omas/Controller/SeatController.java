package com.omasystem.omas.Controller;

import org.springframework.web.bind.annotation.RestController;

import com.omasystem.omas.Model.SeatModel;
import com.omasystem.omas.Service.SeatService;

import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/seats")
public class SeatController {

    @Autowired
    private SeatService seatService;

    // Retrieves all seats
    @GetMapping("/all")
    public ResponseEntity<List<SeatModel>> getAllSeats() {
        // Returns all seats
        return seatService.getAllSeats();
    }

    // Retrieves all available seats
    @GetMapping("/available")
    public List<SeatModel> getAvailableSeat() {
        // Returns all available seats
        return seatService.getAvailableSeat();
    }

    // Retrieves all occupied seats
    @GetMapping("/occupied")
    public List<SeatModel> getOccupiedSeat() {
        // Returns all occupied seats
        return seatService.getOccupiedSeat();
    }

    // Retrieves all seats under restoration
    @GetMapping("/repairing")
    public List<SeatModel> getRepairingSeat() {
        // Returns all seats under restoration
        return seatService.getRepairingSeat();
    }

    // Retrieves seats by project
    @GetMapping("/project")
    public ResponseEntity<Map<String, Object>> getTotalSeatsByProject(@RequestParam Long projectId) {
        // Returns total seats by project
        return seatService.getTotalSeatsByProject(projectId);
    }

    // Retrieves all seats with project information
    @GetMapping("/projectInfo/{proj_id}")
    public List<SeatModel> getAllSeatsWithProjectName(@PathVariable("proj_id") Long proj_id) {
        // Returns all seats with project information
        return seatService.getAllSeatsWithProjectName(proj_id);
    }

}
