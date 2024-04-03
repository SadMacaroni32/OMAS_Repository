import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import { BarChart } from "@mui/x-charts/BarChart";

export default function dashboardSeatCondition() {
    
  return (
    <>
      <Grid item xs={3}>
        <BarChart
          xAxis={[
            { scaleType: "band", data: ["DataGathered"] }
          ]}
          series={[
            { data: [4], label: "Occupied" },
            { data: [1], label: "Available" },
            { data: [2], label: "Unader Repair" }
          ]}
          width={500}
          height={300}
        />
      </Grid>
    </>
  );
}
