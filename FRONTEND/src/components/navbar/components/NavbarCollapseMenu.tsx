import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import { ScriptsNav } from "./ScriptsNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect } from "react";
import { getUsersFetch } from "../../../redux/state/userState";

export default function NavbarCollapseMenu() {
  const dispatch = useDispatch();
  const loggedUser: any = useSelector(
    (state: RootState) => state.userProfileReducer.userProfile
  );

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  const { anchorElUser, handleOpenUserMenu, handleCloseUserMenu, pageLogout } =
    ScriptsNav();

  // console.log("Navbar Collapse Menu", loggedUser)

  return (
    <>
      {/* COLLAPSE MENU */}
      {loggedUser && (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <Box
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1 }}
            onClick={() => {
              handleCloseUserMenu();
            }}
          >
            <Typography id="name" textAlign="center" sx={{fontSize: '1rem', fontWeight: "bold", color: "#25476A"}}>
              {loggedUser.first_name} {loggedUser.middle_name} {loggedUser.last_name}
            </Typography>
            <Typography id="position" textAlign="center" sx={{fontSize: '1rem', color: "#25476A"}}>
              {loggedUser.position_name}
            </Typography>
          </Box>
          {/* Logout */}
          <MenuItem
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onClick={() => {
              handleCloseUserMenu();
              pageLogout();
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
      )}
    </>
  );
}
