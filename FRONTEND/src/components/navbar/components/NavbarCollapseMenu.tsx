import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar"; // Added Avatar import
import Tooltip from "@mui/material/Tooltip"; // Added Tooltip import
import { ScriptsNav } from "./ScriptsNav";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect } from "react";
import { getUsersFetch } from "../../../redux/state/userState";

export default function NavbarCollapseMenu() {
  const dispatch = useDispatch();
  const userData: any = useSelector(
    (state: RootState) => state.userReducer.users
  );

  useEffect(() => {
    dispatch(getUsersFetch());
  }, [dispatch]);

  const { anchorElUser, handleOpenUserMenu, handleCloseUserMenu, pageLogout } =
    ScriptsNav();

  const { emp_id, username, status_code, position_id } = userData.message ?? {};

  return (
    <>
      {/* COLLAPSE MENU */}
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
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
            }}
          >
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            <Typography textAlign="center">
              {username} {status_code}
            </Typography>
            <Typography textAlign="center">
              {emp_id} {position_id}
            </Typography>
          </MenuItem>
          {/* Logout */}
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              pageLogout();
            }}
          >
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    </>
  );
}
