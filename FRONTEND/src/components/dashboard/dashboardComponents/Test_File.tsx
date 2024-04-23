import { Box, Paper } from '@mui/material';
import React from 'react';

export default function TestFile() {
    let start_date: Date = new Date("2024-04-22T06:00:00.000+08:00");
    let end_date: Date = new Date("2024-04-22T12:30:00.000+08:00");
    let current_date: Date = new Date();

    let message: string;
    if (current_date >= start_date && current_date <= end_date) {
        message = "On Time";
    } else {
        message = "Not on Time";
    }

    console.log("Current Date:", current_date.toLocaleString("en-US")); // Log current date and time
    console.log("Start Date:", start_date.toLocaleString("en-US")); // Log start date and time
    console.log("End Date:", end_date.toLocaleString("en-US")); // Log end date and time
    console.log("Message:", message); // Log message

    return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Paper elevation={6} style={{ textAlign: 'center', padding: '20px', maxWidth: '400px', fontWeight: "bold" }}>{message}</Paper>
        </Box>
    );
}
