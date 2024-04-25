import { useEffect, useState } from "react";
import { Avatar, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography,} from "@mui/material";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getRecentCommentsFetch } from "../../../redux/state/Dashboard_State/recentCommentsState";

export default function DashboardRecentComments() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const dispatch = useDispatch();
  const commentData: any = useSelector(
    (state: RootState) => state.recentCommentsReducer.recentComments
  );

  console.log("CommentData", commentData);
  
  const getAvatarLetter = (name: string | string[]) => {
    if (!name) return "";
    return name[0].toUpperCase();
  };

  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    const options = { month: "long", day: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const hour = date.getHours();
    let formattedHour = hour % 12;
    formattedHour = formattedHour === 0 ? 12 : formattedHour; // Convert 0 to 12
    const meridiem = hour >= 12 ? "PM" : "AM";
    const formattedTime = `${formattedHour}:${String(
      date.getMinutes()
    ).padStart(2, "0")}`;
    return `${formattedDate} at ${formattedTime} ${meridiem}`;
  };

  const [recentComments, setRecentComments] = useState<any[]>([]);

  useEffect(() => {
    dispatch(getRecentCommentsFetch());
  }, [dispatch]);

  useEffect(() => {
    if (commentData.message) {
      const currentDate = new Date();
      const twoDaysAgo = new Date(currentDate);
      twoDaysAgo.setDate(currentDate.getDate() - 2);
  
      const filteredComments = commentData.message.filter((comment: any) => {
        const commentDate = new Date(comment.noted_at); // Assuming comment.noted_at is the date of the comment
        return (
          (commentDate >= twoDaysAgo && commentDate <= currentDate) || // Comments from 2 days ago
          (commentDate.toDateString() === currentDate.toDateString()) // Comments from the current date
        );
      });
      setRecentComments(filteredComments);
    }
  }, [commentData.message]);

  return (<>
    <Paper
      elevation={6}
      sx={{ height: "26.4rem", width: "45.5rem", borderRadius: "8px", ml: 1, ...shadowStyle }}
    >
      <TableContainer
        sx={{
          borderRadius: "8px",
          height: "100%", // Stretch the TableContainer to 100% of the Paper's height
          position: "relative",
        }}
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
        <TableBody id="commentContainer">
  {Array.isArray(recentComments) && recentComments.length > 0 ? (
    recentComments.map((comment: any, index: number) => (
      <TableRow key={`${comment.emp_id}-${index}`}>
        <TableCell>
          <Grid
            container
            alignItems="flex-start"
            spacing={1}
            sx={{ m: 1, width: "35rem" }}
          >
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
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell colSpan={3}>
        <Typography sx={{ m: 1, fontWeight: "bold", fontSize: "2rem" }}>
          No recent comments
        </Typography>
      </TableCell>
    </TableRow>
  )}
</TableBody>

        </Table>
      </TableContainer>
    </Paper>
  </>);
}
