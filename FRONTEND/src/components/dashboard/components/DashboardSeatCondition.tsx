import Box from "@mui/material/Box/Box";
import Grid from "@mui/material/Grid/Grid";
import { BarChart } from "@mui/x-charts/BarChart";

export default function dashboardSeatCondition() {
  return (
    <>
      <Grid item xs={3}>
        <BarChart
        xAxis=
        {
            [
                { 
                    scaleType: "band", data: ["Data1", "Data2", "Data3"] 
                }
            ]
        }
          series=
          {
            [
                { data: [4] }, { data: [1] }, { data: [2] }
            ]
        }
          width={500}
          height={300}
        />
      </Grid>
    </>
  );
}
