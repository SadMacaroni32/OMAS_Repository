import React, { useEffect } from "react";
import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getSeatsReservedFetch } from "../../../redux/state/seatReservedState";

interface dataFormat {
  reservation_id: number;
  fname: string;
  lname: string;
  note: string | number;
  start_date: string | number;
}

export default function DashboardRecentComments() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  // Function to get the first letter of the name
  const getAvatarLetter = (name: string | string[]) => {
    if (!name) return "";
    return name[0].toUpperCase();
  };

  const dispatch = useDispatch();
  const commentData: dataFormat[] = useSelector((state: RootState) => state.seatReservedReducer.seatingReserved);
  
  useEffect(() => {
    dispatch(getSeatsReservedFetch());
  }, [dispatch]);

  return (
    <Paper elevation={6} sx={{ ml: 1, ...shadowStyle }}>
      <TableContainer sx={{ maxHeight: "423px", overflow: "auto", position: "relative" }}>
        <Typography
          variant="h6"
          id="recentComTitle"
          component="div"
          sx={{ position: "sticky", top: 0, zIndex: 1, background: "#fff", padding: "8px" }}
        >
          Recent Comments
        </Typography>
        <Table>
          <TableBody id="commentContainer" component="div">
            {commentData.map((comment) => (
              <Grid
                container
                alignItems="flex-start"
                key={comment.reservation_id}
                spacing={1}
                sx={{ m: 1 }}
              >
                {/* Set alignItems to "flex-start" */}
                <Grid item>
                  <Avatar>{getAvatarLetter(comment.fname)}</Avatar>{" "}
                  {/* Use commenterName state */}
                </Grid>
                <Grid item>
                  <Typography
                    variant="button"
                    id="recentComTitle"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {comment.fname} {comment.lname}
                  </Typography>
                  <Typography variant="caption">
                    {comment.start_date}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item sx={{ ml: 6 }}>
                      <Typography variant="body2">{comment.note}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}