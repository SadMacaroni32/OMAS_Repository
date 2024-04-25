import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import OmasLogo from "../../../assets/omas-horizontal-white.png";

import NavbarSearchBox from "./NavbarSearchBox";
import NavbarCollapseMenu from "./NavbarCollapseMenu";
import { ScriptsNav } from "./ScriptsNav";
import NavbarMenuItems from "./NavbarMenu";

export default function NavbarBody() {
  const { anchorElNav, handleOpenNavMenu, handleCloseNavMenu } = ScriptsNav();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            src={OmasLogo}
            alt="omas logo"
            width="75px"
          />

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
            >{<NavbarMenuItems />}</Menu>
          <Box
            component="img"
            sx={{ display: { xs: "flex", md: "none" }, 
            mr: 2,
            mt: 0.5}}
            src={OmasLogo}
            alt="omas logo"
            width="75px"
            height="100%"
          />
          </Box>


          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {<NavbarMenuItems />}
          </Box>

          <NavbarCollapseMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
