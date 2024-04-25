import DashboardUserProfile from "./DashboardUserProfile";
import DashboardStatusBoxes from "./DashboardStatusBoxes";
import DashboardSeatCondition from "./DashboardSeatCondition";
import DashboartRecentComments from "./DashboardRecentComments";
import DashboardSummary from "./DashboardSummary";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../../../redux/store/store";
import { getTotalSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Total_Seats";
import { getAssignedSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Assigned_Seats";
import { getTotalAssociatesFetch } from "../../../redux/state/Dashboard_State/statusBoxesStates/Total_Associates";

export default function Dashboard() {
  const dispatch = useDispatch();

  const totalSeats: any = useSelector(
    (state: RootState) => state.totalSeatsReducer.totalSeats
  );
  const assignedSeats: any = useSelector(
    (state: RootState) => state.assignedSeatsReducer.assignedSeats
  );
  const totalAssociates: any = useSelector(
    (state: RootState) => state.totalAssociatesReducer.totalAssociates
  );

  const [reservationsAMCount, setReservationsAMCount] = useState<number>(0);
  const [reservationsPMCount, setReservationsPMCount] = useState<number>(0);
  const [currentReservationCount, setCurrentReservationCount] = useState<number>(0);
  const [totalSeatsCount, setTotalSeatsCount ] = useState<number>(0);
  const [totalAssociatesCount, setTotalAssociatesCount ] = useState<number>(0);
  
  const propData = { totalSeatsCount, currentReservationCount, totalAssociatesCount };
  
  useEffect(() => {
    dispatch(getTotalSeatsFetch());
  }, [dispatch]); 

  useEffect(() => {
    dispatch(getAssignedSeatsFetch());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getTotalAssociatesFetch());
  }, [dispatch]);

  useEffect(() => {
    // Filter reservations for today
    const todayReservations = assignedSeats.filter((reservation: any) => {
      const reservationDate = new Date(reservation.start_date);
      const today = new Date();
      return (
        reservationDate.getDate() === today.getDate() &&
        reservationDate.getMonth() === today.getMonth() &&
        reservationDate.getFullYear() === today.getFullYear()
      );
    });

    // Filter reservations starting at 6:00 AM
    const reservationsAM = todayReservations.filter((reservation: any) => {
      const startTimeUTC = new Date(reservation.start_date);
      return (
        startTimeUTC.getUTCHours() === 6 && startTimeUTC.getUTCMinutes() === 0
      );
    });

    // Filter reservations starting after 6:00 PM but before midnight
    const reservationsPM = todayReservations.filter((reservation: any) => {
      const startTimeUTC = new Date(reservation.start_date);
      return (
        startTimeUTC.getUTCHours() >= 12 && startTimeUTC.getUTCHours() < 24
      );
    });

    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      // It's AM
      setCurrentReservationCount(reservationsAM.length);
    } else {
      // It's PM
      setCurrentReservationCount(reservationsPM.length);
    }

    setReservationsAMCount(reservationsAM.length);
    setReservationsPMCount(reservationsPM.length);
    setTotalSeatsCount(totalSeats.length);
    setTotalAssociatesCount(totalAssociates["Total Associates"]);
  }, [assignedSeats, totalSeats, totalAssociates]);

  // console.log("Total Seats", totalSeatsCount);
  // console.log("Total Assigned Seats", currentReservationCount);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ m: 1 }}>
        <Grid item xs={4}>
          {/* 1ST ROW */}
          <DashboardUserProfile />
        </Grid>

        {/* STATUS */}
        <Grid item xs={3}>
          <DashboardStatusBoxes statusBoxesData={propData}/>
        </Grid>

        {/* SEAT GRAPH CHART */}
        <Grid item xs={4}>
          <DashboardSeatCondition seatConditionData={propData}/>
        </Grid>

        {/* 2ND ROW */}
        <Grid item xs={6}>
          <DashboartRecentComments />
        </Grid>
        <Grid item xs={4.95}>
          <DashboardSummary />
        </Grid>
        {/* END OF 2ND ROW */}
      </Grid>
    </Box>
  );
}
