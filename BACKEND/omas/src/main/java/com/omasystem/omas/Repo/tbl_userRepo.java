package com.omasystem.omas.Repo; 

import java.util.Optional; 

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

import com.omasystem.omas.Entity.tbl_user; 

@Repository
public interface tbl_userRepo extends JpaRepository<tbl_user, String>{ // Declaration of tbl_userRepo interface, extending JpaRepository with tbl_user entity and String as the type of the entity's primary key
    
    // Method to find a user by their username.
    // @param username The username of the user to find.
    // @return An Optional containing the user if found, otherwise empty.
    Optional<tbl_user> findByUsername(String username); // Declaration of the findByUsername method which returns an Optional<tbl_user> based on the username parameter
}
