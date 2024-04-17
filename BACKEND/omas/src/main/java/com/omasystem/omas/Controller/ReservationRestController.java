package com.omasystem.omas.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omasystem.omas.Model.ReservationInputBodyModel;
import com.omasystem.omas.Model.ReservationModel;
import com.omasystem.omas.Model.ReservationPerSeatModel;
import com.omasystem.omas.Service.ReservationService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/reservations")
@RequiredArgsConstructor
public class ReservationRestController {
    
    @Autowired
    private ReservationService reservationService;

    // Retrieves all reservations for a specific seat
    @GetMapping("/{seat_id}")
    public Map<String, Object> getAllReservationPerSeat(@PathVariable Long seat_id)
    {
        // Returns all reservations for a specific seat
        return reservationService.getAllReservationPerSeat(seat_id);
    }

    // Adds a reservation to a desired seat
    @PostMapping("/{seat_id}/add")
    public Map<String, Object> insertReservation(@PathVariable Long seat_id, @RequestBody ReservationInputBodyModel body)
    {
        // Inserts a reservation to a desired seat
        return reservationService.insertReservation(seat_id, body);
    }

    // Updates seat's status into restoration
    @PutMapping("/{seat_id}/repair-seat")
    public Map<String, Object> underRepairing( @PathVariable Long seat_id, @RequestBody ReservationInputBodyModel body)
   {
        // Updates seat's status into restoration
        return reservationService.underRepairing(seat_id, body);
    }

    // Updates seat's status into fixed
    @PutMapping("/{seat_id}/Fixed")
    public Map<String, Object> FixedSeat( @PathVariable Long seat_id, @RequestBody ReservationInputBodyModel body)
   {
        // Updates seat's status into fixed
        return reservationService.FixedSeat(seat_id, body);
    }

    // Retrieves all reservations
    @GetMapping("/all")
    public List<ReservationModel> getAllReservation()  {
        // Returns all reservations
        return reservationService.getAllReservation();
    }

    // Retrieves all reservations with user information
    @GetMapping("/allReservationWithUserInfo")
    public List<ReservationPerSeatModel> getAllReservationWithUserInfo() {
        // Returns all reservations with user information
        return reservationService.getAllReservationWithUserInfo();
    }

    // Archives a reservation
    @PutMapping("/archive/{reservation_id}")
    public String archiveReservation(@PathVariable("reservation_id") Long reservationId) {
        // Archives a reservation
        return reservationService.ArchiveReservation(reservationId);
    }
}
