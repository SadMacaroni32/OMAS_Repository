import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store'; // Adjust the path to your RootState type
// import { fetchReservationsRequest } from '../../redux/state/reservationState'; // Assuming you have actions defined
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, ButtonGroup } from '@mui/material';
import { getPrincipalReservationsWithInfoSuccess, getPrincipalReservationsWithInfoFetch} from '../../redux/state/viewReservationState';


export default function ViewReservation() {
    const dispatch = useDispatch();
    const viewReservation = useSelector((state: RootState) => state.viewReservationReducer.viewReservationValue)
    const [page, setPage] = useState<number>(0);
    const [rowsPerPage, setRowsPerPage] = useState<number>(10);

    useEffect(() => {
        dispatch(getPrincipalReservationsWithInfoFetch()); // Dispatch action to fetch reservations when component mounts
        console.log(dispatch)
    }, [dispatch]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleAction = (action: string, rowData: any) => {
   
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden', height:'100%' }}>
            <TableContainer sx={{ maxHeight: 850 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {/* Add your table headers here */}
                            <TableCell sx={{ textAlign: 'center' }}>Employee ID</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>First Name</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Last Name</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Reservation Number</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Seat Number</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Start Date</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>End Date</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Client</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Note</TableCell>
                            <TableCell sx={{ textAlign: 'center' }}>Action</TableCell>
                            {/* Add more cells if needed */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {viewReservation && viewReservation.length > 0 ? (
                            viewReservation
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: any, rowIndex: any) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.emp_id}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.first_name}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.last_name}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.reservation_id}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.seat_id}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.start_date}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.end_date}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.client_sn}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.note}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>
                                            <ButtonGroup variant="text" aria-label="Basic button group">
                                                <Button onClick={() => handleAction('delete', row)}>Delete</Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>
                                ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={2}>No reservations found</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 50, 100]}
                component="div"
                count={viewReservation.length} // Assuming reservations is an array
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};
