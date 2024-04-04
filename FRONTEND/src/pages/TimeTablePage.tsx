
import { Box, Paper } from "@mui/material";
import Calendar from "../components/timeTable/Calendar";


export default function TimeTablePage() {

  return (
    <>
    <Box sx={{margin:"10%", width:"100%", alignContent: "center" , alignItems:"center"}}>
      <Calendar />
      </Box>
    </>
  );
}


