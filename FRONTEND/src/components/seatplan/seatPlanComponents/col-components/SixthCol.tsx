

const SixthCol: React.FC = ({
  seatPlan,
  getUserInfo,
  currentTime,
  reservationsAM,
  reservationsPM,
  setShowTimeTablePage,
  setSeatId,
}) => {
  return (
    <div className="flex gap-x-1">
      <div className="flex flex-col gap-y-1">
        {seatPlan.slice(64, 69).map((sp, idx) => {
          const { seat_id, dept_name } = sp;
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
              className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm px-1 relative cursor-pointer">
              <span className="border-[.1rem] px-1 text-[.8rem]">
                {seat_id}
              </span>{" "}
              <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className="h-full flex flex-col justify-between py-1">
                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center h-full">
                      Available
                    </div>
                  </>
                )}
              </span>
              <span className="border-[.1rem] px-1 text-[.8rem] w-full absolute bottom-0 left-0 text-center">
                {dept_name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-[.2rem] border-black h-[31rem]"></div>
      <div className="flex flex-col gap-y-1">
        {seatPlan.slice(69, 74).map((sp, idx) => {
          const { seat_id, dept_name } = sp;
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
              className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm px-1 relative cursor-pointer">
              <span className="border-[.1rem] px-1 text-[.8rem]">
                {seat_id}
              </span>{" "}
              <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className="h-full flex flex-col justify-between py-1">
                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </>
                ) : (
                  <>
                    <div className="flex flex-col items-center justify-center h-full">
                      Available
                    </div>
                  </>
                )}
              </span>
              <span className="border-[.1rem] px-1 text-[.8rem] w-full absolute bottom-0 left-0 text-center">
                {dept_name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SixthCol