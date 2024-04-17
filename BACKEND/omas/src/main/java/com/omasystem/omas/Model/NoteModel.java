package com.omasystem.omas.Model;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NoteModel {
    private String emp_id; // Employee ID
    private String username; // Username
    private String first_name; // First name
    private String middle_name; // Middle name
    private String last_name; // Last name
    private String note; // Note content
    private Timestamp noted_at; // Timestamp when note was made
    private int seat_id; // Seat ID associated with the note
}
