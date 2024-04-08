import React, { useState } from 'react';
import { Grid, Typography, Select, MenuItem, Box } from '@mui/material';

const YearView = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handleChangeYear = (event: any) => {
    setSelectedYear(event.target.value);
  };

  // Months array for the Select component
  const months = [
    { value: 0, label: 'January' },
    { value: 1, label: 'February' },
    { value: 2, label: 'March' },
    { value: 3, label: 'April' },
    { value: 4, label: 'May' },
    { value: 5, label: 'June' },
    { value: 6, label: 'July' },
    { value: 7, label: 'August' },
    { value: 8, label: 'September' },
    { value: 9, label: 'October' },
    { value: 10, label: 'November' },
    { value: 11, label: 'December' },
  ];

  // Function to get the day of the week for a given date
  const getDayOfWeek = (date: Date) => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
  };

  // Function to render a mini-calendar
  const renderMiniCalendar = () => {
    return (
      <div style={{ overflow: 'auto', maxHeight: '80vh' }}>
        <Grid container spacing={2} justifyContent="center">
          {months.map((month, index) => {
            const daysInMonth = new Date(selectedYear, index + 1, 0).getDate(); // Get the number of days in the current month
            const firstDayOfMonth = new Date(selectedYear, index, 1).getDay(); // Get the first day of the week for the current month
            const dates = Array.from({ length: daysInMonth }, (_, idx) => idx + 1); // Create an array of dates from 1 to the number of days in the month

            // Render the grid layout for the month
            return (
              <Grid item key={month.value} xs={12} sm={6} md={4}>
                <Box p={2} border={1} borderColor="primary.main" borderRadius={5}>
                  <Typography align="center" variant="h6">{month.label}</Typography>
                  <Grid container spacing={1} justifyContent="center">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <Grid item key={day}>
                        <Typography align="center" variant="body2">{day}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                  <Grid container spacing={1} justifyContent="center">
                    {dates.map((date, idx) => (
                      <Grid item key={date}>
                        <Typography align="center" variant="body2">{date}</Typography>
                      </Grid>
                    ))}
                  </Grid>
                  
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
      <Typography variant="h4">Year View Calendar - {selectedYear}</Typography>
      <Select value={selectedYear} onChange={handleChangeYear}>
        {Array.from({ length: 10 }, (_, index) => selectedYear - 5 + index).map((year) => (
          <MenuItem key={year} value={year}>
            {year}
          </MenuItem>
        ))}
      </Select>
      {renderMiniCalendar()}
    </div>
  );
};

export default YearView;
