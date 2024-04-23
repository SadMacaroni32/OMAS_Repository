package com.omasystem.omas.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Timestamp;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tbl_user_project")
public class tbl_user_project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long upid; // User Project ID

    private String emp_id; // Employee ID
    private int proj_id; // Project ID
    private int reg_id; // Registration ID
    private Timestamp reg_date; // Registration Date

    // Constructors, getters, and setters
    // Omitted for brevity
}
