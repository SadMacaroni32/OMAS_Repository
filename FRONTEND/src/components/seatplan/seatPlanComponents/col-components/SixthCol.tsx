import SiColStyle from "./columns.module.css";

const SixthCol: React.FC = ({
  seatPlan,
  getUserInfo,
  currentTime,
  todayReservations,
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
        {seatPlan.slice(64, 69).map((sp, idx) => {
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
              className={`${SiColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={SiColStyle.seatIdContainer} >
                {seat_id}
              </span>
              <span className={SiColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={SiColStyle.userInfoTrueContainer}>
                        <span className={SiColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={SiColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? SiColStyle.availableSeat
                              : userInfoToDisplay
                              ? SiColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? SiColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className={SiColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? SiColStyle.availableSeat
                            : userInfoToDisplay
                            ? SiColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? SiColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={SiColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
      <div className="border-[.2rem] border-black h-[31rem]"></div>
      <div className="flex flex-col gap-y-1">
        {seatPlan.slice(69, 74).map((sp, idx) => {
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
              className={`${SiColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={SiColStyle.seatIdContainer} >
                {seat_id}
              </span>
              <span className={SiColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={SiColStyle.userInfoTrueContainer}>
                        <span className={SiColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={SiColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? SiColStyle.availableSeat
                              : userInfoToDisplay
                              ? SiColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? SiColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className={SiColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? SiColStyle.availableSeat
                            : userInfoToDisplay
                            ? SiColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? SiColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={SiColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SixthCol;
