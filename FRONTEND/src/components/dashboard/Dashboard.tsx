import DashboardUserProfile from "./components/DashboardUserProfile";
import DashboardStatusBoxes from "./components/DashboardStatusBoxes";
import DashboardSeatCondition from "./components/DashboardSeatCondition";

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
        <Grid item xs={4}>
          <DashboardSeatCondition data={data} />
        </Grid>

        {/* 2ND ROW */}
        <Grid item xs={6}>
          <Box
            component="section"
            sx={{
              m: 1,
              p: 2,
              border: "2px solid grey",
            }}
          >
            RECENT COMMENTS
          </Box>
        </Grid>
        <Grid item xs={5.15}>
          <Box
            component="section"
            sx={{
              m: 1,
              p: 2,
              border: "2px solid grey",
            }}
          >
            SUMMARY
          </Box>
        </Grid>
        {/* END OF 2ND ROW */}
      </Grid>
    </Box>
  );
}
