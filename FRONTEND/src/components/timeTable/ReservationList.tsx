import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsRequest } from './../../redux/state/reservationState';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, IconButton } from '@mui/material';
import { RootState } from '../../redux/store/store';
import { getUsersFetch, getUsersSuccess } from '../../redux/state/userState';
import SearchIcon from '@mui/icons-material/Search';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state: RootState) => state.reservationsReducer.reservations);
  const users = useSelector((state: RootState) => state.usersReducer.users);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(fetchReservationsRequest());
  }, [dispatch]);

  const filteredReservations = searchQuery
  ? reservations.filter((reservation: { start_date: string; seat_id: string; }) =>
      reservation.start_date.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      users.find(user => user.emp_id === reservation.emp_id)?.fname.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      users.find(user => user.emp_id === reservation.emp_id)?.lname.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
      reservation.seat_id.toString().toLowerCase().startsWith(searchQuery.toLowerCase())
    )
  : reservations;

  const handleSearch = () => {
    // Implement your search logic here
  };

  return (
    <Box height="500px" width="100vh" overflow="auto">
      <Box display="flex" justifyContent="flex-end" alignItems="center" mb={2}>
        <TextField
          label="Search by Name or Date"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={(e: { target: { value: any; }; }) => setSearchQuery(e.target.value)}
          style={{ marginRight: '8px' }}
        />
        <IconButton onClick={handleSearch} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
      <TableContainer component={Paper}>
  <Table aria-label="reservations table">
    <TableHead sx={{position:"sticky"}}>
      <TableRow sx={{ border: "1px solid #25476a" }}> {/* Set border color */}
        <TableCell>Reservation ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Seat Number</TableCell>
        <TableCell>Project ID</TableCell>
        <TableCell>Start Date</TableCell>
        <TableCell>End Date</TableCell>
      </TableRow>
    </TableHead>
    <TableBody >
      {filteredReservations.map((reservation: { reservation_id: any; emp_id: any; seat_id: any; project_id: any; start_date: any; end_date: any; }) => (
        <TableRow key={reservation.reservation_id} >
          <TableCell sx={{ border: "1px solid #25476a" }}>{reservation.reservation_id}</TableCell> {/* Set border color */}
          <TableCell sx={{ border: "1px solid #25476a" }}>
            {users.find(user => user.emp_id === reservation.emp_id)?.fname || 'Unknown User'}
            {' '}
            {users.find(user => user.emp_id === reservation.emp_id)?.lname}
          </TableCell>
          <TableCell sx={{ border: "1px solid #25476a" }}>{reservation.seat_id}</TableCell> {/* Set border color */}
          <TableCell sx={{ border: "1px solid #25476a" }}>{reservation.project_id}</TableCell> {/* Set border color */}
          <TableCell sx={{ border: "1px solid #25476a" }}>{reservation.start_date}</TableCell> {/* Set border color */}
          <TableCell sx={{ border: "1px solid #25476a" }}>{reservation.end_date}</TableCell> {/* Set border color */}
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


    </Box>
  );
}

export default ReservationList;
