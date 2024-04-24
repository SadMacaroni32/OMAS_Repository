import * as React from "react";
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem
import Typography from "@mui/material/Typography";
import { ScriptsNav } from "./ScriptsNav";
import { useNavigate } from "react-router-dom";

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


      const navigate = useNavigate();
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
            <Typography textAlign="center">My Seat Reservations</Typography>
        </MenuItem>
        <MenuItem
            onClick={() => {
                handleCloseUserMenu();
                navigate("/testpage")
            }}
        >
            <Typography textAlign="center">Test Page</Typography>
        </MenuItem>
    </>
    );
}
