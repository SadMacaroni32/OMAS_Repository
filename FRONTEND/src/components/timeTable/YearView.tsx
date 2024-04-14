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
} from "@mui/material";

const YearView = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleChangeYear = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectedYear(event.target.value as number);
  };

  // Months array for the Select component
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

  // Function to get the day of the week for a given date
  const getDayOfWeek = (date: Date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  };

  // Function to render a mini-calendar
  const renderMiniCalendar = () => {
    return (
      <div style={{ overflow: "auto", maxHeight: "80vh" }}>
        <Grid container spacing={2}>
          {months.map((month, index) => {
            const daysInMonth = new Date(selectedYear, index + 1, 0).getDate(); // Get the number of days in the current month
            const firstDayOfMonth = new Date(selectedYear, index, 1).getDay(); // Get the first day of the week for the current month
            const dates = Array.from(
              { length: daysInMonth },
              (_, idx) => idx + 1
            ); // Create an array of dates from 1 to the number of days in the month

            // Initialize an array to hold the dates for each day of the week
            const datesForDaysOfWeek: { [key: string]: number[] } = {};
            const daysOfWeek = [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ];
            daysOfWeek.forEach((day) => {
              datesForDaysOfWeek[day] = [];
            });

            // Populate the dates for each day of the week
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
                                >
                                  {date}
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
<Box marginTop={2}>
      {renderMiniCalendar()}
      </Box>
    </div>
  );
};

export default YearView;
