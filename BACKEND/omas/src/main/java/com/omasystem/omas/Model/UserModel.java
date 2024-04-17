package com.omasystem.omas.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserModel {
    private String emp_id; // Employee ID
    private String username; // Username
    private String password; // Password
    private int position_id; // Position ID
    private int dept_id; // Department ID
    private int section_id; // Section ID
    private String status_code; // Status code
    private String img_src; // Image source
}
