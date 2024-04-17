package com.omasystem.omas.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omasystem.omas.Service.AssociatesService;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/api/associates") 
public class AssociatesController {
    
    @Autowired
    private AssociatesService associatesService;

    // Retrieves the total number of associates
    @GetMapping("/total")
    public Map<String, Object> getTotalAssociates() {
        // Returns the total number of associates
        return associatesService.getTotalAssociates();
    }

    // Retrieves the total number of assigned seats
    @GetMapping("/assigned")
    public Map<String, Object> getTotalAssignedSeats() {
        // Returns the total number of assigned seats
        return associatesService.getTotalAssignedSeats();
    }

    // Retrieves the total number of unassigned seats
    @GetMapping("/unassigned")
    public Map<String, Object> getTotalUnassignedSeats() {
        // Returns the total number of unassigned seats
        return associatesService.getTotalUnassignedSeats();
    }
}
