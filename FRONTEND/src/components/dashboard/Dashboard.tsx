import DashboardUserProfile from "./dashboardComponents/DashboardUserProfile";
import DashboardStatusBoxes from "./dashboardComponents/DashboardStatusBoxes";
import DashboardSeatCondition from "./dashboardComponents/DashboardSeatCondition";
import DashboartRecentComments from "./dashboardComponents/DashboardRecentComments";
import DashboardSummary from "./dashboardComponents/DashboardSummary";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { getSeatsFetch } from "../../redux/state/seatState";
import { getSeatsReservedFetch } from "../../redux/state/seatReservedState";

interface dataFormat {
  seat_id: number;
}
export default function Dashboard() {
  const dispatch = useDispatch();
  const seatData: dataFormat[] = useSelector(
    (state: RootState) => state.seatReducer.seating
  );
  const seatReservedData = useSelector(
    (state: RootState) => state.seatReservedReducer.seatingReserved
  );

  // Initialize seatData with default values based on localStorage or current state
  const [data, setData] = useState(() => {
    const storedSeatData = localStorage.getItem("seatData");
    const storedSeatReservedData = localStorage.getItem("seatReservedData");
    if (storedSeatData && storedSeatReservedData) {
      return {
        occupied: JSON.parse(storedSeatReservedData).length,
        available:
          JSON.parse(storedSeatData).length -
          JSON.parse(storedSeatReservedData).length,
        underRepair: 1, // You can set this value accordingly based on your data
      };
    } else {
      return {
        occupied: seatReservedData.length,
        available: seatData.length - seatReservedData.length,
        underRepair: 1, // You can set this value accordingly based on your data
      };
    }
  });

  useEffect(() => {
    dispatch(getSeatsFetch());
    dispatch(getSeatsReservedFetch());
  }, [dispatch]);

  // Save seatData and seatReservedData to localStorage
  useEffect(() => {
    localStorage.setItem("seatData", JSON.stringify(seatData));
    localStorage.setItem("seatReservedData", JSON.stringify(seatReservedData));
  }, [seatData, seatReservedData]);

  // Update data state whenever seatData or seatReservedData changes
  useEffect(() => {
    setData({
      occupied: seatReservedData.length,
      available: seatData.length - seatReservedData.length,
      underRepair: data.underRepair, // Preserve the underRepair value
    });
  }, [seatData, seatReservedData]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} sx={{ m: 1 }}>
        <Grid item xs={4}>
          {/* 1ST ROW */}
          <DashboardUserProfile />
        </Grid>

        {/* STATUS */}
        <Grid item xs={3}>
          <DashboardStatusBoxes />
        </Grid>

        {/* SEAT GRAPH CHART */}
        <Grid item xs={4}>
          <DashboardSeatCondition data={data} />
        </Grid>

        {/* 2ND ROW */}
        <Grid item xs={6}>
          <DashboartRecentComments />
        </Grid>
        <Grid item xs={5.1}>
          <DashboardSummary />
        </Grid>
        {/* END OF 2ND ROW */}
      </Grid>
    </Box>
  );
}
