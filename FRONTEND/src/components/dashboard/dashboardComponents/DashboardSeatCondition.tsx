import React, { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getTotalSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Total_Seats";
import { getAssignedSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Assigned_Seats";
import { getRepairSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Repair_Seats";

const DashboardSeatCondition = () => {
  const dispatch = useDispatch();
  const totalSeats = useSelector(
    (state: RootState) => state.totalSeatsReducer.totalSeats
  );
  const totalAssignedSeats = useSelector(
    (state: RootState) => state.assignedSeatsReducer.assignedSeats
  );
  const totalRepairSeats = useSelector(
    (state: RootState) => state.repairSeatsReducer.repairSeats
  );

  useEffect(() => {
    dispatch(getTotalSeatsFetch());
    dispatch(getAssignedSeatsFetch());
    dispatch(getRepairSeatsFetch());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("totalSeats", JSON.stringify(totalSeats));
    localStorage.setItem("totalAssignedSeats", JSON.stringify(totalAssignedSeats));
    localStorage.setItem("totalRepairSeats", JSON.stringify(totalRepairSeats));
  }, [totalSeats, totalAssignedSeats, totalRepairSeats]);

  const [data, setData] = useState({
    available: 0,
    occupied: 0,
    underRepair: 0,
  });

  useEffect(() => {
    if (totalSeats && totalAssignedSeats) {
      setData({
        available: totalSeats.length - totalAssignedSeats.length,
        occupied: totalAssignedSeats.length,
        underRepair: totalRepairSeats.length,
      });
    }
  }, [totalSeats, totalAssignedSeats, totalRepairSeats]);

  // console.log("Total Seats", totalSeats);
  // console.log("Total Assigned Seats", totalAssignedSeats);
  // console.log("Total Repair Seats", totalRepairSeats);

  return (
    <Paper elevation={6} style={{ margin: 8, padding: 16 }}>
      <Grid container justifyContent="center">
        <BarChart
          xAxis={[{ scaleType: "band", data: ["Office Seating Status"] }]}
          series={[
            { data: [data.available], label: "Available" },
            { data: [data.occupied], label: "Occupied" },
            { data: [data.underRepair], label: "Under Repair" },
          ]}
          width={500}
          height={380}
        />
      </Grid>
    </Paper>
  );
};

export default DashboardSeatCondition;
