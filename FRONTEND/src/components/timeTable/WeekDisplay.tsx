import React from 'react';
import { Box, Typography } from '@mui/material';

const WeekDisplay = ({ startOfWeek, endOfWeek }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return (
    <>
      <Box sx={{margin: 2}}>
      <Typography variant="h6">Week:</Typography>
      <Typography>{startOfWeek.toDateString()} - {endOfWeek.toDateString()}</Typography>
      </Box>
    </>
  );
};

export default WeekDisplay;
