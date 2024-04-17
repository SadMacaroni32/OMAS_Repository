package com.omasystem.omas.Model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationModel {
    private Long reservation_id; // Reservation ID
    private String emp_id; // Employee ID associated with the reservation
    private String note; // Note associated with the reservation
    private String reg_id; // Registration ID
    private String update_id; // Update ID
    private int seat_id; // Seat ID for the reservation
    private int proj_id; // Project ID for the reservation
    private int del_flag; // Deletion flag
    private Timestamp start_date; // Start date of the reservation
    private Timestamp end_date; // End date of the reservation
    private Timestamp reg_date; // Registration date
    private Timestamp update_date; // Update date
    private String first_name; // First name of the employee
    private String middle_name; // Middle name of the employee
    private String last_name; // Last name of the employee
    private String client_sn; // Client serial number
    private String position_sn; // Position serial number
}
