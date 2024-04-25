import SecColStyle from "./columns.module.css";

const SecondCol: React.FC = ({
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
      <div className={SecColStyle.innerContainer}>
        {seatPlan.slice(9, 12).map((sp, idx) => {
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
              className={`${SecColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={SecColStyle.seatIdContainer}>{seat_id}</span>
              <span className={SecColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={SecColStyle.userInfoTrueContainer}>
                        <span className={SecColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={SecColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? SecColStyle.availableSeat
                              : userInfoToDisplay
                              ? SecColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? SecColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={SecColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? SecColStyle.availableSeat
                            : userInfoToDisplay
                            ? SecColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? SecColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={SecColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-[.2rem] border-black h-[43.5rem]"></div>
      <div className={SecColStyle.innerContainer}>
        {seatPlan.slice(12, 19).map((sp, idx) => {
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
              className={`${SecColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={SecColStyle.seatIdContainer}>{seat_id}</span>
              <span className={SecColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={SecColStyle.userInfoTrueContainer}>
                        <span className={SecColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={SecColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? SecColStyle.availableSeat
                              : userInfoToDisplay
                              ? SecColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? SecColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={SecColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? SecColStyle.availableSeat
                            : userInfoToDisplay
                            ? SecColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? SecColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={SecColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondCol;
