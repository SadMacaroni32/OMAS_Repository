import DashboardUserProfile from "./components/DashboardUserProfile";
import DashboardStatusBoxes from "./components/DashboardStatusBoxes";
import DashboardSeatCondition from "./components/DashboardSeatCondition";
import DashboartRecentComments from "./components/DashboardRecentComments";
import DashboardSummary from "./components/DashboardSummary";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useState } from "react";

export default function dashboard() {
  // Initialize seatData with default values
  const [data, setData] = useState({
    occupied: 100,
    available: 150,
    underRepair: 50,
  });

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
        <Grid item xs={4} >
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
