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
import { useEffect } from "react";
import { getUsersFetch } from "../../../redux/state/userState";

interface Data {
  emp_id: number;
  dept_name: string;
  seats: number;
}

function createData(emp_id: number, dept_name: string, seats: number): Data {
  return {
    emp_id,
    dept_name,
    seats,
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

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("dept_name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const shadowStyle = { boxShadow: "0px 4px 10px #25476A" };

  {
    /* Start - API data retrieval and mapping to rows */
  }
  const dispatch = useDispatch();
  const seatData: Data[] = useSelector(
    (state: RootState) => state.userReducer.users
  );

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);
    // Data filtered rows to avoid duplicates
  const deptNamesSet = new Set<string>();

  const rows = seatData.reduce((acc: Data[], item: Data) => {
    if (!deptNamesSet.has(item.dept_name)) {
      deptNamesSet.add(item.dept_name);
      acc.push(createData(item.emp_id, item.dept_name, item.seats));
    }
    return acc;
  }, []);

  {
    /* End - API data retrieval and mapping to rows */
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
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

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", ...shadowStyle }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 400 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableHead>
              <Typography
                sx={{ m: 1 }}
                variant="h6"
                id="tableTitle"
                component="div"
              >
                Summary
              </Typography>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "dept_name"}
                    direction={orderBy === "dept_name" ? order : "asc"}
                    onClick={(event) => handleRequestSort(event, "dept_name")}
                  >
                    Project Name
                    {orderBy === "dept_name" ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === "seats"}
                    direction={orderBy === "seats" ? order : "asc"}
                    onClick={(event) => handleRequestSort(event, "seats")}
                  >
                    Seats
                    {orderBy === "seats" ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === "desc"
                          ? "sorted descending"
                          : "sorted ascending"}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {visibleRows.map((row) => (
                <TableRow key={row.emp_id}>
                  <TableCell component="th" scope="row">
                    {row.dept_name}
                  </TableCell>
                  <TableCell>{row.seats}</TableCell>
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
        />
      </Paper>
    </Box>
  );
}
