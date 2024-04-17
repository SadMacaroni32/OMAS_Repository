package com.omasystem.omas.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.omasystem.omas.Entity.AuthenticationRequest;
import com.omasystem.omas.Entity.AuthenticationResponse;
import com.omasystem.omas.Entity.RegisterRequest;
import com.omasystem.omas.Service.AuthenticationService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {
    
    private final AuthenticationService service;

    // Allows a user to register an account
    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register (
        @RequestBody RegisterRequest request
    ) {
        // Registers a new user account and returns authentication response
        return ResponseEntity.ok(service.register(request));
    }

    // Allows a user to log in and authenticate
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate (
        @RequestBody AuthenticationRequest request
    ) {
        // Authenticates the user login credentials and returns authentication response
        return ResponseEntity.ok(service.authenticate(request));
    }
}
