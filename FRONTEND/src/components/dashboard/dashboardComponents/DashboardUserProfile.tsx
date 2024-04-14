import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import ProfilePicture from "../../../assets/profile_null.avif";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getUsersSuccess } from "../../../redux/state/userState";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

interface dataFormat {
  username: string;
  status_code: string;
  position_id: string | number;
  emp_id: any;
}

export default function DashboardUserProfile() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const location = useLocation();
  const dispatch = useDispatch();
  const id = location.state;
  const { userId } = useParams();
  const userData: dataFormat[] = useSelector(
    (state: RootState) => state.userReducer.users
  );
  const [dataState, setDataState] = useState<dataFormat | null>(null);

  useEffect(() => {
    dispatch(getUsersSuccess(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (userData.length > 0 && userId !== undefined) {
      setDataState(userData[Number(userId) - 1]); // decrement userId because JSON data starts at 1, not 0. remove if integrated.
    }
  }, [userData, userId]);

  const { username, status_code, position_id, emp_id } = dataState ?? {};

  {
    /* FOR CHECKING API DATA CONSOLE */
  }
   console.log("User Profile", [dataState]);

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
