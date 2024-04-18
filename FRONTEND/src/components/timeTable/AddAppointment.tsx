import React, { useState } from 'react';
import { Grid, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button } from '@mui/material';
import { addReservation } from '../../redux/state/addReservationActions';
import { useDispatch } from 'react-redux';

const AddAppointment = ({seat_id}) => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('06:00');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('12:30');
  const dispatch = useDispatch();
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

 // In your AddAppointment component
const handleSubmit = () => {
  // Handle submission logic here
  console.log('Start Date:', startDate);
  console.log('Start Time:', startTime);
  console.log('End Date:', endDate);
  console.log('End Time:', endTime);
  const note = 'Nice'; // Assuming note is static for now
  // Dispatch addReservation action with all required parameters
  dispatch(addReservation(seat_id, startDate, startTime, endDate, endTime, note));
};


  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Reserve a Seat for Seat {seat_id}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Start Date"
          type="date"
          value={startDate}
          onChange={handleStartDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Start Time</FormLabel>
          <RadioGroup row value={startTime} onChange={handleStartTimeChange}>
            <FormControlLabel value="06:00" control={<Radio />} label="6:00 AM" />
            <FormControlLabel value="12:30" control={<Radio />} label="12:30 PM" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="End Date"
          type="date"
          value={endDate}
          onChange={handleEndDateChange}
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend">End Time</FormLabel>
          <RadioGroup row value={endTime} onChange={handleEndTimeChange}>
            <FormControlLabel value="06:00" control={<Radio />} label="6:00 AM" />
            <FormControlLabel value="12:30" control={<Radio />} label="12:30 PM" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default AddAppointment;
