import ProfileCard from "./components/DashboardUserProfile";
import DashboardStatusBoxes from "./components/DashboardStatusBoxes";
import SeatCondition from "./components/DashboardSeatCondition";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

export default function dashboard() {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ m: 1 }}>
        <Grid item xs={4}>
          {/* 1ST ROW */}
            <ProfileCard />
        </Grid>

        {/* STATUS */}
        <DashboardStatusBoxes />

        {/* END OF 1ST ROW */}
        <SeatCondition />
        {/* 2ND ROW */}
        <Grid item xs={5}>
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
        <Grid item xs={5}>
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
