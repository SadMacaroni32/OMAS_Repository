import { useState } from "react";
import Login from "../loginComponents/Login";
import { useNavigate } from "react-router";
import Modal from "@mui/material/Modal/Modal";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import OmasLogo from "../../../assets/omas-horizontal-blue.png";
import LandingStyle from "./Landing.module.css"


const Landing: React.FC = () => {
  const navigate = useNavigate();
  const navigateSeatPlanHandle = () => {
    navigate("/seatplan");
  };
  //state for login
  const [loginShow, setLoginShow] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className={LandingStyle.mainContainer}>
        <div className={LandingStyle.SignInDiv}>
          <button
            className={LandingStyle.SignInButton}
            onClick={() => setLoginShow((prev) => !prev)}
          >
            SIGN IN
          </button>
        </div>
        <div className={LandingStyle.ShowLoginForm}>
          <div
            className={
              loginShow
                ? LandingStyle.landingTransitionTrue
                : LandingStyle.landingTransitionFalse
            }
          >
            <div className={LandingStyle.Logo}>
              <img src={OmasLogo} className={LandingStyle.LogoImg}/>
              <p className={LandingStyle.SystemName}>
                Office Table Reservation System
              </p>
            </div>
            <div
              className={
                loginShow
                  ? ""
                  : LandingStyle.loginShow
              }
            >
              {!loginShow && (
                <button onClick={handleOpen}>View Seatplan</button> // Palitan mo lang ng navigateSeatPlanHandle ung handleOpen kung di mo sya type. Owshi. :(
              )}
            </div>
          </div>
          <div
            className={
              loginShow
                ? LandingStyle.ShowLoginTrue
                : LandingStyle.ShowLoginFalse
            }
          >
            {loginShow && <Login />}
          </div>
        </div>
      </div>

        {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You are not logged in!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please login your account details before viewing the seatplan.
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default Landing;
