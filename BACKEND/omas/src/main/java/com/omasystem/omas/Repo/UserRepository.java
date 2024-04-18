package com.omasystem.omas.Repo; 

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository; 
import org.springframework.stereotype.Repository; 

import com.omasystem.omas.Entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, String>{ // Declaration of UserRepository interface, extending JpaRepository with User entity and String as the type of the entity's primary key

    // Method to find a user by their username.
    Optional<User> findByUsername(String username); // Declaration of the findByUsername method which returns an Optional<User> based on the username parameter
}
