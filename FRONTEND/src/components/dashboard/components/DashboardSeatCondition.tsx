import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper/Paper";

interface seatData {
  occupied: number;
  available: number;
  underRepair: number;
}

interface propData {
  data: seatData;
}

const DashboardSeatCondition: React.FC<propData> = ({ data }) => {
  const paperStyle = { m: 1, p: 2, width: "100%", overflow: "hidden" };

  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  const chartStyle = { width: "100%", height: "100%" };

  return (
    <Paper elevation={6} sx={{ ...paperStyle, ...shadowStyle }}>
      <Grid item xs={3}>
        <BarChart
          xAxis={[{ scaleType: "band", data: ["Office Seating Status"] }]}
          series={[
            { data: [data.occupied], label: "Occupied" },
            { data: [data.available], label: "Available" },
            { data: [data.underRepair], label: "Under Repair" },
          ]}
          width={500}
          height={380}
          sx={{ ...chartStyle }} // Apply style directly to BarChart
        />
      </Grid>
    </Paper>
  );
};

export default DashboardSeatCondition;
