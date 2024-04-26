import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store'; // Adjust the path to your RootState type
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid'; // Add Grid import

import { Box, Button, ButtonGroup } from '@mui/material';
import { getPrincipalReservationsWithInfoSuccess, getPrincipalReservationsWithInfoFetch, archiveReservationSuccess, archiveReservationStart} from '../../redux/state/viewReservationState';

export default function viewReservation() {
    const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

    const dispatch = useDispatch();
    const viewReservation = useSelector((state: RootState) => state.viewReservationReducer.viewReservationValue)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(50);
    const [deleteId, setDeleteId] = React.useState(0);

    useEffect(() => {
        dispatch(getPrincipalReservationsWithInfoFetch()); // Dispatch action to fetch reservations when component mounts
    }, [dispatch]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleDelete = (reservation_id: number) => {
        dispatch(archiveReservationStart({ reservation_id }));
    };

    const formatDate = (dateString) => {
        const options = { month: 'long', day: '2-digit', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <Paper sx={{ overflow: 'auto', ...shadowStyle, height: '100vh', display: 'absolute'  }}>
            <TableContainer sx={{ flex: '1 1 auto' }}> {/* Allow TableContainer to grow */}
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {viewReservation && viewReservation.length > 0 ? (
                            viewReservation
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row: any, rowIndex: any) => (
                                    row.del_flag !== 1 && // Render only if del_flag is not 1
                                    <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex}>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.emp_id}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.first_name}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.last_name}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.reservation_id}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.seat_id}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{formatDate(row.start_date)}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{formatDate(row.end_date)}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.client_sn}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>{row.note}</TableCell>
                                        <TableCell sx={{ textAlign: 'center' }}>
                                            <ButtonGroup variant="text" aria-label="Basic button group">
                                                <Button onClick={() => { handleDelete(row.reservation_id) }}>Delete</Button>
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
                rowsPerPageOptions={[50, 100]}
                component="div"
                count={viewReservation.length} // Assuming reservations is an array
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                sx={{ alignSelf: 'flex-end' }} // Align pagination controls to the end
            />
        </Paper>
    );
};
