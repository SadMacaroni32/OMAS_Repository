import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getTotalSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Total_Seats";
import { getAssignedSeatsFetch } from "../../../redux/state/Dashboard_State/seatConditionStates/Assigned_Seats";
import { getTotalAssociatesFetch } from "../../../redux/state/Dashboard_State/statusBoxesStates/Total_Associates";
import { getReservedAssociatesFetch } from "../../../redux/state/Dashboard_State/statusBoxesStates/Reserved_Associates";
import { getUnreservedAssociatesFetch } from "../../../redux/state/Dashboard_State/statusBoxesStates/Unreserved_Associates";

export default function DashboardStatusBoxed() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const iconStyle = { width: "2.5vw", height: "2.5vw", color: "#25476A" };
  const paperStyle = { width: "100%", height: "10.5vw" };
  const numberStyle = { fontSize: "2vw" };
  const textStyle = { fontSize: "0.6vw", fontWeight: "bold" };

  const dispatch = useDispatch();
  const totalSeats: any = useSelector(
    (state: RootState) => state.totalSeatsReducer.totalSeats
  );
  const assignedSeats: any = useSelector(
    (state: RootState) => state.assignedSeatsReducer.assignedSeats
  );
  const totalAssociates: any = useSelector(
    (state: RootState) => state.totalAssociatesReducer.totalAssociates
  );
  const reservedAssociates: any = useSelector(
    (state: RootState) => state.reservedAssociatesReducer.reservedAssociates
  );
  const unreservedAssociates: any = useSelector(
    (state: RootState) => state.unreservedAssociatesReducer.unreservedAssociates
  );

  const [dataState, setDataState] = useState<any | null>(null);

  useEffect(() => {
    dispatch(getTotalSeatsFetch());
    dispatch(getAssignedSeatsFetch());
    dispatch(getTotalAssociatesFetch());
    dispatch(getReservedAssociatesFetch());
    dispatch(getUnreservedAssociatesFetch());
  }, [dispatch]);

  // Save seatData and seatReservedData to localStorage
  useEffect(() => {
    localStorage.setItem("Total Seats", JSON.stringify(totalSeats));
    localStorage.setItem("Assigned Seats", JSON.stringify(assignedSeats));
    localStorage.setItem("Total Associates", JSON.stringify(totalAssociates));
    localStorage.setItem("Reserved Associates", JSON.stringify(reservedAssociates));
  }, [totalSeats, assignedSeats, totalAssociates, reservedAssociates]);

  // Retrieve seatData and seatReservedData from localStorage on component mount
  useEffect(() => {
    const storedTotalSeats = localStorage.getItem("Total Seats");
    const storedAssignedSeats = localStorage.getItem("Assigned Seats");
    const storedTotalAssociates = localStorage.getItem("Total Associates");
    const storedReservedAssociates = localStorage.getItem("Reserved Associates");
    if (
      storedTotalSeats &&
      storedAssignedSeats &&
      storedTotalAssociates &&
      storedReservedAssociates
    ) {
      setDataState({
        seat_id: 0, // Dummy value for seat_id, replace it with actual value if necessary
        TotalSeats: JSON.parse(storedTotalSeats),
        AssignedSeats: JSON.parse(storedAssignedSeats),
        TotalAssociates: JSON.parse(storedTotalAssociates),
        ReservedAssociates: JSON.parse(storedReservedAssociates),
      });
    }
  }, []);

  {
    /* FOR CHECKING API DATA CONSOLE */
  }
  console.log("Total Seats", totalSeats);
  console.log("Assigned Seats", assignedSeats);
  console.log("Total Associates", totalAssociates);
  console.log("Reserved Associates", reservedAssociates);
  console.log("Unreserved Associates", unreservedAssociates);

  return (
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Paper
          elevation={6}
          sx={{
            m: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            ...shadowStyle,
            ...paperStyle, // Applying paperStyle
          }}
        >
          <EventSeatIcon sx={iconStyle} />
          <Typography variant="h6" gutterBottom m={1} sx={{ ...numberStyle }}>
            {totalSeats.length}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            TOTAL SEATS
          </Typography>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            m: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            ...shadowStyle,
            ...paperStyle, // Applying paperStyle
          }}
        >
          <AccountBoxIcon sx={{ ...iconStyle }} />
          <Typography variant="h6" gutterBottom m={1} sx={{ ...numberStyle }}>
            {totalAssociates["Total Associates"]}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            TOTAL ASSOCIATES
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          elevation={6}
          sx={{
            m: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            ...shadowStyle,
            ...paperStyle, // Applying paperStyle
          }}
        >
          <AirlineSeatReclineNormalIcon sx={{ ...iconStyle }} />
          <Typography variant="h6" gutterBottom m={1} sx={{ ...numberStyle }}>
            {assignedSeats.length}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            OCCUPIED SEATS
          </Typography>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            m: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            ...shadowStyle,
            ...paperStyle, // Applying paperStyle
          }}
        >
          <InsertEmoticonIcon sx={{ ...iconStyle }} />
          <Typography variant="h6" gutterBottom m={1} sx={{ ...numberStyle }}>
            {assignedSeats.length}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            WITH SEATS ASSIGNED
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper
          elevation={6}
          sx={{
            m: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            ...shadowStyle,
            ...paperStyle, // Applying paperStyle
          }}
        >
          <ChairAltIcon sx={{ ...iconStyle }} />
          <Typography variant="h6" gutterBottom m={1} sx={{ ...numberStyle }}>
            {totalSeats.length - assignedSeats.length} {/* MOCK DATA */}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            AVAILABLE SEATS
          </Typography>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            m: 1,
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            ...shadowStyle,
            ...paperStyle, // Applying paperStyle
          }}
        >
          <SentimentVeryDissatisfiedIcon sx={{ ...iconStyle }} />
          <Typography variant="h6" gutterBottom m={1} sx={{ ...numberStyle }}>
            {unreservedAssociates["Total unassigned seats"]} {/* MOCK DATA */}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            WITHOUT ASSIGNED SEATS
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
