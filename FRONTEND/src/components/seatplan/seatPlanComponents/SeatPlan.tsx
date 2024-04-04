import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { useEffect, useState } from "react";
import { getSeatsFetch } from "../../../redux/state/seatPlanState";
import { getReservationsFetch } from "../../../redux/state/reservationState";
import TimeTablePage from "../../../pages/TimeTablePage";

const SeatPlan: React.FC = () => {
  const dispatch = useDispatch();

  //get seatPlan data from state
  const seatPlan = useSelector(
    (state: RootState) => state.seatPlanReducer.seatPlanValue
  );

  //get reservation data from state
  const reservationsData = useSelector(
    (state: RootState) => state.reservationReducer.reservationValue
  );

  useEffect(() => {
    dispatch(getSeatsFetch());
    dispatch(getReservationsFetch());
  }, [dispatch]);

  console.log(reservationsData);
  const [seatId, setSeatId] = useState(null);
  const [showTimeTablePage, setShowTimeTablePage] = useState(false);
  return (
    <div className="w-full h-[100vh] flex  justify-center">
      <div className="flex gap-x-10 h-[55rem] mt-[100px]">
        {/* FIRST ROW */}
        <div className="flex gap-x-1">
          <div className="flex flex-col justify-between ">
            <div className="flex flex-col gap-y-1">
              {seatPlan.slice(0, 3).map((sp, idx) => {
                const { seat_id } = sp;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setShowTimeTablePage(true);
                      setSeatId(seat_id);
                    }}
                    className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                    <span className="border-[.1rem] px-2 py-[.1rem]">
                      {seat_id}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-col gap-y-1">
              {seatPlan.slice(3, 4).map((sp, idx) => {
                const { seat_id } = sp;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setShowTimeTablePage(true);
                      setSeatId(seat_id);
                    }}
                    className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                    <span className="border-[.1rem] px-2 py-[.1rem]">
                      {seat_id}
                    </span>
                  </div>
                );
              })}

              {seatPlan.slice(4, 6).map((sp, idx) => {
                const { seat_id } = sp;
                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setShowTimeTablePage(true);
                      setSeatId(seat_id);
                    }}
                    className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                    <span className="border-[.1rem] px-2 py-[.1rem]">
                      {seat_id}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="border-[.2rem] border-black h-[15.5rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(6, 9).map((sp, idx) => {
              const { seat_id } = sp;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
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
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[36.5rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(12, 19).map((sp, idx) => {
              const { seat_id } = sp;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
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
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[47rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(27, 36).map((sp, idx) => {
              const { seat_id } = sp;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
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
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[41.8rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(44, 52).map((sp, idx) => {
              const { seat_id } = sp;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
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
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[31.2rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(58, 64).map((sp, idx) => {
              const { seat_id } = sp;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
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
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[26rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(69, 74).map((sp, idx) => {
              const { seat_id } = sp;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
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
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="border-[.2rem] border-black h-[20.8rem]"></div>
          <div className="flex flex-col gap-y-1">
            {seatPlan.slice(78, 82).map((sp, idx) => {
              const { seat_id } = sp;
              return (
                <div
                  key={idx}
                  onClick={() => {
                    setShowTimeTablePage(true);
                    setSeatId(seat_id);
                  }}
                  className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm p-1 cursor-pointer">
                  <span className="border-[.1rem] px-2 py-[.1rem]">
                    {seat_id}
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
