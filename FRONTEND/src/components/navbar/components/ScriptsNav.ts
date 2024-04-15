import React from "react";
import { useNavigate } from "react-router-dom";

export const ScriptsNav = () => {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pageDashboard = () => {
    navigate(`/dashboard`);
  };

  const pageSeatplan = () => {
    navigate(`/seatplan`);
  };

  const pageViewAppointments = () => {
    navigate(`/viewreservation`);
  };

  const pageLogout = () => {
    navigate(`/landingpage`);
    localStorage.removeItem("tableState");
    localStorage.removeItem("seatData");
    localStorage.removeItem("seatReservedData");
  };

  return {
    anchorElNav,
    anchorElUser,
    handleOpenNavMenu,
    handleOpenUserMenu,
    handleCloseNavMenu,
    handleCloseUserMenu,
    pageDashboard,
    pageSeatplan,
    pageViewAppointments,
    pageLogout,
  };
};
