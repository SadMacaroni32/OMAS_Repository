import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { visuallyHidden } from "@mui/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getReservationsWithUserInfoFetch } from "../../../redux/state/reservationState";

function createData(emp_id: number, client_sn: string, seat_id: number): any {
  return {
    emp_id,
    client_sn,
    seat_id,
  };
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function DashboardSummary() {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof any>("client_sn");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visibleRows, setVisibleRows] = useState<any[]>([]); // State for visibleRows
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  const dispatch = useDispatch();
  const seatData: any = useSelector(
    (state: RootState) => state.reservationReducer.reservationWithUserInfo
  );

  useEffect(() => {
    dispatch(getReservationsWithUserInfoFetch());
  }, [dispatch]);

  useEffect(() => {
    const storedState = localStorage.getItem("tableState");
    if (storedState) {
      const { order, orderBy, page, rowsPerPage } = JSON.parse(storedState);
      setOrder(order);
      setOrderBy(orderBy);
      setPage(page);
      setRowsPerPage(rowsPerPage);
    }
  }, []);

  const rowsByDept: {
    [key: string]: { client_sn: string; seat_count: number };
  } = {};
  
  if (Array.isArray(seatData)) {
    const uniqueEmpIds = new Set<number>(); // To store unique emp_id values
    seatData.forEach((item) => {
      // Check if emp_id already counted
      if (!uniqueEmpIds.has(item.emp_id)) {
        // If emp_id is unique, add it to the set
        uniqueEmpIds.add(item.emp_id);
        // Increment seat count for the corresponding client_sn
        if (!rowsByDept[item.client_sn]) {
          rowsByDept[item.client_sn] = {
            client_sn: item.client_sn,
            seat_count: 0,
          };
        }
        rowsByDept[item.client_sn].seat_count++;
      }
    });
  }

  const rows: any = Object.values(rowsByDept).map((row) =>
    createData(-1, row.client_sn, row.seat_count)
  );

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  useEffect(() => {
    // Calculate visibleRows when seatData changes
    const visibleRows = stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    
    // Update visibleRows state
    setVisibleRows(visibleRows);
  }, [rows, order, orderBy, page, rowsPerPage]);

  console.log("Summary", seatData)

  return (
    <Box sx={{ width: "38rem", height: "26.4rem", borderRadius: "5px", ...shadowStyle }}>
      <Paper sx={{ display: "flex", flexDirection: "column", width: "38rem", height: "26.4rem", borderRadius: "5px" }}>
        <TableContainer component={Box} sx={{ flexGrow: 1 }}>
          <Table aria-labelledby="tableTitle" size="medium">
            <TableHead>
              <Typography sx={{ m: 1 }} variant="h6" id="tableTitle" component="div">
                Summary
              </Typography>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "client_sn"}
                    direction={orderBy === "client_sn" ? order : "asc"}
                    onClick={(event) => handleRequestSort(event, "client_sn")}
                  >
                    Project Name
                    {orderBy === "client_sn" ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "seat_id"}
                    direction={orderBy === "seat_id" ? order : "asc"}
                    onClick={(event) => handleRequestSort(event, "seat_id")}
                  >
                    Seats
                    {orderBy === "seat_id" ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc" ? "sorted descending" : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow key={row.client_sn}>
                  <TableCell component="th" scope="row">
                    {row.client_sn}
                  </TableCell>
                  <TableCell>{row.seat_id}</TableCell>
                </TableRow>
              ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={2} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ mt: "auto", borderTop: "1px solid rgba(224, 224, 224, 1)" }}
        />
      </Paper>
    </Box>
  );
}
