import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Paper,
  Modal,
  Box,
} from "@mui/material";
import WeekDisplay from "./WeekDisplay";
import WeekDatesGrid from "./WeekDatesGrid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const daysOfWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Frid", "Sat"];
const monthsOfYear = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const Calendar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Get current date
  const currentDate = new Date();
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());
  const [weekInfo, setWeekInfo] = useState(null);

  // Get number of days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Get first day of the month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  // Function to handle date click
  const handleDateClick = (date: Date) => {
    setOpen(true);
    const clickedDate = new Date(date);
    const dayOfWeek = clickedDate.getDay();
    const diff = clickedDate.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Adjust if the day is Sunday
    const startOfWeek = new Date(clickedDate.setDate(diff));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 5);
    setWeekInfo({ startOfWeek, endOfWeek });
  };

  // Generate calendar grid
  const calendarGrid = [];
  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayOfMonth) || dayCounter > daysInMonth) {
        week.push(
          <Grid
            sx={{ border: 1, background: "#EEEEEE", borderColor: "#D6D6D6" }}
            item
            key={`${i}-${j}`}
            xs={1}
          ></Grid>
        );
      } else {
        const date = new Date(currentYear, currentMonth, dayCounter);
        week.push(
          <Grid
            sx={{
              border: 1,
              borderColor: "#D6D6D6",
              cursor: "pointer",
              width: 120,
              "&:hover": {
                backgroundColor: "#caf0f8",
              },
            }}
            item
            key={`${i}-${j}`}
            xs={1}
            onClick={() => handleDateClick(date)}
          >
            {dayCounter}
          </Grid>
        );
        dayCounter++;
      }
    }

    calendarGrid.push(
      <Grid container item key={i} spacing={2} sx={{ height: 120 }}>
        {week}
      </Grid>
    );
    if (dayCounter > daysInMonth) break;
  }

  const handleChangeMonth = (event: any) => {
    setCurrentMonth(event.target.value);
  };

  const handleChangeYear = (event: any) => {
    setCurrentYear(event.target.value);
  };

  const handleNextMonth = () => {
    const nextMonth = (currentMonth + 1) % 12;
    setCurrentMonth(nextMonth);
    if (nextMonth === 0) {
      setCurrentYear((prevYear: number) => prevYear + 1);
    }
  };

  const handlePrevMonth = () => {
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    setCurrentMonth(prevMonth);
    if (prevMonth === 11) {
      setCurrentYear((prevYear: number) => prevYear - 1);
    }
  };

  // Mock API function for reservation handling
  const reserveSlot = (day: any, timeSlot: any, name: any) => {
    console.log(`Reservation for ${name} at ${timeSlot} on ${day}`);
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "95%",
        height: "90%",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 5,
        justifyContent: "center", // Center the content horizontally
        alignItems: "center", // Center the content vertically
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h4">
          <Button onClick={handlePrevMonth}>
            <ArrowBackIcon />
          </Button>
          <Select value={currentMonth} onChange={handleChangeMonth}>
            {monthsOfYear.map((month, index) => (
              <MenuItem key={index} value={index}>
                {month}
              </MenuItem>
            ))}
          </Select>
          <Select
            sx={{ marginLeft: 2 }}
            value={currentYear}
            onChange={handleChangeYear}
          >
            {Array.from(
              { length: 10 },
              (_, index) => currentYear - 5 + index
            ).map((year) => (
              <MenuItem key={year} value={year}>
                {year}
              </MenuItem>
            ))}
          </Select>
          <Button onClick={handleNextMonth}>
            <ArrowForwardIcon />
          </Button>
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={1}>
        {daysOfWeek.map((day) => (
          <Grid item key={day} xs={1}>
            <Typography>{day}</Typography>
          </Grid>
        ))}
      </Grid>
      {calendarGrid}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "90%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 5,
          }}
        >
          <Box>
            {weekInfo && (
              <WeekDisplay
                startOfWeek={weekInfo.startOfWeek}
                endOfWeek={weekInfo.endOfWeek}
              />
            )}
          </Box>
          {weekInfo && (
            <WeekDatesGrid
              startOfWeek={weekInfo.startOfWeek}
              endOfWeek={weekInfo.endOfWeek}
              reserveSlot={reserveSlot}
            />
          )}
        </Box>
      </Modal>
    </Grid>
  );
};

export default Calendar;
