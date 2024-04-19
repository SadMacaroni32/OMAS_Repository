import { useState } from "react";
import Login from "../loginComponents/Login";
import { useNavigate } from "react-router";
import Modal from "@mui/material/Modal/Modal";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import OmasLogo from "../../../assets/omas-horizontal-blue.png";

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
      <div className="flex flex-col w-full h-[100vh] items-center overflow-auto no-scrollbar no-scrollbar">
        <div className="flex justify-end w-full px-5 py-3">
          <button
            className="rounded-md shadow-sm drop-shadow-lg border-[.1rem] py-2 px-8 text-[1.2rem]"
            onClick={() => setLoginShow((prev) => !prev)}
          >
            SIGN IN
          </button>
        </div>
        <div className="flex flex-col items-center w-full transition-all ease-linear lg:flex-row justify-evenly">
          <div
            className={
              loginShow
                ? "flex flex-col items-center justify-between mt-[10rem] gap-y-[10rem] w-[40%]  transition-all ease-linear "
                : "flex flex-col items-center justify-between mt-[10rem] gap-y-[10rem] w-[100%]  transition-all ease-linear"
            }
          >
            <div className="rounded-md shadow-sm drop-shadow-lg border-[.1rem] lg:w-[600px] py-[10vh] flex flex-col items-center px-5 w-[90%]">
              <img src={OmasLogo} className="w-1/2"/>
              <p className="text-[1.6rem] text-center">
                Office Table Reservation System
              </p>
            </div>
            <div
              className={
                loginShow
                  ? ""
                  : "rounded-full shadow-sm drop-shadow-lg border-[.1rem] py-3 px-12 text-[1.5rem] "
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
                ? "w-[90%] flex justify-center items-center py-5 lg:justify-normal lg:items-start lg:py-0 lg:w-[20%]  transition-all ease-linear"
                : "w-[0%] transition-all ease-linear"
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
