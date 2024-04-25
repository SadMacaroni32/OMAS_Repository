import SeColStyle from "./columns.module.css";

const SeventhCol: React.FC = ({
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
        {seatPlan.slice(74, 78).map((sp, idx) => {
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
              className={`${SeColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={SeColStyle.seatIdContainer}>{seat_id}</span>
              <span className={SeColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={SeColStyle.userInfoTrueContainer}>
                        <span className={SeColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={SeColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? SeColStyle.availableSeat
                              : userInfoToDisplay
                              ? SeColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? SeColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={SeColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? SeColStyle.availableSeat
                            : userInfoToDisplay
                            ? SeColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? SeColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={SeColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-[.2rem] border-black h-[24.8rem]"></div>
      <div className="flex flex-col gap-y-1">
        {seatPlan.slice(78, 82).map((sp, idx) => {
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
              className={`${SeColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={SeColStyle.seatIdContainer}>{seat_id}</span>
              <span className={SeColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={SeColStyle.userInfoTrueContainer}>
                        <span className={SeColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={SeColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? SeColStyle.availableSeat
                              : userInfoToDisplay
                              ? SeColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? SeColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={SeColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? SeColStyle.availableSeat
                            : userInfoToDisplay
                            ? SeColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? SeColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={SeColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SeventhCol;
