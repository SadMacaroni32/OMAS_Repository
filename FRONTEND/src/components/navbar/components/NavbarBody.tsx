import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import OmasLogo from "../../../assets/omas-horizontal-white.png";

import NavbarSearchBox from "./NavbarSearchBox";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getUsersFetch } from "../../../redux/state/userState";
import { useEffect } from "react";
import NavbarCollapseMenu from "./NavbarCollapseMenu";
import { ScriptsNav } from "./ScriptsNav";
import NavbarMenuItems from "./NavbarMenu";

interface dataFormat {
  emp_id: number;
}

export default function NavbarBody() {

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
  const dispatch = useDispatch();
  const user: dataFormat [] = useSelector((state: RootState) => state.userReducer.users);

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]); 

  //console.log("Navbar Body", user)

  return (
    <AppBar position="static" >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={OmasLogo} className="h-10"/>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          LOGO
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
          </Typography> */}

          <NavbarSearchBox />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }} 
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />
            
            <NavbarMenuItems />

              <NavbarCollapseMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
