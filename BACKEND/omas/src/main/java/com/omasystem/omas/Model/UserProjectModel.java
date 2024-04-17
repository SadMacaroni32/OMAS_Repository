package com.omasystem.omas.Model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserProjectModel {
    private Long upid; // User project ID
    private String emp_id; // Employee ID
    private String reg_id; // Registration ID
    private String update_id; // Update ID
    private int proj_id; // Project ID
    private int del_flag; // Deletion flag
    private Timestamp reg_date; // Registration date
    private Timestamp update_date; // Update date
}
