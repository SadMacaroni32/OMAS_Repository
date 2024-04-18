package com.omasystem.omas.Controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.omasystem.omas.Service.TimetableService;

@RestController
@RequestMapping("/api/timetable")
public class TimetableController {

    @Autowired
    private final TimetableService timetableService;
    
    public TimetableController(TimetableService timetableService) {
        this.timetableService = timetableService;
    }

    /* Retrieves the list of all reservations */
    @GetMapping("/reservations")
    public Map<String, Object> getAllReservations()
    {
        // Returns the list of all reservations
        return timetableService.getAllReservations();
    }

    /* Retrieves the list of reserved seats based on a specific time range */
    @GetMapping("/reservation")
    public Map<String, Object> getAllReservationPerTimeslot(@RequestParam("start_date") String startDate, @RequestParam("end_date") String endDate) {
        Map<String, String> params = new HashMap<>();
        params.put("start_date", startDate);
        params.put("end_date", endDate);

        // Returns the list of reserved seats based on a specific time range
        return timetableService.getAllReservationPerTimeslot(params);
    }


    /* Retrieves the list of reserved seats based on its start date and seat id */
    @GetMapping("/reservation/start")
    public Map<String, Object> getAllReservationStartDate(@RequestParam("startDate") String startDate, @RequestParam("seatId") int seatId) {
        // Returns the list of reserved seats based on its start date and seat id
        return timetableService.getAllReservationStartDate(startDate, seatId);
    }
    

    /* Retrieves all seats based on a reservation */
    @GetMapping("/reservations/seat")
    public Map<String, Object> getAllSeatsInReservation(@RequestParam Long reservationId) {
        Map<String, Object> response = new HashMap<>();
    
        try {
            Map<String, Object> seatsResponse = timetableService.getAllSeatsInReservation(reservationId);
            response.put("message", seatsResponse.get("message"));
        } catch (Exception e) {
            response.put("message", e.getMessage());
        }
    
        return response;
    }
    
        
}
