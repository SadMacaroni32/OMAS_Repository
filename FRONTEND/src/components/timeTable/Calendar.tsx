import * as React from "react";
import { useState, useEffect } from "react"; // Import useEffect hook
import { useSelector, useDispatch } from "react-redux"; // Import hooks to access Redux store
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  Paper,
  Modal,
  Box,
  TextField,
  IconButton,
  ButtonGroup,
  Grow,
  Popper,
  ClickAwayListener,
  MenuList,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WeekDisplay from "./WeekDisplay";
import WeekDatesGrid from "./WeekDatesGrid";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ReservationList from "./ReservationList";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { current } from "@reduxjs/toolkit";
import { fetchReservationsRequest } from "../../redux/state/reservationState";
import YearView from "./YearView";
import AddAppointment from "./AddAppointment";
import { RootState } from "../../redux/store/store";

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
const options = ["Years", "Months", "Weeks", "Reservation List"];

const Calendar = ({ seat_id, setShowTimeTablePage }) => {
  // Retrieve reservations from Redux store using useSelector
  const reservations = useSelector(
    (state: RootState) => state.reservationsReducer.reservations
  );

  // Dispatch action to fetch reservations when component mounts
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("Dispatching fetchReservationsRequest");
    dispatch(fetchReservationsRequest());
  }, [dispatch]);

  console.log("mga reserved",(reservations));


  const [openList, setOpenList] = useState(false);
  const handleOpenList = () => setOpenList(true);
  const handleCloseList = () => {
    setOpenList(false);
    setSelectedIndex(1);
  };
  const [openYearView, setOpenYearView] = useState(false);
  const handleOpenYearView = () => setOpenYearView(true);
  const handleCloseYearView = () => {
    setOpenYearView(false);
    setSelectedIndex(1);
  };



  const [openAddAppointment, setOpenAddAppointment] = useState(false);
  const handleOpenAddAppointment = () => setOpenAddAppointment(true);
  const handleCloseAddAppointment = () => {
    setOpenAddAppointment(false);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setShowTimeTablePage(false);
  const handleCloseWeeks = () => {
    setOpen(false);
    setSelectedIndex(1); // Set to Months
  };

  //Group Buttons
  const [openButtons, setOpenButtons] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleClickButtons = () => {
    console.info(`You clicked ${options[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    if (options[index] === "Weeks") {
      const currentDate = new Date();
      handleDateClick(currentDate);
    } else if (options[index] === "Reservation List") {
      handleOpenList();
    } else if (options[index] === "Years") {
      handleOpenYearView();
    }
  };

  const handleToggleButtons = () => {
    setOpenButtons((prevOpen: any) => !prevOpen);
  };

  const handleCloseButtons = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpenButtons(false);
  };

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
  const handleDateClick = (date: string | number | Date | null) => {
    if (!date || date.getMonth() !== currentMonth) {
      // Date clicked is either null or not in the current month, return without opening the modal
      return;
    }
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
        week.push({ date: null, dayOfMonth: null });
      } else {
        const date = new Date(currentYear, currentMonth, dayCounter);
        week.push({ date, dayOfMonth: dayCounter });
        dayCounter++;
      }
    }
    calendarGrid.push(week);
    if (dayCounter > daysInMonth) break;
  }

// Generate calendar grid with reservation IDs
const calendarGridWithReservations = calendarGrid.map((week, i) => (
  <Grid
    container
    item
    key={i}
    spacing={1}
    sx={{ height: 120 }}
    justifyContent="center"
  >
    {week.map((day, index) => {
      const reservationsForDay = reservations.filter((reservation) => {
        const reservationStartDate = new Date(reservation.start_date);
        const reservationEndDate = new Date(reservation.end_date);

        // Convert reservation start and end times to UTC format
        const reservationStartUTC = reservationStartDate.toISOString();
        const reservationEndUTC = reservationEndDate.toISOString();

        // Reset time to midnight for comparison
        reservationStartDate.setUTCHours(0, 0, 0, 0);
        reservationEndDate.setUTCHours(0, 0, 0, 0);
        const dayDate = day.date;

        if (
          dayDate &&
          dayDate >= reservationStartDate &&
          dayDate <= reservationEndDate
        ) {
          return reservation.seat_id === seat_id;
        } else if (
          dayDate &&
          dayDate.toDateString() === reservationStartDate.toDateString() // Compare only dates without time
        ) {
          return reservation.seat_id === seat_id;
        }
        
      });

      return (
        <Grid
          display="flex"
          flexDirection="column"
          sx={{
            borderRadius: 4,
            marginLeft: 1,
            border: 1,
            borderColor: "#25476A",
            cursor: "pointer",
            width: `${100 / 7}%`, // Distribute equally across 7 days
            height: "100%", // Full height of the container
            backgroundColor:
              day.date && day.date.getMonth() !== currentMonth
                ? "#EEEEEE"
                : reservationsForDay.length > 0
                ? "#caf0f8" // Background color for dates with reservations
                : "transparent", // Transparent background for other dates
            "&:hover": {
              backgroundColor: "#caf0f8", // Hover color for all dates
            },
          }}
          item
          key={`${i}-${index}`}
          xs={1}
          onClick={() => handleDateClick(day.date)}
        >
          {day.date && (
            <Typography flexWrap={1} fontWeight="bold">
              {day.dayOfMonth}
            </Typography>
          )}
          {/* Display reservation IDs if there are reservations */}
          {reservationsForDay.length > 0 && (
            <Typography flexWrap={1}>
              {reservationsForDay.map((reservation) => (
                <div key={reservation.reservation_id}>
                  {reservation.reservation_id}
                </div>
              ))}
            </Typography>
          )}
        </Grid>
      );
    })}
  </Grid>
));





  const handleChangeMonth = (event: { target: { value: any } }) => {
    setCurrentMonth(event.target.value);
  };

  const handleChangeYear = (event: { target: { value: any } }) => {
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
    <div>

      
    <Grid
      container
      spacing={1}
      m={1}
      sx={{
        overflow: 'auto',
        width: "95%",
        height: "100%",
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
        Seat Number: {seat_id}
      </Typography>
      </Grid>
      {/* "X" button to close modal */}
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
        }}
        onClick={handleClose}
      >
        <CloseIcon width={150} />
      </IconButton>
      <Grid item xs={9}>
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
      <Grid item xs={3}>
        <React.Fragment>
          <ButtonGroup
            variant="contained"
            ref={anchorRef}
            aria-label="Button group with a nested menu"
          >
            <Button onClick={handleClickButtons}>
              {options[selectedIndex]}
            </Button>
            <Button
              size="small"
              aria-controls={openButtons ? "split-button-menu" : undefined}
              aria-expanded={openButtons ? "true" : undefined}
              aria-label="select merge strategy"
              aria-haspopup="menu"
              onClick={handleToggleButtons}
            >
              <ArrowDropDownIcon />
            </Button>
          </ButtonGroup>
          <Popper
            sx={{
              zIndex: 1,
            }}
            open={openButtons}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
            disablePortal
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleCloseButtons}>
                    <MenuList id="split-button-menu" autoFocusItem>
                      {options.map((option, index) => (
                        <MenuItem
                          key={option}
                          selected={index === selectedIndex}
                          onClick={(event: any) => {
                            handleMenuItemClick(event, index);
                          }}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </React.Fragment>

        <Button onClick={handleOpenAddAppointment} sx={{marginLeft:2}}>Add Appointment</Button>
      </Grid>
      
      
      <Typography variant="h3" ml={2}>
        {monthsOfYear[currentMonth]} {currentYear}
      </Typography>

      {/* Modal to display the ReservationList */}
      <Modal open={openList} onClose={handleCloseList}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Reservation List
          </Typography>
          <ReservationList />
        </Box>
      </Modal>

      <Grid container item xs={12} spacing={1} justifyContent="center">
        {daysOfWeek.map((day) => (
          <Grid item key={day} xs={1} marginLeft={1}>
            <Typography align="center">{day}</Typography>
          </Grid>
        ))}
      </Grid>
      {calendarGridWithReservations}
      <Modal
        open={open}
        onClose={handleCloseWeeks}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            width: "70%",
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
          {weekInfo && (
            <WeekDatesGrid
              startOfWeek={weekInfo.startOfWeek}
              endOfWeek={weekInfo.endOfWeek}
              reserveSlot={reserveSlot}
              seat_id={seat_id}
            />
          )}
        </Box>
      </Modal>

      

      
      
    </Grid>
    <Modal open={openYearView} onClose={handleCloseYearView} >
        <Box
          sx={{
            position: "absolute",
            width: "72rem",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
          }}
        >
          <YearView seat_id={seat_id}/>
   
        </Box>
      </Modal>

      <Modal open={openAddAppointment} onClose={handleCloseAddAppointment}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            boxShadow: 24,
            borderRadius: 5,
          }}
        >
       
          <AddAppointment seat_id={seat_id}/>
        </Box>
      </Modal>
    </div>
  );
};

export default Calendar;
