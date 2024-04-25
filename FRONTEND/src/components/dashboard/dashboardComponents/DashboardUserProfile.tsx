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

export default function DashboardUserProfile() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const dispatch = useDispatch();
  const loggedUser: any = useSelector(
    (state: RootState) => state.userProfileReducer.userProfile
  );

  useEffect(() => {
    dispatch(getUserProfileFetch());
  }, [dispatch]);

  // console.log("Logged User", loggedUser);

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
          {loggedUser && (
            <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ fontWeight: "bold", fontSize: "1.5vw" }}
            >
              {loggedUser.first_name} {loggedUser.middle_name} {loggedUser.last_name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#25476A", fontWeight: "bold", fontSize: "1.2vw" }}
            >
              {loggedUser.position_name}
            </Typography>
          </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Paper>
  );
}
