import React, { useState } from "react";
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

export default function DashboardRecentComments() {
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };
  const [commenterName, setCommenterName] = useState("Jose Enrique Aquino");

  // Function to get the first letter of the name
  const getAvatarLetter = (name: string | string[]) => {
    if (!name) return "";
    return name[0].toUpperCase();
  };

  return (
    <>
      <Paper elevation={6} sx={{ ml: 1, p: 2, ...shadowStyle }}>
        <TableContainer>
          <Table>
            <TableHead>
              <Typography
                sx={{ m: 1 }}
                variant="h6"
                id="recentComTitle"
                component="div"
              >
                Recent Comments
              </Typography>
            </TableHead>
            <TableBody id="commentContainer" component="div">
              <Grid container alignItems="flex-start" spacing={1}>
                {/* Set alignItems to "flex-start" */}
                <Grid item>
                  <Avatar>{getAvatarLetter(commenterName)}</Avatar> {/* Use commenterName state */}
                </Grid>
                <Grid item>
                  <Typography
                    variant="button"
                    id="recentComTitle"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {commenterName}
                  </Typography>
                  <Typography variant="caption">
                    April 08, 2024 at 9:33 AM Located at Seat No. 1
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="column" spacing={1}>
                    <Grid item sx={{ ml: 6 }}>
                      <Typography variant="body2">Sheeesh.</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
