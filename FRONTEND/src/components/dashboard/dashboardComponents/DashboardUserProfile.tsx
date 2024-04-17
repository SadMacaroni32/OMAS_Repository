import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import ProfilePicture from "../../../assets/profile_null.avif";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect } from "react";
import { getUserProfileFetch } from "../../../redux/state/Dashboard_State/userProfileState";
import { getUsersFetch } from "../../../redux/state/userState";

export default function DashboardUserProfile() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const dispatch = useDispatch();
  const userData: any = useSelector(
    (state: RootState) => state.userReducer.users
  );
  const loggedUser = useSelector(
    (state: RootState) => state.userProfileReducer.userProfile
  );

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getUserProfileFetch());
  }, [dispatch]);

  const { username, status_code, position_id, emp_id } = userData.message ?? {};

  {
    /* FOR CHECKING API DATA CONSOLE */
  }
  console.log("User Profile", userData);
  console.log("Logged User", loggedUser);

  return (
    <Paper elevation={6} sx={{ m: 1, ml: 1, ...shadowStyle }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={ProfilePicture}
            alt="User Profile Picture"
            sx={{ height: "18.7rem" }}
          />
          {emp_id && (
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "bold", fontSize: "1.5vw" }}
              >
                {username} {status_code}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#25476A", fontWeight: "bold", fontSize: "1.2vw" }}
              >
                {position_id}
              </Typography>
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Paper>
  );
}
