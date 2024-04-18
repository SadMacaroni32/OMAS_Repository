import React, { useState } from 'react';
import { Grid, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { addReservation } from '../../redux/state/addReservationActions';
import { useDispatch } from 'react-redux';

const AddAppointment = ({ seat_id }) => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('06:00');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('12:30');
  const [note, setNote] = useState('');
  const [openModal, setOpenModal] = useState(false); // State for modal
  const dispatch = useDispatch();

  const handleStartDateChange = (event) => {
    const selectedStartDate = event.target.value;
    setStartDate(selectedStartDate);

    // Update end date if it's empty or earlier than the start date
    if (!endDate || endDate < selectedStartDate) {
      setEndDate(selectedStartDate);
    }
  };

  const handleStartTimeChange = (event) => {
    const selectedStartTime = (event.target.value);
    setStartTime(selectedStartTime);

    if (selectedStartTime === '12:30'){
      setEndTime('19:30')
    } 

  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSubmit = () => {
    console.log('Start Date:', startDate);
    console.log('Start Time:', startTime);
    console.log('End Date:', endDate);
    console.log('End Time:', endTime);
    console.log('Note:', note);
    dispatch(addReservation(seat_id, startDate, startTime, endDate, endTime, note));
    setOpenModal(true); // Open the modal after submitting
    setStartDate('');
    setEndDate('');
    setNote('');
    setStartTime('06:00');
    setEndTime('12:30');
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h5">Add Appointment for Seat No.{seat_id}</Typography>
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
          // Disable picking previous dates
          inputProps={{
            min: new Date().toISOString().split('T')[0] // Set the minimum date to today
          }}
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
          // Disable picking previous dates
          inputProps={{
            min: startDate
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl component="fieldset">
          <FormLabel component="legend">End Time</FormLabel>
          <RadioGroup row value={endTime} onChange={handleEndTimeChange}>
            <FormControlLabel value="12:30" control={<Radio />} label="12:30 PM" 
             disabled={startTime === '12:30'} // Disable if start time is '12:30'
            />
            <FormControlLabel value="19:30" control={<Radio />} label="7:30 PM" 
           
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">Note:</Typography>
        <TextField
          label="Enter a Note"
          value={note}
          onChange={handleNoteChange}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      </Grid>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogTitle>Appointment Added</DialogTitle>
        <DialogContent>
          <Typography>Your appointment has been successfully added.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default AddAppointment;
