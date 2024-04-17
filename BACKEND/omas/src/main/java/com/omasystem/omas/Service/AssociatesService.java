package com.omasystem.omas.Service; 

import java.util.HashMap; 
import java.util.Map; 

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.stereotype.Service; 

import com.omasystem.omas.Dao.AssociatesDao; 

@Service 
public class AssociatesService {

    @Autowired 
    private AssociatesDao associatesDao; // Declaring a field for AssociatesDao injection

    // Method to get total associates
    public Map<String, Object> getTotalAssociates() {
        Map<String, Object> response = new HashMap<>(); // Creating a HashMap to store the response data
        try {
            Long totalAssociates = associatesDao.getTotalAssociates(); // Getting total associates from the DAO
            response.put("Total Associates", totalAssociates); // Adding total associates to the response map
            response.put("Messages", "Total associates retrieved successfully"); // Adding success message to the response map
        } catch (Exception e) {
            response.put("Messages", e.getMessage()); // Adding error message to the response map if an exception occurs
        }
        return response; // Returning the response map
    }

    // Method to get total assigned seats
    public Map<String, Object> getTotalAssignedSeats() {
        Map<String, Object> response = new HashMap<>(); // Creating a HashMap to store the response data
        try {
            Long assignedSeats = associatesDao.getTotalAssignedSeats(); // Getting total assigned seats from the DAO
            response.put("Total assigned seats", assignedSeats); // Adding total assigned seats to the response map
            response.put("Messages", "Total assigned seats retrieved successfully"); // Adding success message to the response map
        } catch (Exception e) {
            response.put("Message", e.getMessage()); // Adding error message to the response map if an exception occurs
        }
        return response; // Returning the response map
    }

    // Method to get total unassigned seats
    public Map<String, Object> getTotalUnassignedSeats() {
        Map<String, Object> response = new HashMap<>(); // Creating a HashMap to store the response data
        try {
            Integer unassignedSeats = associatesDao.getTotalUnassignedSeats(); // Getting total unassigned seats from the DAO
            response.put("Total unassigned seats", unassignedSeats); // Adding total unassigned seats to the response map
            response.put("Messages", "Total unassigned seats retrieved successfully"); // Adding success message to the response map
        } catch (Exception e) {
            response.put("Messages", e.getMessage()); // Adding error message to the response map if an exception occurs
        }
        return response; // Returning the response map
    }

}
