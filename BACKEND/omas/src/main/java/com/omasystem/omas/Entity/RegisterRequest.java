package com.omasystem.omas.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {

    private String emp_id; // Employee ID for registration
    private String firstname; // First name of the user for registration
    private String lastname; // Last name of the user for registration
    private String middlename; // Middle name of the user for registration
    private String username; // Username for registration
    private String password; // Password for registration
    private String email; // Email address of the user for registration
}
