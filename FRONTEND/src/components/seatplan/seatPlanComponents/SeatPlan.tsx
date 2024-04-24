import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getSeatsFetch } from "../../../redux/state/seatPlanState";
import {
  getReservationsFetch,
  getReservationsWithUserInfoFetch
} from "../../../redux/state/reservationState";
import TimeTablePage from "../../../pages/TimeTablePage";
import { getUsersFetch } from "../../../redux/state/userState";
import FirstCol from "./col-components/FirstCol";
import SecondCol from "./col-components/SecondCol";
import ThirdCol from "./col-components/ThirdCol";
import FourthCol from "./col-components/FourthCol";
import FifthCol from "./col-components/FifthCol";
import SixthCol from "./col-components/SixthCol";
import SeventhCol from "./col-components/SeventhCol";

//import loading animation
import LinearDeterminate from "./SeatPlanLoading";

//import style for seatPlan
import seatPlanStyle from '../seatPlan.module.css'
import { Box, Paper } from "@mui/material";

const SeatPlan: React.FC = () => {
  const dispatch = useDispatch();

  //available state
  const [available, setAvailable] = useState(true);

  //occupied state
  const [occupied, setOccupied] = useState(false);

  //under-repair state
  const [underRepair, setUnderRepair] = useState(false);

  //reset state
  const [reset, setReset] = useState(false);


  //get users for seat reservation
  const userData = useSelector(
    (state: RootState) => state.reservationReducer.reservationWithUserInfo
  );

  //get seatPlan data from state
  const seatPlan = useSelector(
    (state: RootState) => state.seatPlanReducer.seatPlanValue
  );

  //get isLoading state
  const isLoading = useSelector(
    (state: RootState) => state.seatPlanReducer.isLoading
  );

  //get reservation data from state
  const reservationsData = useSelector(
    (state: RootState) => state.reservationReducer.reservationValue
  );

  const [seatId, setSeatId] = useState(null);
  const [showTimeTablePage, setShowTimeTablePage] = useState(false);

  // Filter reservations for today
  const todayReservations = reservationsData.filter((reservation: any) => {
    const reservationDate = new Date(reservation.start_date);
    const today = new Date();
    return (
      reservationDate.getDate() === today.getDate() &&
      reservationDate.getMonth() === today.getMonth() &&
      reservationDate.getFullYear() === today.getFullYear()
    );
  });

  // console.log("this is todays reservation", todayReservations);

  // Fetch user information using emp_id
  const getUserInfo = (empId :any) => {
    const user : any = userData.find((user: any) => user.emp_id === empId);

    return user
      ? {
          client: user.client_sn,
          fname: user.first_name,
          lname: user.last_name,
          position: user.position_sn,
        }
      : null;
  };
  // Filter reservations starting at 6:00 AM
  const reservationsAM = todayReservations.filter((reservation :any) => {
    const startTimeUTC = new Date(reservation.start_date); // Convert UTC start time to Date object
    return (
      startTimeUTC.getUTCHours() === 6 && startTimeUTC.getUTCMinutes() === 0
    ); // Check if hours and minutes match 6:00 AM
  });

  // console.log("this is todays AM reservation", reservationsAM);


  // Filter reservations starting after 6:00 PM but before midnight
  const reservationsPM = todayReservations.filter((reservation :any) => {
    const startTimeUTC = new Date(reservation.start_date); // Convert UTC start time to Date object
    return startTimeUTC.getUTCHours() >= 12 && startTimeUTC.getUTCHours() < 24; // Check if hours are between 18 (6:00 PM) and 23 (11:59 PM)
  });

  // console.log("this is todays PM reservation", reservationsPM);


  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getSeatsFetch());
    dispatch(getReservationsFetch());
    dispatch(getReservationsWithUserInfoFetch());
  }, [dispatch]);


  const currentTime = new Date(); // Get the current time

  const columnData = [
    {
      component: FirstCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
        todayReservations,
        reservationsAM,
        reservationsPM,
        setShowTimeTablePage,
        setSeatId,
        available,
        occupied,
        underRepair,
      },
    },
    {
      component: SecondCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
        todayReservations,
        reservationsAM,
        reservationsPM,
        setShowTimeTablePage,
        setSeatId,
        available,
        occupied,
        underRepair,
      },
    },

    {
      component: ThirdCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
        todayReservations,
        reservationsAM,
        reservationsPM,
        setShowTimeTablePage,
        setSeatId,
        available,
        occupied,
        underRepair,
      },
    },
    {
      component: FourthCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
        todayReservations,
        reservationsAM,
        reservationsPM,
        setShowTimeTablePage,
        setSeatId,
        available,
        occupied,
        underRepair,
      },
    },
    {
      component: FifthCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
        todayReservations,
        reservationsAM,
        reservationsPM,
        setShowTimeTablePage,
        setSeatId,
        available,
        occupied,
        underRepair,
      },
    },
    {
      component: SixthCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
        todayReservations,
        reservationsAM,
        reservationsPM,
        setShowTimeTablePage,
        setSeatId,
        available,
        occupied,
        underRepair,
      },
    },
    {
      component: SeventhCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
        todayReservations,
        reservationsAM,
        reservationsPM,
        setShowTimeTablePage,
        setSeatId,
        available,
        occupied,
        underRepair,
      },
    },
    // Add more objects for other columns as needed
  ];


  //available handle function
  const availableHandle = () => {
    setAvailable(true);
    setOccupied(false);
    setUnderRepair(false);
    setReset(true);
  };

  //occupied handle function
  const occupiedHandle = () => {
    setAvailable(false);
    setOccupied(true);
    setUnderRepair(false);
    setReset(true);
  };

  //under-repair handle function
  const underRepairHandle = () => {
    setAvailable(false);
    setOccupied(false);
    setUnderRepair(true);
    setReset(true);
  };

  //reset available, occupied and under-repair state to true
  const resetState = () => {
    setAvailable(true);
    setOccupied(false);
    setUnderRepair(false);
    setReset(false);
  };

  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  return (
    <Box>
    <div className={seatPlanStyle.container}>
      {/* Render loading indicator while loading */}
      {isLoading ? (
        <LinearDeterminate />
      ) : (
        <Box className={seatPlanStyle.childContainer} >
          <Paper 
            className={seatPlanStyle.toggleContainer} 
            sx={{
              ml: 4,
              mt: 2,
              pr: 1,
              height: "5.9rem",
              width: "8.7rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "left",
              ...shadowStyle,
            }}
          >
            <div
              className={seatPlanStyle.toggleChildContainer}
              onClick={availableHandle}
            >
              <Box className={seatPlanStyle.toggleAvailable} sx={{m: 0.6}} />
              <span>Available</span>
            </div>
            <div
              className={seatPlanStyle.toggleChildContainer}
              onClick={occupiedHandle}
            >
              <Box className={seatPlanStyle.toggleOccupied} sx={{m: 0.6}} />
              <span>Occupied</span>
            </div>
            <div
              className={seatPlanStyle.toggleChildContainer}
              onClick={underRepairHandle}
            >
              <Box className={seatPlanStyle.toggleUnderRepair} sx={{m: 0.6}} />
              <span>Repairing</span>
            </div>
            {reset && (
              <div
                className={seatPlanStyle.toggleChildContainer}
                onClick={resetState}
              >
                <Box className={seatPlanStyle.toggleReset} sx={{m: 0.6}} />
                <span>Reset</span>
              </div>
            )}
          </Paper>

          <Box className={seatPlanStyle.columnContainer}
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "107rem",
            ml: 1, mb: 6, mr: 6, mt: 1,
            pt: 2, pr:1, pl: 1, pb: 1,
          }}>
            {columnData.map((col, index) => (
              <col.component key={index} {...col.props} />
            ))}
          </Box>
        </Box>
      )}

      {seatPlan.map((s, idx) => {
        const { seat_id } = s;
        return (
          <div key={idx}>
            {showTimeTablePage && seatId === seat_id && (
              <TimeTablePage
                seat_id={seat_id}
                setShowTimeTablePage={setShowTimeTablePage}
              />
            )}
          </div>
        );
      })}
    </div>
    </Box>
  );
};

export default SeatPlan;
