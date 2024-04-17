package com.omasystem.omas.Model;

import java.sql.Timestamp;

import com.omasystem.omas.Model.Enum.SeatStatus;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeatModel {
    private int seat_id; // Seat ID
    @Enumerated(EnumType.STRING)
    private SeatStatus seat_status; // Seat status
    private int del_flag; // Deletion flag
    private int dept_id; // Department ID
    private int proj_id; // Project ID
    private String reg_id; // Registration ID
    private String proj_name; // Project name
    private Timestamp reg_date; // Registration date
    private String update_id; // Update ID
    private Timestamp update_date; // Update date
    private int totalSeatsReserved; // Total number of seats reserved

    public int getTotalSeatsReserved() {
        return totalSeatsReserved;
    }

    public void setTotalSeatsReserved(int totalSeatsReserved) {
        this.totalSeatsReserved = totalSeatsReserved;
    }
}
