/* eslint-disable @typescript-eslint/no-unused-vars */

import { Box, Paper } from "@mui/material";
import Calendar from "../components/timeTable/Calendar";


export default function TimeTablePage({ seat_id }) {
  return (
    <>
      <Box
        sx={{
          margin: "10%",
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}>
        <Calendar seat_id={seat_id} />
      </Box>
    </>
  );
}


