import { useState } from "react";
import Login from "../login/Login";

const Landing: React.FC = () => {
  //state for login
  const [loginShow, setLoginShow] = useState(false);
  return (
    <div className="flex flex-col w-full h-[100vh] items-center overflow-auto no-scrollbar no-scrollbar">
      <div className="flex justify-end w-full px-5 py-3">
        <button
          className="rounded-md shadow-sm drop-shadow-lg border-[.1rem] py-2 px-8 text-[1.2rem]"
          onClick={() => setLoginShow((prev) => !prev)}>
          SIGN IN
        </button>
      </div>
      <div className="flex flex-col items-center w-full transition-all ease-linear lg:flex-row justify-evenly">
        <div
          className={
            loginShow
              ? "flex flex-col items-center justify-between mt-[10rem] gap-y-[10rem] w-[40%]  transition-all ease-linear "
              : "flex flex-col items-center justify-between mt-[10rem] gap-y-[10rem] w-[100%]  transition-all ease-linear"
          }>
          <div className="rounded-md shadow-sm drop-shadow-lg border-[.1rem] lg:w-[600px] py-[10vh] flex flex-col items-center px-5 w-[90%]">
            <p className="text-[5rem] font-medium">OMAS</p>
            <p className="text-[1.6rem] text-center">
              Office Table Reservation System
            </p>
          </div>
          <div
            className={
              loginShow
                ? ""
                : "rounded-full shadow-sm drop-shadow-lg border-[.1rem] py-3 px-12 text-[1.5rem] "
            }>
            {!loginShow && <button>View Seatplan</button>}
          </div>
        </div>
        <div
          className={
            loginShow
              ? "w-[90%] flex justify-center items-center py-5 lg:justify-normal lg:items-start lg:py-0 lg:w-[20%]  transition-all ease-linear"
              : "w-[0%] transition-all ease-linear"
          }>
          {loginShow && <Login />}
        </div>
      </div>
    </div>
  );
};

export default Landing;
