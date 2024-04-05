import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper } from '@mui/material';
import ProfilePicture from "../../../assets/profile_null.avif";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/store';
import { getUsersSuccess } from '../../../redux/state/userState';
import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

interface dataFormat {
  fname: string;
  lname: string;
  position: string | number;
  emp_id: number;
}

export default function DashboardUserProfile() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const location = useLocation();
  const dispatch = useDispatch();
  const id  = location.state;
  const userData: dataFormat[] = useSelector((state: RootState) => state.userReducer.users);
  const [dataState, setDataState] = useState<dataFormat | null>(null);

  useEffect(() => {
    dispatch(getUsersSuccess(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (userData.length > 0) {
      setDataState(userData[0]);
    }
  }, [userData]);

  const {
    fname,
    lname,
    position,
    emp_id
  } = dataState ?? {};

  {/* FOR CHECKING API DATA CONSOLE */}
  // console.log(fname, position);

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
              <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: "bold",fontSize: "1.5vw"}}>
                {fname} {lname}
              </Typography>
              <Typography variant="body2" sx={{color: "#25476A", fontWeight: "bold", fontSize: "1.2vw"}}>
                {position}
              </Typography>
            </CardContent>
          )}
        </CardActionArea>
      </Card>
    </Paper>
  );
}
