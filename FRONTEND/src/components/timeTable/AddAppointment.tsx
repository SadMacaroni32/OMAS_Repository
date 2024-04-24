import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { addReservation } from "../../redux/state/addReservationActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  fetchReservationsRequest,
  getReservationsFetch,
} from "../../redux/state/reservationState";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const AddAppointment = ({ seat_id }) => {
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState("06:00");
  const [endDate, setEndDate] = useState(null);
  const [endTime, setEndTime] = useState("12:30");
  const [note, setNote] = useState("");
  const [openModal, setOpenModal] = useState(false); // State for modal
  const dispatch = useDispatch();

  const reservations = useSelector(
    (state: RootState) => state.reservationsReducer.reservations
  );

  console.log("MIKE Reservations State", reservations);

  //get reservation data from state
  const reservationsData = useSelector(
    (state: RootState) => state.reservationReducer.reservationValue
  );

  console.log("All Reservations", reservationsData);

  // Filter reservations starting at 6:00 AM
  const reservationsAM = reservationsData.filter((reservation: any) => {
    const startTimeUTC = new Date(reservation.start_date); // Convert UTC start time to Date object
    return (
      startTimeUTC.getUTCHours() === 6 && startTimeUTC.getUTCMinutes() === 0
    ); // Check if hours and minutes match 6:00 AM
  });

  console.log("this is todays AM reservation", reservationsAM);

  // Filter reservations starting after 6:00 PM but before midnight
  const reservationsPM = reservationsData.filter((reservation: any) => {
    const startTimeUTC = new Date(reservation.start_date); // Convert UTC start time to Date object
    return startTimeUTC.getUTCHours() >= 12 && startTimeUTC.getUTCHours() < 24; // Check if hours are between 18 (6:00 PM) and 23 (11:59 PM)
  });

  console.log("this is todays PM reservation", reservationsPM);

  useEffect(() => {
    dispatch(fetchReservationsRequest());
    dispatch(getReservationsFetch());
  }, [dispatch]);

  // const handleStartDateChange = (event) => {
  //   const selectedStartDate = event.target.value;
  //   setStartDate(selectedStartDate);

  //   // Update end date if it's empty or earlier than the start date
  //   if (!endDate || endDate < selectedStartDate) {
  //     setEndDate(selectedStartDate);
  //   }
  // };

  const handleStartDateChange = (event) => {
    const selectedStartDate = new Date(event.target.value); // Convert string to Date object
    setStartDate(selectedStartDate);

    // Update end date if it's empty or earlier than the start date
    if (!endDate || endDate < selectedStartDate) {
      setEndDate(selectedStartDate);
    }
  };

  const handleStartTimeChange = (event) => {
    const selectedStartTime = event.target.value;
    setStartTime(selectedStartTime);

    if (selectedStartTime === "12:30" && startDate === endDate) {
      setEndTime("19:30");
    }
  };

  // const handleEndDateChange = (event) => {
  //   const selectedEndDate = event.target.value;
  //   setEndDate(selectedEndDate);
  // };

  const handleEndDateChange = (event) => {
    const selectedEndDate = new Date(event.target.value); // Convert string to Date object
    setEndDate(selectedEndDate);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  // const handleSubmit = () => {
  //   if (!startDate || !endDate || !startTime || !endTime || !note) {
  //     alert("Please fill in all fields.");
  //     return;
  //   } else {
  //     console.log("Start Date:", startDate);
  //     console.log("Start Time:", startTime);
  //     console.log("End Date:", endDate);
  //     console.log("End Time:", endTime);
  //     console.log("Note:", note);

  //     dispatch(
  //       addReservation(seat_id, startDate, startTime, endDate, endTime, note)
  //     );
  //     setOpenModal(true); // Open the modal after submitting
  //     setStartDate("");
  //     setEndDate("");
  //     setNote("");
  //     setStartTime("06:00");
  //     setEndTime("12:30");
  //   }
  // };

  // const handleSubmit = () => {
  //   if (!startDate || !endDate || !startTime || !endTime || !note) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }

  //   // Convert start and end dates to Date objects
  //   const startDateObj = new Date(startDate);
  //   const endDateObj = new Date(endDate);

  //   // Convert start and end times to UTC strings
  //   const startTimeUTC = startTime === "06:00" ? "06:00:00" : "12:30:00";
  //   const endTimeUTC = endTime === "12:30" ? "12:30:00" : "19:30:00";

  //   // Combine date and time for start and end dates
  //   const startDateTime = new Date(
  //     startDateObj.toDateString() + " " + startTimeUTC
  //   );
  //   const endDateTime = new Date(endDateObj.toDateString() + " " + endTimeUTC);

  //   // Dispatch the action with Date objects and UTC time strings
  //   dispatch(
  //     addReservation(seat_id, startDate, startTime, endDate, endTime, note)
  //   );

  //   setOpenModal(true); // Open the modal after submitting
  //   setStartDate(null);
  //   setEndDate(null);
  //   setNote("");
  //   setStartTime("06:00");
  //   setEndTime("12:30");
  // };

  const handleSubmit = () => {
    console.log("startDate:", startDate);
    console.log("endDate:", endDate);
    console.log("startTime:", startTime);
    console.log("endTime:", endTime);
    console.log("note:", note);

    if (!startDate || !endDate || !startTime || !endTime || !note) {
      alert("Please fill in all fields.");
      return;
    }

    // Extract and format the date part from startDate and endDate
    const formattedStartDate = startDate ? formatDate(startDate.$d) : null;
    const formattedEndDate = endDate ? formatDate(endDate.$d) : null;

    // Dispatch the action with reservation details
    dispatch(
      addReservation(
        seat_id,
        formattedStartDate,
        startTime,
        formattedEndDate,
        endTime,
        note
      )
    );

    setOpenModal(true); // Open the modal after submitting
    // Reset the form fields
    setStartDate(null);
    setEndDate(null);
    setNote("");
    setStartTime("06:00");
    setEndTime("12:30");
  };

  // Function to format date to "YYYY-MM-DD"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const handleCloseModal = () => {
    setOpenModal(false); // Close the modal
  };

  const reservedDates = reservations
    .filter((reservation) => reservation.seat_id === seat_id)
    .map((reservation) => {
      const rstartDate = new Date(reservation.start_date);
      const rendDate = new Date(reservation.end_date);

      return {
        rstartDate: new Date(
          Date.UTC(
            rstartDate.getFullYear(),
            rstartDate.getMonth(),
            rstartDate.getDate(),
            0,
            0,
            0
          )
        ), // Set time to 06:00:00 UTC
        rendDate: new Date(
          Date.UTC(
            rendDate.getFullYear(),
            rendDate.getMonth(),
            rendDate.getDate(),
            0,
            0,
            0
          )
        ), // Set time to 06:00:00 UTC
        reservationId: reservation.reservation_id, // Include the reservation_id
      };
    });

  console.log("TRY", reservedDates);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h5">
            Add Appointment for Seat No.{seat_id}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            label="Start Date"
            type="date"
            value={startDate}
            onChange={handleStartDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            inputProps={{
              min: new Date().toISOString().split("T")[0], // Set the minimum date to today

              shouldDisableDate: (date) => {
                const selectedDate = new Date(date); // Convert the selected date to a Date object
                console.log("Selected Date:", selectedDate);
                reservedDates.forEach((reservedDate) => {
                  console.log("Reserved Start Date:", reservedDate.rstartDate);
                  console.log("Reserved End Date:", reservedDate.rendDate);
                });
                const shouldDisable = reservedDates.some((reservedDate) => {
                  return (
                    selectedDate >= reservedDate.rstartDate &&
                    selectedDate <= reservedDate.rendDate
                  );
                });
                console.log("Should Disable:", shouldDisable);
                return shouldDisable;
              },
            }}
          /> */}
          <DatePicker
            label="Start Date"
            renderInput={(props) => <TextField {...props} />}
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            adapter={AdapterDayjs} // Use the Dayjs adapter
            shouldDisableDate={(date) => {
              const selectedDate = new Date(date);
              const currentDate = new Date();

              // Check if the selected date is before the current date
              if (selectedDate < currentDate) {
                return true; // Disable previous days
              }

              // Check if there are any reservations for the specific seat_id
              const reservationsForSeat = reservationsData.filter(
                (reservation) => reservation.seat_id === seat_id
              );

              if (reservationsForSeat.length === 0) {
                return false; // No reservations, so don't disable any dates
              }

              // Check if the selected date falls within any existing reservation period for the specific seat_id
              const isReserved = reservationsForSeat.some((reservation) => {
                const rstartDate = new Date(reservation.start_date);
                const rendDate = new Date(reservation.end_date);

                // Subtract one day from the end date
                rendDate.setDate(rendDate.getDate() - 1); // Subtract one day to make the range inclusive

                // Convert reservation start and end dates to UTC
                const rstartUTC = new Date(
                  Date.UTC(
                    rstartDate.getFullYear(),
                    rstartDate.getMonth(),
                    rstartDate.getDate()
                  )
                );
                const rendUTC = new Date(
                  Date.UTC(
                    rendDate.getFullYear(),
                    rendDate.getMonth(),
                    rendDate.getDate()
                  )
                );

                // Set hours, minutes, seconds, and milliseconds to 0 for selected date and reservation dates
                selectedDate.setHours(0, 0, 0, 0);
                rstartUTC.setHours(0, 0, 0, 0);
                rendUTC.setHours(0, 0, 0, 0);

                // Check if the selected date falls within the reservation period
                return selectedDate >= rstartUTC && selectedDate <= rendUTC;
              });

              // Disable the date if it meets any of the conditions
              return isReserved;
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Start Time</FormLabel>
            <RadioGroup row value={startTime} onChange={handleStartTimeChange}>
              <FormControlLabel
                value="06:00"
                control={<Radio />}
                label="6:00 AM"
              />
              <FormControlLabel
                value="12:30"
                control={<Radio />}
                label="12:30 PM"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <TextField
            label="End Date"
            type="date"
            value={endDate}
            onChange={handleEndDateChange}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            inputProps={{
              min: startDate || new Date().toISOString().split("T")[0], // Set the minimum date to today or selected start date
            }}
          /> */}

          <DatePicker
            label="End Date"
            renderInput={(props) => <TextField {...props} />}
            value={endDate ? endDate : null}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            adapter={AdapterDayjs}
            shouldDisableDate={(date) => {
              const selectedDate = new Date(date);
              const currentDate = new Date();

              // Check if the selected date is before the current date or before the start date
              if (selectedDate < currentDate || selectedDate < startDate) {
                return true; // Disable previous days
              }

              // Check if the selected date falls within any existing reservation period for the specific seat_id
              const isReserved = reservationsData.some((reservation) => {
                // Check if the reservation is for the specific seat_id
                if (reservation.seat_id !== seat_id) {
                  return false;
                }

                const rstartDate = new Date(reservation.start_date);
                const rendDate = new Date(reservation.end_date);

                // Subtract one day from the end date
                rendDate.setDate(rendDate.getDate() - 1); // Subtract one day to make the range inclusive

                // Convert reservation start and end dates to UTC
                const rstartUTC = new Date(
                  Date.UTC(
                    rstartDate.getFullYear(),
                    rstartDate.getMonth(),
                    rstartDate.getDate()
                  )
                );
                const rendUTC = new Date(
                  Date.UTC(
                    rendDate.getFullYear(),
                    rendDate.getMonth(),
                    rendDate.getDate()
                  )
                );

                // Get the UTC date and time for the selected date
                const selectedUTCDate = new Date(
                  Date.UTC(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    selectedDate.getDate()
                  )
                );

                // Check if the selected UTC date falls within the reservation period
                return (
                  selectedUTCDate >= rstartUTC && selectedUTCDate <= rendUTC
                );
              });

              // Disable the date if it meets any of the conditions
              return isReserved;
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">End Time</FormLabel>
            <RadioGroup row value={endTime} onChange={handleEndTimeChange}>
              <FormControlLabel
                value="12:30"
                control={<Radio />}
                label="12:30 PM"
                disabled={startTime === "12:30" && startDate === endDate} // Disable if start time is '12:30'
              />
              <FormControlLabel
                value="19:30"
                control={<Radio />}
                label="7:30 PM"
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
            inputProps={{
              maxLength: 255, // Set the maximum character limit to 255
            }}
          />
          <Typography
            variant="body2"
            sx={{ fontSize: "small", color: "gray" }}
            color={note.length > 255 ? "error" : "inherit"}
          >
            {note.length}/255
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
        <Dialog open={openModal} onClose={handleCloseModal}>
          <DialogTitle>Appointment Added</DialogTitle>
          <DialogContent>
            <Typography>
              Your appointment has been successfully added.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </LocalizationProvider>
  );
};

export default AddAppointment;
