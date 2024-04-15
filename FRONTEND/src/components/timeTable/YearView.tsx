import React, { useState } from "react";
import {
  Grid,
  Typography,
  Select,
  MenuItem,
  Box,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Modal, // Import Modal component
  Button, // Import Button component
} from "@mui/material";
import WeekDatesGrid from "./WeekDatesGrid"; // Import WeekDatesGrid component

const YearView = ({ seat_id }) => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [clickedDate, setClickedDate] = useState(null);
  const [openModal, setOpenModal] = useState(false); // State to control modal visibility

  const handleDateClick = (date) => {
    setClickedDate(date);
    setOpenModal(true); // Open the modal when a date is clicked
  };

  const handleChangeYear = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  const months = [
    { value: 0, label: "January" },
    { value: 1, label: "February" },
    { value: 2, label: "March" },
    { value: 3, label: "April" },
    { value: 4, label: "May" },
    { value: 5, label: "June" },
    { value: 6, label: "July" },
    { value: 7, label: "August" },
    { value: 8, label: "September" },
    { value: 9, label: "October" },
    { value: 10, label: "November" },
    { value: 11, label: "December" },
  ];

  const getDayOfWeek = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  const renderMiniCalendar = () => {
    return (
      <div style={{ overflow: "auto", maxHeight: "75vh" }}>
        <Grid container spacing={2}>
          {months.map((month, index) => {
            const daysInMonth = new Date(selectedYear, index + 1, 0).getDate();
            const firstDayOfMonth = new Date(selectedYear, index, 1).getDay();
            const dates = Array.from(
              { length: daysInMonth },
              (_, idx) => idx + 1
            );

            const datesForDaysOfWeek = {};
            const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            daysOfWeek.forEach((day) => {
              datesForDaysOfWeek[day] = [];
            });

            dates.forEach((date) => {
              const dayOfWeek = getDayOfWeek(
                new Date(selectedYear, index, date)
              );
              datesForDaysOfWeek[dayOfWeek].push(date);
            });

            return (
              <Grid item key={month.value} xs={12} sm={6} md={6}>
                <Box
                  p={2}
                  border={1}
                  borderColor="primary.main"
                  borderRadius={5}
                >
                  <Typography variant="h6">{month.label}</Typography>
                  <TableContainer component={Paper}>
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          {daysOfWeek.map((day) => (
                            <TableCell key={day} align="center">
                              {day}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[...Array(6)].map((_, rowIndex) => (
                          <TableRow key={rowIndex}>
                            {daysOfWeek.map((day, columnIndex) => {
                              const dateIndex = rowIndex * 7 + columnIndex;
                              const date =
                                dateIndex >= firstDayOfMonth &&
                                dateIndex - firstDayOfMonth + 1 <= daysInMonth
                                  ? dateIndex - firstDayOfMonth + 1
                                  : "";
                              return (
                                <TableCell
                                  key={`${day}-${rowIndex}-${columnIndex}`}
                                  align="center"
                                  style={{ cursor: "pointer" }}
                                >
                                  <Typography
                                    onClick={() =>
                                      handleDateClick(
                                        new Date(selectedYear, index, date)
                                      )
                                    }
                                    sx={{
                                      background: "",
                                      "&:hover": {
                                        background: "#25476A",
                                      },
                                    }}
                                  >
                                    {date}
                                  </Typography>
                                </TableCell>
                              );
                            })}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  };

  return (
    <div>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Year {selectedYear}
        <br />
        Seat Number: {seat_id}
      </Typography>

      <Select value={selectedYear} onChange={handleChangeYear}>
        {Array.from({ length: 10 }, (_, index) => selectedYear - 5 + index).map(
          (year) => (
            <MenuItem key={year} value={year}>
              {year}
            </MenuItem>
          )
        )}
      </Select>

      {/* Modal for WeekDatesGrid */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="week-dates-modal"
        aria-describedby="week-dates-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            minWidth: "80%",
            maxHeight: "80%",
            overflow: "auto",
           
          }}
        >
          {clickedDate && (
            <WeekDatesGrid
              startOfWeek={clickedDate}
              seat_id={seat_id}
              handleClose={handleCloseModal} // Pass handleClose function to close the modal
            />
          )}
        </Box>
      </Modal>

      <Box marginTop={2}>{renderMiniCalendar()}</Box>
    </div>
  );
};

export default YearView;
