import FouColStyle from "./columns.module.css";

const FourthCol: React.FC = ({
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
      <div className={FouColStyle.innerContainer}>
        {seatPlan.slice(36, 44).map((sp, idx) => {
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
              className={`${FouColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={FouColStyle.seatIdContainer}>{seat_id}</span>
              <span className={FouColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={FouColStyle.userInfoTrueContainer}>
                        <span className={FouColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={FouColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? FouColStyle.availableSeat
                              : userInfoToDisplay
                              ? FouColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? FouColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={FouColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? FouColStyle.availableSeat
                            : userInfoToDisplay
                            ? FouColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? FouColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className="border-[.1rem] px-1 text-[.8rem] w-full absolute bottom-0 left-0 text-center">
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-[.2rem] border-black h-[49.8rem]"></div>
      <div className={FouColStyle.innerContainer}>
        {seatPlan.slice(44, 52).map((sp, idx) => {
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
              className={`${FouColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={FouColStyle.seatIdContainer}>{seat_id}</span>
              <span className={FouColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={FouColStyle.userInfoTrueContainer}>
                        <span className={FouColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={FouColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? FouColStyle.availableSeat
                              : userInfoToDisplay
                              ? FouColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? FouColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div
                      className={FouColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? FouColStyle.availableSeat
                            : userInfoToDisplay
                            ? FouColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? FouColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={FouColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FourthCol;
