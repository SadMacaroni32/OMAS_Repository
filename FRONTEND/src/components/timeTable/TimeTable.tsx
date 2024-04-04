import React from "react";
import { styled } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import dayjs from 'dayjs';



const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Frid"];
const timeSlots = [
  "6:00 AM",
  "7:00 AM",
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
];

// Dummy function for reservation handling
const handleReservation = (day: string, timeSlot: string) => {
  console.log(`Reserving ${timeSlot} on ${day}`);
  // Implement your reservation logic here
};

export default function Timetable() {
  
  
  // Get the first day of the current week (Monday)
  const firstDayOfWeek = dayjs().startOf('week');

  // Create an array of dates for the current week starting from Monday
  const datesOfWeek = [...Array(5)].map((_, index) =>
    firstDayOfWeek.add(index, 'day').format('MM/DD/YY')
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ background: "#ECE0D1" }}>
              <TableCell>Time</TableCell>
              {daysOfWeek.map((day, index) => (
                <TableCell key={index} onClick={() => handleReservation(day, timeSlots[0])}>
                  <>{day}</>
                  &nbsp;
                  <>{datesOfWeek[index]}</>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSlots.map((timeSlot) => (
              <TableRow key={timeSlot}>
                <TableCell component="th" scope="row">
                  {timeSlot}
                </TableCell>
                {daysOfWeek.map((day, index) => (
                  <TableCell key={`${day}-${timeSlot}`} onClick={() => handleReservation(day, timeSlot)}>
                    {/* Your content here */}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
