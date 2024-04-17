package com.omasystem.omas.Model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TimetableModel {
    private Long reservation_id; // Reservation ID
    private int seat_id; // Seat ID
    private Timestamp start_date; // Start date of the reservation
    private Timestamp end_date; // End date of the reservation
    private String note; // Note associated with the reservation
    private String project_name; // Project name
    private String client_name; // Client name
}
