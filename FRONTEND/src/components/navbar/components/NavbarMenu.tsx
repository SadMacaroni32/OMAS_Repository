import * as React from "react";
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem
import Typography from "@mui/material/Typography";
import { ScriptsNav } from "./ScriptsNav";

export default function NavbarMenu() {
    const {
        anchorElNav,
        handleOpenNavMenu,
        handleCloseNavMenu,
        handleCloseUserMenu,
        pageDashboard,
        pageSeatplan,
        pageViewAppointments,
      } = ScriptsNav();

    return(
    <>
        {/* Dashboard */}
        <MenuItem
            onClick={() => {
                handleCloseUserMenu();
                pageDashboard();
            }}
        >
            <Typography textAlign="center">Dashboard</Typography>
        </MenuItem>
        {/* Seatplan */}
        <MenuItem
            onClick={() => {
                handleCloseUserMenu();
                pageSeatplan();
            }}
        >
            <Typography textAlign="center">View Seatplan</Typography>
        </MenuItem>
        {/* View Appointments */}
        <MenuItem
            onClick={() => {
                handleCloseUserMenu();
                pageViewAppointments();
            }}
        >
            <Typography textAlign="center">View Appointments</Typography>
        </MenuItem>
    </>
    );
}
