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

  function getDayName(date) {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }

  function getTimeFromDate(dateTimeString) {
    const dateObj = new Date(dateTimeString);
    const hours = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function isBetween(dateTime, startTime, endTime) {
    const timeParts = dateTime.split(":");
    if (!timeParts) return false;
    const [hours, minutes] = timeParts;
    const reservationTime = parseInt(hours) + parseInt(minutes) / 60;
    console.log("Reservation Time (Hours):", reservationTime);
  
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);
    const startTimeInHours = startHours + startMinutes / 60;
    const endTimeInHours = endHours + endMinutes / 60;
    // console.log("Start Time (Hours):", startTimeInHours);
    // console.log("End Time (Hours):", endTimeInHours);
  
    return reservationTime >= startTimeInHours && reservationTime < endTimeInHours;
  }
  
function getReservationsByTimeRange(reservations, date, seat_id, startTime, endTime) {
  const matchingReservations = reservations.filter(reservation =>
    new Date(reservation.start_date).toLocaleDateString("en-US") === date.toLocaleDateString("en-US") &&
    reservation.seat_id === seat_id &&
    (
      (isBetween(getTimeFromDate(reservation.start_date), startTime, endTime)) ||
      (isBetween(getTimeFromDate(reservation.end_date), startTime, endTime))
    )

  );
  console.log("start",startTime);
  console.log("end",endTime);

  return matchingReservations.map((reservation, resIndex) => (
    <div key={resIndex}>
      {reservation.client_sn} {reservation.first_name}
    </div>
  ));
}


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
  {dates.map((date, dateIndex) => {
    console.log("Date:", date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    }));
    console.log("Start Time:", "06:30");
    console.log("End Time:", "12:30");

    return (
      <TableRow key={dateIndex}>
        <TableCell>
          {getDayName(date)}, {date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
          })}
        </TableCell>
        <TableCell
          key={dateIndex + "-morning"}
          style={{
            backgroundColor: getReservationsByTimeRange(reservations, date, seat_id, "06:30", "12:30").length > 0 ? "lightblue" : "inherit"
          }}
        >
          {getReservationsByTimeRange(reservations, date, seat_id, "06:30", "12:30").length > 0 ? (
            getReservationsByTimeRange(reservations, date, seat_id, "06:30", "12:30")
          ) : (
            "No reservation"
          )}
        </TableCell>
        <TableCell
          key={dateIndex + "-afternoon"}
          style={{
            backgroundColor: getReservationsByTimeRange(reservations, date, seat_id, "12:30", "19:31").length > 0 ? "lightblue" : "inherit"
          }}
        >
          {getReservationsByTimeRange(reservations, date, seat_id, "12:30", "19:31").length > 0 ? (
            getReservationsByTimeRange(reservations, date, seat_id, "12:30", "19:31")
          ) : (
            "No reservation"
          )}
        </TableCell>
      </TableRow>
    );
  })}
</TableBody>

        </Table>
      </TableContainer>
    </>
  );
};

export default WeekDatesGrid;