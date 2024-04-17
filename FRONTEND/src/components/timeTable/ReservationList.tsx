import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsRequest } from './../../redux/state/reservationState';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton, InputAdornment } from '@mui/material';
import { RootState } from '../../redux/store/store';
import { getUsersFetch, getUsersSuccess } from '../../redux/state/userState';
import SearchIcon from '@mui/icons-material/Search';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state: RootState) => state.reservationsReducer.reservations);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchReservationsRequest());
  }, [dispatch]);

  console.log("Reservation List",reservations);
  const filteredReservations = searchQuery
  ? reservations.filter((reservation: { start_date: string; seat_id: string; user: { first_name: string; last_name: string }; client_sn: string; }) =>
      reservation.start_date.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.seat_id.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
      reservation.client_sn.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : reservations;


  return (
    <Box height="500px" width="100vh" overflow="auto">
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2}>
        <TextField
          label="Search by Name or Date"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e: { target: { value: any; }; }) => setSearchQuery(e.target.value)}
          style={{ marginRight: '8px', marginTop: 6}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

      
      </Box>
      <TableContainer component={Paper}>
  <Table aria-label="reservations table">
    <TableHead >
      <TableRow sx={{ background: "#468faf"}}> {/* Set border color */}
        
        <TableCell sx={{color:"white"}}>Name</TableCell>
        <TableCell sx={{color:"white"}}>Seat Number</TableCell>
        <TableCell sx={{color:"white"}}>Client</TableCell>
        <TableCell sx={{color:"white"}}>Start Date</TableCell>
        <TableCell sx={{color:"white"}}>End Date</TableCell>
        <TableCell sx={{color:"white"}}>Position</TableCell>
      </TableRow>
    </TableHead>
    <TableBody >
      {filteredReservations.map((reservation: { reservation_id: any; emp_id: any; seat_id: any; project_id: any; start_date: any; end_date: any; }) => (
        <TableRow key={reservation.reservation_id} >
         
          <TableCell >
          {reservation.first_name} {reservation.last_name}
          </TableCell>
          <TableCell >{reservation.seat_id}</TableCell> {/* Set border color */}
          <TableCell >{reservation.client_sn}</TableCell> {/* Set border color */}
          <TableCell >{reservation.start_date}</TableCell> {/* Set border color */}
          <TableCell >{reservation.end_date}</TableCell> {/* Set border color */}
          <TableCell >{reservation.position_sn}</TableCell> {/* Set border color */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


    </Box>
  );
}

export default ReservationList;
