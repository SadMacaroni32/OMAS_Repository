package com.omasystem.omas.Model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationInputBodyModel {
    private String emp_id; // Employee ID
    private String note; // Note associated with the reservation
    private int seat_id; // Seat ID for the reservation
    private int proj_id; // Project ID for the reservation
    private Timestamp start_date; // Start date of the reservation
    private Timestamp end_date; // End date of the reservation
}
