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
import { getSeatConditionFetch } from "../../redux/state/Dashboard_State/seatConditionStates/Total_Seats";

export default function Dashboard() {

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
          <DashboardSeatCondition />
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
