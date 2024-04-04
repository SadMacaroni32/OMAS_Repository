import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getSeatsFetch } from "../../../redux/state/seatPlanState";
import { getReservationsFetch } from "../../../redux/state/reservationState";
import TimeTablePage from "../../../pages/TimeTablePage";
import { getUsersFetch } from "../../../redux/state/userState";

const SeatPlan: React.FC = () => {
  const dispatch = useDispatch();

  //get users for seat reservation
  const userData = useSelector((state: RootState) => state.userReducer.users);

  //get seatPlan data from state
  const seatPlan = useSelector(
    (state: RootState) => state.seatPlanReducer.seatPlanValue
  );

  //get reservation data from state
  const reservationsData = useSelector(
    (state: RootState) => state.reservationReducer.reservationValue
  );

  useEffect(() => {
    dispatch(getUsersFetch());
    dispatch(getSeatsFetch());
    dispatch(getReservationsFetch());
  }, [dispatch]);

  console.log(reservationsData);
  const [seatId, setSeatId] = useState(null);
  const [showTimeTablePage, setShowTimeTablePage] = useState(false);

  // Filter reservations for today
  const todayReservations = reservationsData.filter((reservation: any) => {
    const reservationDate = new Date(reservation.created_at);
    const today = new Date();
    return (
      reservationDate.getDate() === today.getDate() &&
      reservationDate.getMonth() === today.getMonth() &&
      reservationDate.getFullYear() === today.getFullYear()
    );
  });

  // Fetch user information using emp_id
  const getUserInfo = (empId) => {
    const user = userData.find((user) => user.emp_id === empId);
    return user
      ? {
          deptName: user.dept_name,
          fname: user.fname,
          lname: user.lname,
          position: user.position,
        }
      : null;
  };

  console.log(todayReservations);
  return (
    <div className="w-full h-[100vh] flex overflow-auto   justify-center">
      <div className="flex gap-x-10 h-full mt-[100px] ">
        {/* FIRST ROW */}
        <div className="flex gap-x-1 h-[90%]">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-y-1">
              {seatPlan.slice(0, 3).map((sp, idx) => {
                const { seat_id } = sp;
                // Find reservation for this seat for today
                const reservation: any = todayReservations.find(
                  (res: any) => res.seat_id === seat_id
                );

                // Fetch user information using emp_id
                const userInfo = reservation
                  ? getUserInfo(reservation.emp_id)
                  : null;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setShowTimeTablePage(true);
                      setSeatId(seat_id);
                    }}
                    className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm  cursor-pointer px-1  relative">
                    <span className="border-[.1rem]  px-1 text-[.8rem]">
                      {seat_id}
                    </span>
                    <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                      {reservation ? (
                        <>
                          {userInfo ? (
                            <div className="h-full flex flex-col justify-between py-1">
                              <div>{userInfo.position}</div>
                              <div>
                                {userInfo.fname} {userInfo.lname}
                              </div>
                              <div>{userInfo.deptName}</div>
                            </div>
                          ) : (
                            "Unknown User"
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                          Available
                        </div>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-y-1">
              {seatPlan.slice(3, 4).map((sp, idx) => {
                const { seat_id } = sp;
                // Find reservation for this seat for today
                const reservation: any = todayReservations.find(
                  (res: any) => res.seat_id === seat_id
                );

                // Fetch user information using emp_id
                const userInfo = reservation
                  ? getUserInfo(reservation.emp_id)
                  : null;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setShowTimeTablePage(true);
                      setSeatId(seat_id);
                    }}
                    className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm px-1 cursor-pointer relative">
                    <span className="border-[.1rem] px-1 text-[.8rem]">
                      {seat_id}
                    </span>
                    <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                      {reservation ? (
                        <>
                          {userInfo ? (
                            <div className="h-full flex flex-col justify-between py-1">
                              <div>{userInfo.position}</div>
                              <div>
                                {userInfo.fname} {userInfo.lname}
                              </div>
                              <div>{userInfo.deptName}</div>
                            </div>
                          ) : (
                            "Unknown User"
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                          Available
                        </div>
                      )}
                    </span>
                  </div>
                );
              })}

              {seatPlan.slice(4, 6).map((sp, idx) => {
                const { seat_id } = sp;
                // Find reservation for this seat for today
                const reservation: any = todayReservations.find(
                  (res: any) => res.seat_id === seat_id
                );

                // Fetch user information using emp_id
                const userInfo = reservation
                  ? getUserInfo(reservation.emp_id)
                  : null;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setShowTimeTablePage(true);
                      setSeatId(seat_id);
                    }}
                    className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm px-1 cursor-pointer relative">
                    <span className="border-[.1rem] px-1 text-[.8rem]">
                      {seat_id}
                    </span>
                    <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                      {reservation ? (
                        <>
                          {userInfo ? (
                            <div className="h-full flex flex-col justify-between py-1">
                              <div>{userInfo.position}</div>
                              <div>
                                {userInfo.fname} {userInfo.lname}
                              </div>
                              <div>{userInfo.deptName}</div>
                            </div>
                          ) : (
                            "Unknown User"
                          )}
                        </>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full">
                          Available
                        </div>
                      )}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-[.2rem] border-black h-[18.5rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(6, 9).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SECOND ROW */}
        <div className="flex gap-x-1">
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(9, 12).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
                : null;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm cursor-pointer px-1  relative">
                  <span className="border-[.1rem] px-1 text-[.8rem]">
                    {seat_id}
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[43.5rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(12, 19).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );
              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* THIRD ROW */}
        <div className="flex gap-x-1">
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(19, 27).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[56rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(27, 36).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FOURTH ROW */}
        <div className="flex gap-x-1">
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(36, 44).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
                : null;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm px-1  relative cursor-pointer">
                  <span className="border-[.1rem] px-1 text-[.8rem]">
                    {seat_id}
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[49.8rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(44, 52).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FIFTH ROW */}
        <div className="flex gap-x-1">
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(52, 58).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[37.3rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(58, 64).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
                : null;

              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[6rem] h-[6rem] border-[.1rem] drop-shadow-sm shadow-sm relative px-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem] text-[.8rem]">
                    {seat_id}
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SIX ROW */}
        <div className="flex gap-x-1">
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(64, 69).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[31rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(69, 74).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* SEVENTH ROW */}
        <div className="flex gap-x-1">
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(74, 78).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[24.8rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(78, 82).map((sp, idx) => {
              const { seat_id } = sp;
              // Find reservation for this seat for today
              const reservation: any = todayReservations.find(
                (res: any) => res.seat_id === seat_id
              );

              // Fetch user information using emp_id
              const userInfo = reservation
                ? getUserInfo(reservation.emp_id)
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
                  </span>
                  <span className="text-[.8rem]  w-full left-0  text-center absolute h-full ">
                    {reservation ? (
                      <>
                        {userInfo ? (
                          <div className="h-full flex flex-col justify-between py-1">
                            <div>{userInfo.position}</div>
                            <div>
                              {userInfo.fname} {userInfo.lname}
                            </div>
                            <div>{userInfo.deptName}</div>
                          </div>
                        ) : (
                          "Unknown User"
                        )}
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        Available
                      </div>
                    )}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {seatPlan.map((s, idx) => {
        const { seat_id } = s;
        return (
          <div key={idx}>
            {showTimeTablePage && seatId === seat_id && (
              <TimeTablePage seat_id={seat_id} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SeatPlan;
