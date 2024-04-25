import ThiColStyle from "./columns.module.css";

const ThirdCol: React.FC = ({
  seatPlan,
  getUserInfo,
  currentTime,
  todayReservations,
  reservationsAM,
  reservationsPM,
  reservationsBetween6To1930,
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

          // Find reservation for this seat between 6:00 AM to 7:30 PM
          const reservationBetween6To1930: any =
            reservationsBetween6To1930.find(
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
          } else if (!reservationAM || !reservationPM) {
            // Display reservation between 6:00 AM and 7:30 PM
            displayReservation = reservationBetween6To1930;
          } else {
            // Display PM reservation if current time is 7:30 or later
            displayReservation = reservationPM;
          }

          // Fetch user information based on the reservation to display
          let userInfoToDisplay = displayReservation
            ? getUserInfo(displayReservation.emp_id)
            : null;

          if (!userInfoToDisplay && reservationBetween6To1930) {
            userInfoToDisplay = getUserInfo(reservationBetween6To1930.emp_id);
          }

          return (
            <div
              key={idx}
              onClick={() => {
                setShowTimeTablePage(true);
                setSeatId(seat_id);
              }}
              className={`${ThiColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={ThiColStyle.seatIdContainer}>{seat_id}</span>
              <span className={ThiColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={ThiColStyle.userInfoTrueContainer}>
                        <span className={ThiColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={ThiColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? ThiColStyle.availableSeat
                              : userInfoToDisplay
                              ? ThiColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? ThiColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={ThiColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? ThiColStyle.availableSeat
                            : userInfoToDisplay
                            ? ThiColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? ThiColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={ThiColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
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

          // Find reservation for this seat between 6:00 AM to 7:30 PM
          const reservationBetween6To1930: any =
            reservationsBetween6To1930.find(
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
          } else if (!reservationAM || !reservationPM) {
            // Display reservation between 6:00 AM and 7:30 PM
            displayReservation = reservationBetween6To1930;
          } else {
            // Display PM reservation if current time is 7:30 or later
            displayReservation = reservationPM;
          }

          // Fetch user information based on the reservation to display
          let userInfoToDisplay = displayReservation
            ? getUserInfo(displayReservation.emp_id)
            : null;

          if (!userInfoToDisplay && reservationBetween6To1930) {
            userInfoToDisplay = getUserInfo(reservationBetween6To1930.emp_id);
          }

          return (
            <div
              key={idx}
              onClick={() => {
                setShowTimeTablePage(true);
                setSeatId(seat_id);
              }}
              className={`${ThiColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={ThiColStyle.seatIdContainer}>{seat_id}</span>
              <span className={ThiColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={ThiColStyle.userInfoTrueContainer}>
                        <span className={ThiColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={ThiColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? ThiColStyle.availableSeat
                              : userInfoToDisplay
                              ? ThiColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? ThiColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={ThiColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? ThiColStyle.availableSeat
                            : userInfoToDisplay
                            ? ThiColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? ThiColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={ThiColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThirdCol;
