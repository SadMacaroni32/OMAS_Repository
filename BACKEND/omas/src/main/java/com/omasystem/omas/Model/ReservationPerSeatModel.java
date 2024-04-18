package com.omasystem.omas.Model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationPerSeatModel {
    private Long reservation_id; // Reservation ID
    private String position_sn; // Position serial number
    private String first_name; // First name of the employee
    private String middle_name; // Middle name of the employee
    private String last_name; // Last name of the employee
    private String client_sn; // Client serial number
    private String emp_id; // Employee ID associated with the reservation
    private int seat_id; // Seat ID for the reservation
    private Timestamp start_date; // Start date of the reservation
    private Timestamp end_date; // End date of the reservation
    private String note;
}
