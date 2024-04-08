import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getSeatsFetch } from "../../../redux/state/seatPlanState";
import { getReservationsFetch } from "../../../redux/state/reservationState";
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

  //get users for seat reservation
  const userData = useSelector((state: RootState) => state.userReducer.users);

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

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getSeatsFetch());
    dispatch(getReservationsFetch());
  }, [dispatch]);

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

  // Fetch user information using emp_id
  const getUserInfo = (empId) => {
    const user = userData.find((user) => user.emp_id === empId);
    return user
      ? {
          deptName: user.dept_name,
          fname: user.fname,
          lname: user.lname,
          position: user.position,
        }
      : null;
  };

  // Filter reservations starting at 6:00 PM
  const reservationsAM = todayReservations.filter((reservation) => {
    const startTime = new Date(reservation.start_date);
    return startTime.getHours() === 6 && startTime.getMinutes() === 0;
  });

  // Filter reservations starting after 6:00 PM but before midnight
  const reservationsPM = todayReservations.filter((reservation) => {
    const startTime = new Date(reservation.start_date);
    return startTime.getHours() >= 12 && startTime.getHours() < 24;
  });

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
      },
    },
    // Add more objects for other columns as needed
  ];
  return (
    <div className="w-full h-[100vh] flex justify-center">
      {/* Render loading indicator while loading */}
      {isLoading ? (
        <LinearDeterminate />
      ) : (
        <div className="flex gap-x-10 h-full mt-[50px]">
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
