import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper } from '@mui/material';
import ProfilePicture from "../../../assets/profile_pic.jpg";

export default function DashboardUserProfile() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  return (
    <Paper elevation={6} sx={{ m: 1, ...shadowStyle }}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={ProfilePicture}
            alt="User Profile Picture"
            sx={{ height: "20rem" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Full Name Goes Here
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Position Title Goes Here
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Paper>
  );
}
