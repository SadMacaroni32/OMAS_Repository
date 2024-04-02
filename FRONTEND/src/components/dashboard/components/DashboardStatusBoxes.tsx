import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid/Grid";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import ChairAltIcon from "@mui/icons-material/ChairAlt";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

export default function dashboardStatusBoxed() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const iconStyle = { width: "2.5vw", height: "2.5vw", color: "#25476A" };
  const paperStyle = { width: "150px", height: "200px" };

  return (
    <>
      <Grid item xs={1}>
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
          <Typography variant="h6" gutterBottom m={1}>
            99
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
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
          <Typography variant="h6" gutterBottom m={1}>
            99
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            TOTAL ASSOCIATES
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={1}>
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
          <Typography variant="h6" gutterBottom m={1}>
            99
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
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
          <Typography variant="h6" gutterBottom m={1}>
            99
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            WITH SEATS ASSIGNED
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={1}>
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
          <Typography variant="h6" gutterBottom m={1}>
            99
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
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
          <Typography variant="h6" gutterBottom m={1}>
            99
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            WITHOUT ASSIGNED SEATS
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
