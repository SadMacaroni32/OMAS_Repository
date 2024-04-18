package com.omasystem.omas.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.omasystem.omas.Dao.PrincipalDao;
import com.omasystem.omas.Model.PrincipalModel;

@Service
public class PrincipalService {
    @Autowired // Annotation for automatic dependency injection
    private PrincipalDao principalDao; // Declaring a field for PrincipalDao injection
    
    Map<String, Object> response = new HashMap<String, Object>(); // Creating a HashMap for response data
    
    // GET ALL PRINCIPAL INFO
    public PrincipalModel getPrincipalInfo(String username) {
        // Use the username parameter to query the principal information from MyBatis
        return principalDao.getPrincipal(username);
    }
    // ##OLD## GET ALL PRINCIPAL INFO
    // public Map<String, Object> getPrincipalInfo() // Method to get principal info
    // {
    //     Authentication authentication = SecurityContextHolder.getContext().getAuthentication(); // Getting the authentication object from SecurityContextHolder
    
    //     if(authentication != null && authentication.isAuthenticated()) // Checking if authentication is not null and is authenticated
    //     try {
    //         response.put("message", authentication.getPrincipal()); // Adding principal information to the response map
    //     } catch (Exception e) {
    //         response.put("message", e.getMessage()); // Adding error message to the response map if an exception occurs
    //     }
    
    //     return response; // Returning the response map
    // }
    
    /* GET ALL PRINCIPAL USERS */
    public ResponseEntity<List<PrincipalModel>> getAllPrincipalUsers() { // Method to get all principal users
        try {
            List<PrincipalModel> principals = principalDao.getAllPrincipalUsers(); // Getting all principal users from PrincipalDao
            if (principals != null && !principals.isEmpty()) { // Checking if the list of principals is not null and not empty
                return ResponseEntity.ok(principals); // Returning ResponseEntity with list of principals if found
            } else {
                return ResponseEntity.notFound().build(); // Returning ResponseEntity with not found status if no principals found
            }
        } catch (Exception e) {
            e.printStackTrace(); // Printing stack trace if an exception occurs
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build(); // Returning ResponseEntity with internal server error status
        }
    }
    
}
