import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getSeatsFetch } from "../../../redux/state/seatPlanState";
import {
  getReservationsFetch,
  getReservationsWithUserInfoFetch,
  updateReservationStatusFetch,
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

const SeatPlan: React.FC = () => {
  const dispatch = useDispatch();

  //available state
  const [available, setAvailable] = useState(true);

  //occupied state
  const [occupied, setOccupied] = useState(true);

  //under-repair state
  const [underRepair, setUnderRepair] = useState(true);

  //reset state
  const [reset, setReset] = useState(false);

  // Add a state variable to track whether the effect has already been run
  const [isEffectRun, setIsEffectRun] = useState(false);

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

  console.log(reservationsData);

  // Fetch user information using emp_id
  const getUserInfo = (empId) => {
    const user = userData.find((user) => user.emp_id === empId);

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
  const reservationsAM = todayReservations.filter((reservation) => {
    const startTimeUTC = new Date(reservation.start_date); // Convert UTC start time to Date object
    return (
      startTimeUTC.getUTCHours() === 6 && startTimeUTC.getUTCMinutes() === 0
    ); // Check if hours and minutes match 6:00 AM
  });

  // Filter reservations starting after 6:00 PM but before midnight
  const reservationsPM = todayReservations.filter((reservation) => {
    const startTimeUTC = new Date(reservation.start_date); // Convert UTC start time to Date object
    return startTimeUTC.getUTCHours() >= 12 && startTimeUTC.getUTCHours() < 24; // Check if hours are between 18 (6:00 PM) and 23 (11:59 PM)
  });

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getSeatsFetch());
    dispatch(getReservationsFetch());
    dispatch(getReservationsWithUserInfoFetch());
  }, [dispatch]);

  useEffect(() => {
    const currentTime = new Date();

    // Function to update reservation status to "available" if end time has passed
    const updateReservationStatus = (reservation: any) => {
      const endTime = new Date(reservation.end_date);
      const startTime = new Date(reservation.start_date);
      const seatId = reservation.seat_id;

      // Convert start and end dates to UTC
      const utcStartTime = new Date(
        startTime.getTime() + startTime.getTimezoneOffset() * 60000
      );
      const utcEndTime = new Date(
        endTime.getTime() + endTime.getTimezoneOffset() * 60000
      );

      if (utcEndTime < currentTime) {
        // Format dates as strings in the required format
        const formattedStartTime = utcStartTime.toISOString();
        const formattedEndTime = utcEndTime.toISOString();

        // Dispatch action to update reservation status to "available"
        dispatch(
          updateReservationStatusFetch({
            seatId,
            start_date: formattedStartTime,
            end_date: formattedEndTime,
          })
        );
      }
    };

    // Run the effect only if it hasn't been run before
    if (!isEffectRun) {
      // Update reservations in reservationsAM array
      reservationsAM.forEach(updateReservationStatus);

      // Update reservations in reservationsPM array
      reservationsPM.forEach(updateReservationStatus);

      // Set isEffectRun to true to indicate that the effect has been run
      setIsEffectRun(true);
    }
  }, [dispatch, isEffectRun, reservationsAM, reservationsPM]); // Added isEffectRun to dependency array

  const currentTime = new Date(); // Get the current time

  const columnData = [
    {
      component: FirstCol,
      props: {
        seatPlan,
        getUserInfo,
        currentTime,
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
  console.log("this is reservations", todayReservations);

  console.log("this is AM", reservationsAM);
  console.log("this is PM", reservationsPM);

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
    setOccupied(true);
    setUnderRepair(true);
    setReset(false);
  };

  return (
    <div className="w-full h-[1000px] flex justify-center">
      {/* Render loading indicator while loading */}
      {isLoading ? (
        <LinearDeterminate />
      ) : (
        <div className="flex gap-x-10 h-full mt-[50px]">
          <div className="flex flex-col text-[.8rem] relative h-full w-full">
            <div
              className="flex items-center cursor-pointer gap-x-2"
              onClick={availableHandle}>
              <div className="h-[.5rem] w-[.5rem] rounded-full  bg-green-400"></div>
              <span>Available</span>
            </div>
            <div
              className="flex items-center cursor-pointer gap-x-2"
              onClick={occupiedHandle}>
              <div className="h-[.5rem] w-[.5rem] rounded-full bg-yellow-400"></div>
              <span>Occupied</span>
            </div>
            <div
              className="flex items-center cursor-pointer gap-x-2"
              onClick={underRepairHandle}>
              <div className="h-[.5rem] w-[.5rem] rounded-full  bg-red-500"></div>
              <span>Under-repair</span>
            </div>
            {reset && (
              <div
                className="flex items-center cursor-pointer gap-x-2"
                onClick={resetState}>
                <div className="h-[.5rem] w-[.5rem] rounded-full bg-blue-400"></div>
                <span>Reset</span>
              </div>
            )}
          </div>
          {columnData.map((col, index) => (
            <col.component key={index} {...col.props} />
          ))}
        </div>
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
  );
};

export default SeatPlan;
