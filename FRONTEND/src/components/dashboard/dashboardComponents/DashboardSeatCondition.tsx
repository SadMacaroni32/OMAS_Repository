import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getRepairSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Repair_Seats";


interface Props {
  seatConditionData: {
    totalSeatsCount: number;
    currentReservationCount: number;
    totalAssociatesCount: number;
  }
}

const DashboardSeatCondition = (props: Props) => {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  const dispatch = useDispatch();

  const totalRepairSeats = useSelector((state: RootState) => state.repairSeatsReducer.repairSeats)

  const { totalSeatsCount, currentReservationCount } = props.seatConditionData;

  // Initialize data state with default values
  const [data, setData] = useState({
    available: 0,
    occupied: 0,
    underRepair: 0,
  });
  
  useEffect(() => {
    dispatch(getRepairSeatsFetch());
  }, [dispatch]);

  useEffect(() => {
    setData({
      available: totalSeatsCount - (currentReservationCount + totalRepairSeats.length),
      occupied: currentReservationCount,
      underRepair: totalRepairSeats.length,
    });
  }, [totalSeatsCount, currentReservationCount, totalRepairSeats]);

  // console.log("Total Seats", totalSeatsCount);
  // console.log("Total Assigned Seats", currentReservationCount);
  // console.log("Total Repair Seats", totalRepairSeats);

  return (
    <Paper elevation={6} style={{ margin: 8, padding: 16, ...shadowStyle }}>
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
