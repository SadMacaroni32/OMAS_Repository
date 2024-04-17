import { useEffect } from "react";
import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { ScriptsDashboard } from "./ScriptsDashboard";
import { getRecentCommentsFetch } from "../../../redux/state/Dashboard_State/recentCommentsState";

export default function DashboardRecentComments() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const { getAvatarLetter, formatDateTime } = ScriptsDashboard();
  const dispatch = useDispatch();
  const commentData: any = useSelector(
    (state: RootState) => state.recentCommentsReducer.recentComments
  );

  useEffect(() => {
    dispatch(getRecentCommentsFetch());
  }, [dispatch]);

  console.log("Comment", commentData);
  return (
    <Paper elevation={6} sx={{ ml: 1, ...shadowStyle }}>
      <TableContainer
        sx={{ maxHeight: "423px", overflow: "auto", position: "relative" }}
      >
        <Typography
          variant="h6"
          id="recentComTitle"
          component="div"
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            background: "#fff",
            padding: "8px",
          }}
        >
          Recent Comments
        </Typography>
        <Table>
          <TableBody id="commentContainer" component="div">
            {commentData.message ? (
              commentData.message.map((comment: any) => (
                <Grid
                  container
                  alignItems="flex-start"
                  key={comment.emp_id}
                  spacing={1}
                  sx={{ m: 1 }}
                >
                  {/* Set alignItems to "flex-start" */}
                  <Grid item>
                    <Avatar>{getAvatarLetter(comment.first_name)}</Avatar>{" "}
                    {/* Use comment.first_name instead of first_name */}
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="button"
                      id="recentComTitle"
                      component="div"
                      sx={{ fontWeight: "bold" }}
                    >
                      {comment.first_name} {comment.middle_name}{" "}
                      {comment.last_name} {/* Use comment properties */}
                    </Typography>
                    <Typography variant="caption">
                      {formatDateTime(comment.noted_at)} Located at Seat No.{" "}
                      {comment.seat_id}
                    </Typography>{" "}
                    {/* Use comment.noted_at */}
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction="column" spacing={1}>
                      <Grid item sx={{ ml: 6 }}>
                        <Typography variant="body2">{comment.note}</Typography>{" "}
                        {/* Use comment.note */}
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            ) : (
              <Typography>No recent comments</Typography>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
