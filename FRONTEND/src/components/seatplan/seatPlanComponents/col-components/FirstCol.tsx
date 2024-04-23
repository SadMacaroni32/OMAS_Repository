import FirstColStyle from "./columns.module.css"

const FirstCol: React.FC = ({
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
  // console.log("This is Column 1 Todays Reservations: ", todayReservations);
  return (
    <div className={FirstColStyle.container}>
      <div className={FirstColStyle.outerContainer}>
        <div className={FirstColStyle.innerContainer}>
          {seatPlan.slice(0, 3).map((sp, idx) => {
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
                className={` ${FirstColStyle.returnValueContainer} ${
                  (available &&
                    !userInfoToDisplay &&
                    seat_status !== "repairing") ||
                  (occupied && userInfoToDisplay) ||
                  (underRepair && seat_status === "repairing")
                    ? ""
                    : "opacity-50"
                } `}>
                <span className={FirstColStyle.seatIdContainer}>
                  {seat_id}
                </span>
                <span className={FirstColStyle.displayReservationContainer}>
                  {displayReservation ? (
                    <>
                      {userInfoToDisplay ? (
                        <div className={FirstColStyle.userInfoTrueContainer}>
                          <span className={FirstColStyle.occupiedSeat}></span>

                          <div>{userInfoToDisplay.position}</div>
                          <div>
                            {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                          </div>
                          <div className="h-[1rem]"></div>
                        </div>
                      ) : (
                        <div className={FirstColStyle.userInfoFalseContainer}>
                          <span
                            className={
                              seat_status === "available"
                                ? FirstColStyle.availableSeat
                                : userInfoToDisplay
                                ? FirstColStyle.occupiedSeat
                                : seat_status === "repairing"
                                ? FirstColStyle.underRepairSeat
                                : ""
                            }></span>
                          {todayReservations ? seat_status : "available"}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className={FirstColStyle.displayReservationFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? FirstColStyle.availableSeat
                              : userInfoToDisplay
                              ? FirstColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? FirstColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    </>
                  )}
                </span>
                <span className={FirstColStyle.userInfoClientContainer}>
                  {userInfoToDisplay ? userInfoToDisplay.client : null}
                </span>
              </div>
            );
          })}
        </div>
        <div className={FirstColStyle.innerContainer}>
          {seatPlan.slice(3, 4).map((sp, idx) => {
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
                className={` ${FirstColStyle.returnValueContainer} ${
                  (available &&
                    !userInfoToDisplay &&
                    seat_status !== "repairing") ||
                  (occupied && userInfoToDisplay) ||
                  (underRepair && seat_status === "repairing")
                    ? ""
                    : "opacity-50"
                }`}>
                <span className={FirstColStyle.seatIdContainer}>
                  {seat_id}
                </span>
                <span className={FirstColStyle.displayReservationContainer}>
                  {displayReservation ? (
                    <>
                      {userInfoToDisplay ? (
                        <div className={FirstColStyle.userInfoTrueContainer}>
                          <span className={FirstColStyle.occupiedSeat}></span>

                          <div>{userInfoToDisplay.position}</div>
                          <div>
                            {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                          </div>
                          <div className="h-[1rem]"></div>
                        </div>
                      ) : (
                        <div className={FirstColStyle.userInfoFalseContainer}>
                          <span
                            className={
                              seat_status === "available"
                                ? FirstColStyle.availableSeat
                                : userInfoToDisplay
                                ? FirstColStyle.occupiedSeat
                                : seat_status === "repairing"
                                ? FirstColStyle.underRepairSeat
                                : ""
                            }></span>
                          {todayReservations ? seat_status : "available"}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className={FirstColStyle.displayReservationFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? FirstColStyle.availableSeat
                              : userInfoToDisplay
                              ? FirstColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? FirstColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    </>
                  )}
                </span>
                <span className={FirstColStyle.userInfoClientContainer}>
                  {userInfoToDisplay ? userInfoToDisplay.client : null}
                </span>
              </div>
            );
          })}

          {seatPlan.slice(4, 6).map((sp, idx) => {
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
                className={` ${FirstColStyle.returnValueContainer} ${
                  (available &&
                    !userInfoToDisplay &&
                    seat_status !== "repairing") ||
                  (occupied && userInfoToDisplay) ||
                  (underRepair && seat_status === "repairing")
                    ? ""
                    : "opacity-50"
                }`}>
                <span className={FirstColStyle.seatIdContainer}>
                  {seat_id}
                </span>
                <span className={FirstColStyle.displayReservationContainer}>
                  {displayReservation ? (
                    <>
                      {userInfoToDisplay ? (
                        <div className={FirstColStyle.userInfoTrueContainer}>
                          <span className={FirstColStyle.occupiedSeat}></span>

                          <div>{userInfoToDisplay.position}</div>
                          <div>
                            {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                          </div>
                          <div className="h-[1rem]"></div>
                        </div>
                      ) : (
                        <div className={FirstColStyle.userInfoFalseContainer}>
                          <span
                            className={
                              seat_status === "available"
                                ? FirstColStyle.availableSeat
                                : userInfoToDisplay
                                ? FirstColStyle.occupiedSeat
                                : seat_status === "repairing"
                                ? FirstColStyle.underRepairSeat
                                : ""
                            }></span>
                          {todayReservations ? seat_status : "available"}
                        </div>
                      )}
                    </>
                  ) : (
                    <>
                      <div className={FirstColStyle.displayReservationFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? FirstColStyle.availableSeat
                              : userInfoToDisplay
                              ? FirstColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? FirstColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    </>
                  )}
                </span>
                <span className={FirstColStyle.userInfoClientContainer}>
                  {userInfoToDisplay ? userInfoToDisplay.client : null}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-[.2rem] border-black h-[18.5rem]"></div>
      <div className={FirstColStyle.innerContainer}>
        {seatPlan.slice(6, 9).map((sp, idx) => {
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
              className={` ${FirstColStyle.returnValueContainer} ${
                (available &&
                  !userInfoToDisplay &&
                  seat_status !== "repairing") ||
                (occupied && userInfoToDisplay) ||
                (underRepair && seat_status === "repairing")
                  ? ""
                  : "opacity-50"
              }`}>
              <span className={FirstColStyle.seatIdContainer}>
                {seat_id}
              </span>
              <span className={FirstColStyle.displayReservationContainer}>
                {displayReservation ? (
                  <>
                    {userInfoToDisplay ? (
                      <div className={FirstColStyle.userInfoTrueContainer}>
                        <span className={FirstColStyle.occupiedSeat}></span>

                        <div>{userInfoToDisplay.position}</div>
                        <div>
                          {userInfoToDisplay.fname} {userInfoToDisplay.lname}
                        </div>
                        <div className="h-[1rem]"></div>
                      </div>
                    ) : (
                      <div className={FirstColStyle.userInfoFalseContainer}>
                        <span
                          className={
                            seat_status === "available"
                              ? FirstColStyle.availableSeat
                              : userInfoToDisplay
                              ? FirstColStyle.occupiedSeat
                              : seat_status === "repairing"
                              ? FirstColStyle.underRepairSeat
                              : ""
                          }></span>
                        {todayReservations ? seat_status : "available"}
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className={FirstColStyle.displayReservationFalseContainer}>
                      <span
                        className={
                          seat_status === "available"
                            ? FirstColStyle.availableSeat
                            : userInfoToDisplay
                            ? FirstColStyle.occupiedSeat
                            : seat_status === "repairing"
                            ? FirstColStyle.underRepairSeat
                            : ""
                        }></span>
                      {todayReservations ? seat_status : "available"}
                    </div>
                  </>
                )}
              </span>
              <span className={FirstColStyle.userInfoClientContainer}>
                {userInfoToDisplay ? userInfoToDisplay.client : null}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FirstCol;
