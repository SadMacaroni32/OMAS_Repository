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
  Box,
} from "@mui/material";
import { NavigateNext, NavigateBefore, ConstructionOutlined } from "@mui/icons-material";
import WeekDisplay from "./WeekDisplay"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchReservationStart } from "../../redux/state/weekReserveState";
import { RootState } from "../../redux/store/store";
import { fetchReservationsRequest } from "../../redux/state/reservationState";

const WeekDatesGrid = ({ startOfWeek, reserveSlot, seat_id }) => {
  const [currentStartOfWeek, setCurrentStartOfWeek] = useState(
    new Date(startOfWeek)
  );
  const reservations = useSelector(
    (state: RootState) => state.reservationsReducer.reservations
  );
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservationsRequest());
  }, [dispatch]);

  const handleNextWeek = () => {
    const nextWeekStart = new Date(currentStartOfWeek);
    nextWeekStart.setDate(nextWeekStart.getDate() + 7);

    // Find the next Monday
    while (nextWeekStart.getDay() !== 1) {
      nextWeekStart.setDate(nextWeekStart.getDate() + 1);
    }

    setCurrentStartOfWeek(nextWeekStart);
  };

  const handlePreviousWeek = () => {
    const previousWeekStart = new Date(currentStartOfWeek);
    previousWeekStart.setDate(previousWeekStart.getDate() - 7);
    setCurrentStartOfWeek(previousWeekStart);
  };

  const endOfWeek = new Date(currentStartOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 6);

  const dates = [];
  let currentDate = new Date(currentStartOfWeek);
  for (let i = 0; i < 7; i++) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }
  console.log("Week View", reservations);
  return (
    <>
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
              <TableCell style={{ color: "white" }}>6:30AM to 12:30PM</TableCell>
              <TableCell style={{ color: "white" }}>12:30PM to 7:30PM</TableCell>
             </TableRow>
          </TableHead>
          <TableBody>
  {dates.map((date, dateIndex) => (
    <TableRow key={dateIndex}>
      <TableCell>
        {getDayName(date)}, {date.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "2-digit",
        })}
      </TableCell>
      {reservations && reservations.some(reservation => (
        new Date(reservation.start_date).toLocaleDateString("en-US") === date.toLocaleDateString("en-US") &&
        reservation.seat_id === seat_id
      )) ? (
        reservations.map((reservation, resIndex) => (
          (new Date(reservation.start_date).toLocaleDateString("en-US") === date.toLocaleDateString("en-US")) &&
          (reservation.seat_id === seat_id) && (
            <TableCell key={resIndex} style={{ backgroundColor: 'lightblue' }}>
             {reservation.client_sn} {reservation.first_name} 
            </TableCell>
          )
        ))
      ) : (
        <TableCell>
          No reservation
        </TableCell>
      )}
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
