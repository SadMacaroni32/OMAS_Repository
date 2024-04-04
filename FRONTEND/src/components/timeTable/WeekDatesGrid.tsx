import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button, Box } from '@mui/material';
import { NavigateNext, NavigateBefore } from '@mui/icons-material';

const timeSlots = [
  "6:00 AM to 12:30 PM", "12:30 PM to 7:00 PM"
];

const WeekDatesGrid = ({ startOfWeek, endOfWeek, reserveSlot }) => {
  const [currentStartOfWeek, setCurrentStartOfWeek] = useState(startOfWeek);

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

  const dates: Date[] = [];
  let currentDate = new Date(currentStartOfWeek);

  // Calculate the dates for the week
  for (let i = 0; i < 7; i++) {
    dates.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  // State to track reservations
  const [reservations, setReservations] = useState({});

  // Function to handle reservation
  const handleReservation = (date: { toLocaleDateString: (arg0: string, arg1: { month: string; day: string; year: string; }) => any; }, timeSlot: string) => {
    const name = prompt('Enter your name:');
    if (name) {
      const reservationKey = `${date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}-${timeSlot}`;
      setReservations({ ...reservations, [reservationKey]: name });
      reserveSlot(date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }), timeSlot, name);
    }
  };

  return (
    <>
      <Box style={{ marginBottom: '20px' }}>
        <IconButton onClick={handlePreviousWeek}>
          <NavigateBefore />
        </IconButton>
        <IconButton onClick={handleNextWeek}>
          <NavigateNext />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{background:"#25476A"}}>
              <TableCell style={{ color: "white" }}>Date</TableCell>
              {dates.map((date, index) => (
                <TableCell style={{ color: "white" }} key={index}>{getDayName(date)}, {date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSlots.map((timeSlot, index) => (
              <TableRow key={index}>
                <TableCell>{timeSlot}</TableCell>
                {dates.map((date, index) => {
                  const reservationKey = `${date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' })}-${timeSlot}`;
                  return (
                    <TableCell key={index}>
                      {reservations[reservationKey] ? reservations[reservationKey] : (
                        <Button onClick={() => handleReservation(date, timeSlot)} variant="outlined">
                          Reserve
                        </Button>
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  function getDayName(date: Date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Frid', 'Sat'];
    return days[date.getDay()];
  }
};

export default WeekDatesGrid;
