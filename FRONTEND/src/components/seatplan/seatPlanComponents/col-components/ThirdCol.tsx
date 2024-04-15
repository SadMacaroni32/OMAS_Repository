const ThirdCol: React.FC = ({
  seatPlan,
  getUserInfo,
  currentTime,
  reservationsAM,
  reservationsPM,
  setShowTimeTablePage,
  setSeatId,
  available,
  occupied,
  underRepair,
}) => {
  return (
    <div className="flex gap-x-1">
      <div className="flex flex-col gap-y-1">
        {seatPlan.slice(19, 27).map((sp, idx) => {
          const { seat_id, dept_name, seat_status } = sp;
          // Find reservation for this seat for today AM
          const reservationAM: any = reservationsAM.find(
            (res: any) => res.seat_id === seat_id
          );

          // Find reservation for this seat for today PM
          const reservationPM: any = reservationsPM.find(
            (res: any) => res.seat_id === seat_id
          );

          // Determine which reservation to display based on current time
          let displayReservation;
          if (
            currentTime.getHours() < 12 ||
            (currentTime.getHours() === 12 && currentTime.getMinutes() < 30)
          ) {
            // Display AM reservation if current time is before 12:30
            displayReservation = reservationAM;
          } else {
            // Display PM reservation if current time is 12:30 or later
            displayReservation = reservationPM;
          }

          // Fetch user information based on the reservation to display
          const userInfoToDisplay = displayReservation
            ? getUserInfo(displayReservation.emp_id)
            : null;

          return (
            <div
              key={idx}
              onClick={() => {
                setShowTimeTablePage(true);
                setSeatId(seat_id);
              }}
              className={`w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm cursor-pointer px-1 relative ${
                (available && seat_status === "available") ||
                (occupied && seat_status === "occupied") ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className="border-[.1rem]  px-1 text-[.8rem]">
                {seat_id}
              </span>
              <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                {displayReservation ? (
                  <>
                    {userInfoToDisplay && seat_status === "occupied" ? (
                      <div className="relative flex flex-col justify-between h-full py-1">
                        <span className="h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-yellow-400"></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className="relative flex items-center justify-center h-full">
                        <span
                          className={
                            seat_status === "available"
                              ? "h-[.5rem] w-[.5rem]  rounded-full absolute right-[.5rem] top-[.5rem] bg-green-400"
                              : seat_status === "occupied"
                              ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-yellow-400"
                              : seat_status === "repairing"
                              ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-red-500"
                              : ""
                          }></span>
                        {seat_status}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="relative flex flex-col items-center justify-center h-full">
                      <span
                        className={
                          seat_status === "available"
                            ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-green-400"
                            : seat_status === "occupied"
                            ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-yellow-400"
                            : seat_status === "repairing"
                            ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-red-500"
                            : ""
                        }></span>
                      {seat_status}
                    </div>
                  </>
                )}
              </span>
              <span className="border-[.1rem] px-1 text-[.8rem] w-full absolute bottom-0 left-0 text-center">
                {userInfoToDisplay && seat_status === "occupied"
                  ? userInfoToDisplay.client
                  : null}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-[.2rem] border-black h-[56rem]"></div>
      <div className="flex flex-col gap-y-1">
        {seatPlan.slice(27, 36).map((sp, idx) => {
          const { seat_id, dept_name, seat_status } = sp;
          // Find reservation for this seat for today AM
          const reservationAM: any = reservationsAM.find(
            (res: any) => res.seat_id === seat_id
          );

          // Find reservation for this seat for today PM
          const reservationPM: any = reservationsPM.find(
            (res: any) => res.seat_id === seat_id
          );

          // Determine which reservation to display based on current time
          let displayReservation;
          if (
            currentTime.getHours() < 12 ||
            (currentTime.getHours() === 12 && currentTime.getMinutes() < 30)
          ) {
            // Display AM reservation if current time is before 12:30
            displayReservation = reservationAM;
          } else {
            // Display PM reservation if current time is 12:30 or later
            displayReservation = reservationPM;
          }

          // Fetch user information based on the reservation to display
          const userInfoToDisplay = displayReservation
            ? getUserInfo(displayReservation.emp_id)
            : null;

          return (
            <div
              key={idx}
              onClick={() => {
                setShowTimeTablePage(true);
                setSeatId(seat_id);
              }}
              className={`w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm cursor-pointer px-1 relative ${
                (available && seat_status === "available") ||
                (occupied && seat_status === "occupied") ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className="border-[.1rem]  px-1 text-[.8rem]">
                {seat_id}
              </span>
              <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                {displayReservation ? (
                  <>
                    {userInfoToDisplay && seat_status === "occupied" ? (
                      <div className="relative flex flex-col justify-between h-full py-1">
                        <span className="h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-yellow-400"></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className="relative flex items-center justify-center h-full">
                        <span
                          className={
                            seat_status === "available"
                              ? "h-[.5rem] w-[.5rem]  rounded-full absolute right-[.5rem] top-[.5rem] bg-green-400"
                              : seat_status === "occupied"
                              ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-yellow-400"
                              : seat_status === "repairing"
                              ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-red-500"
                              : ""
                          }></span>
                        {seat_status}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="relative flex flex-col items-center justify-center h-full">
                      <span
                        className={
                          seat_status === "available"
                            ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-green-400"
                            : seat_status === "occupied"
                            ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-yellow-400"
                            : seat_status === "repairing"
                            ? "h-[.5rem] w-[.5rem] rounded-full absolute right-[.5rem] top-[.5rem] bg-red-500"
                            : ""
                        }></span>
                      {seat_status}
                    </div>
                  </>
                )}
              </span>
              <span className="border-[.1rem] px-1 text-[.8rem] w-full absolute bottom-0 left-0 text-center">
                {userInfoToDisplay && seat_status === "occupied"
                  ? userInfoToDisplay.client
                  : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdCol;
