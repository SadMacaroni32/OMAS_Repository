package com.omasystem.omas.Service; 

import org.springframework.security.authentication.AuthenticationManager; 
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken; 
import org.springframework.security.crypto.password.PasswordEncoder; 
import org.springframework.stereotype.Service; 

import com.omasystem.omas.Entity.AuthenticationRequest; 
import com.omasystem.omas.Entity.AuthenticationResponse; 
import com.omasystem.omas.Entity.RegisterRequest; 
import com.omasystem.omas.Entity.tbl_personal_info; 
import com.omasystem.omas.Entity.tbl_user; 
import com.omasystem.omas.Repo.tbl_personal_infoRepo; 
import com.omasystem.omas.Repo.tbl_userRepo; 

import lombok.RequiredArgsConstructor; 

@Service 
@RequiredArgsConstructor 
public class AuthenticationService {

    private final tbl_userRepo tbl_userRepository; // Declaring a field for tbl_userRepo injection
    private final tbl_personal_infoRepo tbl_personal_infoRepo; // Declaring a field for tbl_personal_infoRepo injection
    private final PasswordEncoder passwordEncoder; // Declaring a field for PasswordEncoder injection
    private final JwtService jwtService; // Declaring a field for JwtService injection
    private final AuthenticationManager authenticationManager; // Declaring a field for AuthenticationManager injection

    //Logic for emp_id
    private String generateEmpId() {
        // Get the count of existing entries
        long existingEntriesCount = tbl_userRepository.count();
        // Increment the count by 100 and convert it to a string
        return String.valueOf(existingEntriesCount + 100);
    }

    // Method to register a new user
    public AuthenticationResponse register(RegisterRequest request) {
        String empId = generateEmpId(); // Generating employee ID

        // Creating a new user entity
        var user = tbl_user.builder()
                .emp_id(empId)
                .username(request.getUsername())
                .position_id(1)
                .section_id(1)
                .dept_id(1)
                .status_code("TRA")
                .role_id(1)
                .img_src("Default")
                .password(passwordEncoder.encode(request.getPassword()))
                // .role(Role.USER)
                .build();
        
        if (user != null) { // Checking if user is not null
            tbl_userRepository.save(user); // Saving user entity
        }

        // Creating a new personal info entity
        var personal_info = tbl_personal_info.builder()
                .emp_id(empId)
                .fname(request.getFirstname())
                .lname(request.getLastname())
                .mname(request.getMiddlename())
                .email(request.getEmail())
                .build();

        if(personal_info != null) { // Checking if personal_info is not null
            tbl_personal_infoRepo.save(personal_info); // Saving personal info entity
        }

        var jwtToken = jwtService.generateToken(user); // Generating JWT token
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    // Method to authenticate a user
    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate( // Authenticating user credentials
                new UsernamePasswordAuthenticationToken(
                        request.getUsername(),
                        request.getPassword()));

        var user = tbl_userRepository.findByUsername(request.getUsername()) // Finding user by username
                .orElseThrow();

        var jwtToken = jwtService.generateToken(user); // Generating JWT token
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

}

