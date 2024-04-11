import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Button,
  Box,
} from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import WeekDisplay from "./WeekDisplay"; // Import WeekDisplay component
import { useDispatch, useSelector } from "react-redux";
import { fetchReservationsRequest } from "../../redux/state/reservationState";

const WeekDatesGrid = ({ startOfWeek, reserveSlot, seat_id }) => {
  const [currentStartOfWeek, setCurrentStartOfWeek] = useState(
    new Date(startOfWeek)
  );
  const reservations = useSelector((state) => state.reservationsReducer.reservations);

  // Dispatch action to fetch reservations when component mounts
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservationsRequest());
  }, [dispatch]);

  console.log(reservations);

  // Function to handle moving to the next week
  const handleNextWeek = () => {
    const nextWeekStart = new Date(currentStartOfWeek);
    nextWeekStart.setDate(nextWeekStart.getDate() + 7);

    // Find the next Monday
    while (nextWeekStart.getDay() !== 1) {
      nextWeekStart.setDate(nextWeekStart.getDate() + 1);
    }

    setCurrentStartOfWeek(nextWeekStart);
  };

  // Function to handle moving to the previous week
  const handlePreviousWeek = () => {
    const previousWeekStart = new Date(currentStartOfWeek);
    previousWeekStart.setDate(previousWeekStart.getDate() - 7);
    setCurrentStartOfWeek(previousWeekStart);
  };

  const endOfWeek = new Date(currentStartOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6); // Setting the end of the week to six days after the current start of the week

  const dates = [];
  let currentDate = new Date(currentStartOfWeek);

  // Calculate the dates for the week
  for (let i = 0; i < 7; i++) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }


  
  return (
    <>
      {/* Pass currentStartOfWeek and endOfWeek to WeekDisplay */}
      <WeekDisplay startOfWeek={currentStartOfWeek} endOfWeek={endOfWeek} />
      <Box sx={{ marginBottom: "20px" }}>
        <IconButton onClick={handlePreviousWeek}>
          <NavigateBefore />
        </IconButton>
        <IconButton onClick={handleNextWeek}>
          <NavigateNext />
        </IconButton>
      </Box>
      Seat Number to {seat_id}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: "#468faf" }}>
              <TableCell style={{ color: "white" }}>Date</TableCell>
              {dates.map((date, index) => (
                <TableCell style={{ color: "white" }} key={index}>
                  {getDayName(date)},{" "}
                  {date.toLocaleDateString("en-US", {
                    month: "2-digit",
                    day: "2-digit",
                    year: "2-digit",
                  })}
                  <br />
                  {reservations.map((reservation) => {
                    const reservationDate = new Date(reservation.start_date);
                    if (reservationDate.toDateString() === date.toDateString()) {
                      return (
                        <div key={reservation.reservation_id}>
                          {reservationDate.toLocaleTimeString()}
                        </div>
                      );
                    }
                    return null;
                  })}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservation, resIndex) => (
              <TableRow key={resIndex}>
                <TableCell>{reservation.seat_id === seat_id ? `AM` : ""}</TableCell>
                {dates.map((date, dateIndex) => (
                  <TableCell key={dateIndex}>
                    {reservation.seat_id === seat_id &&
                      new Date(reservation.start_date).toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                      }) === date.toLocaleDateString("en-US", {
                        month: "2-digit",
                        day: "2-digit",
                        year: "2-digit",
                      })
                        ? `Reservation ID: ${reservation.reservation_id}`
                        : ""}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  function getDayName(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Frid", "Sat"];
    return days[date.getDay()];
  }
};

export default WeekDatesGrid;
