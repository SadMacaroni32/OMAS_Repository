import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

interface Props{
  statusBoxesData: {
  totalSeatsCount: number;
  currentReservationCount: number;
  totalAssociatesCount: number;
  }
}

export default function DashboardStatusBoxed(props: Props) {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const iconStyle = { width: "2.5vw", height: "2.5vw", color: "#25476A" };
  const paperStyle = { width: "100%", height: "10.5vw" };
  const numberStyle = { fontSize: "2vw" };
  const textStyle = { fontSize: "0.6vw", fontWeight: "bold" };
  
  const {totalSeatsCount, currentReservationCount, totalAssociatesCount} = props.statusBoxesData;

  // console.log("Total Seat Count", totalSeatsCount);
  // console.log("Total Current Seat", currentReservationCount);
  // console.log("Total Associate", totalAssociatesCount);

  return (<div>
    <Grid container spacing={1}>
      <Grid item xs={4}>
        <Paper
          elevation={6}
          sx={{
            mt:1,
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
            {totalSeatsCount}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            TOTAL SEATS
          </Typography>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            mt: 2.4,
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
            {totalAssociatesCount}
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
            mt: 1,
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
            {currentReservationCount} {/* Count of unique employee IDs */}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            OCCUPIED SEATS
          </Typography>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            mt: 2.4,
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
          {currentReservationCount}  {/* Count of unique employee IDs */}
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
            mt: 1,
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
            {totalSeatsCount - currentReservationCount} {/* Difference */}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            AVAILABLE SEATS
          </Typography>
        </Paper>
        <Paper
          elevation={6}
          sx={{
            mt: 2.4,
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
            {totalAssociatesCount - currentReservationCount}  {/* MOCK DATA */}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ ...textStyle }}>
            WITHOUT ASSIGNED SEATS
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>);
}
