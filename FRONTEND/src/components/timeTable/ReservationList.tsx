import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsRequest } from './../../redux/state/reservationState';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { RootState } from '../../redux/store/store';
import { getUsersFetch, getUsersSuccess } from '../../redux/state/userState';

const ReservationList = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state: RootState) => state.reservationsReducer.reservations);
  const users = useSelector((state: RootState) => state.usersReducer.users);
  
  
  useEffect(() => {
    dispatch(getUsersFetch()); // Dispatch an action to fetch users
    dispatch(fetchReservationsRequest()); // Dispatch an action to fetch reservations when component mounts
  }, [dispatch]);

 

  return (
    <Box height="500px" overflow="auto">
      <TableContainer component={Paper}>
        <Table aria-label="reservations table">
          <TableHead>
            <TableRow>
              <TableCell>Reservation ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Seat ID</TableCell>
              <TableCell>Project ID</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              {/* Add more table header cells for additional reservation details */}
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservation) => (
              <TableRow key={reservation.reservation_id}>
                <TableCell>{reservation.reservation_id}</TableCell>
                <TableCell>
                {users.find(user => user.emp_id === reservation.emp_id)?.username || 'Unknown User'}
                    </TableCell>
                <TableCell>{reservation.seat_id}</TableCell>
                <TableCell>{reservation.project_id}</TableCell>
                <TableCell>{reservation.start_date}</TableCell>
                <TableCell>{reservation.end_date}</TableCell>
                {/* Add more table cells for additional reservation details */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ReservationList;
