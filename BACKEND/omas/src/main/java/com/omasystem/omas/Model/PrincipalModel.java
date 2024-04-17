package com.omasystem.omas.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PrincipalModel {
    private Long emp_id; // Employee ID
    private String username; // Username
    private String first_name; // First name
    private String middle_name; // Middle name
    private String last_name; // Last name
    private String position_name; // Position name
    private String project_name; // Project name
    private String img_src; // Image source
}
