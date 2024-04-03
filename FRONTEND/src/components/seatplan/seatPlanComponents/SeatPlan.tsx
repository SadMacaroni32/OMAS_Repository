import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store/store"
import { useEffect } from "react";
import { getSeatsFetch } from "../../../redux/state/seatPlanState";


const SeatPlan:React.FC = () => {
    const dispatch = useDispatch()
    const seatPlan = useSelector(
      (state: RootState) => state.seatPlanReducer.seatPlanValue
    );
    useEffect(() => {
        dispatch(getSeatsFetch())
    },[dispatch])
    console.log(seatPlan)
  return (
    <div className="w-full h-[100vh] flex">
      <div className="w-[25rem] h-[20rem] grid grid-rows-3 grid-flow-col ">
        {seatPlan.slice(0, 9).map((sp, idx) => {
          const { seat_id } = sp;
          return (
            <div
              key={idx}
              className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm">
              <span>{seat_id}</span>
            </div>
          );
        })}
      </div>

      <div className="w-[30%] h-full grid grid-rows-8 grid-flow-col ">
        {seatPlan.slice(9, 49).map((sp, idx) => {
          const { seat_id } = sp;
          return (
            <div
              key={idx}
              className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm">
              <span>{seat_id}</span>
            </div>
          );
        })}
      </div>
      <div className="w-[20rem] h-[40rem] grid grid-rows-6 grid-flow-col">
        {seatPlan.slice(49, 61).map((sp, idx) => {
          const { seat_id } = sp;
          return (
            <div
              key={idx}
              className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm">
              <span>{seat_id}</span>
            </div>
          );
        })}
      </div>
      <div className="w-[20rem] h-[40rem] grid grid-rows-5 grid-flow-col">
        {seatPlan.slice(61, 71).map((sp, idx) => {
          const { seat_id } = sp;
          return (
            <div
              key={idx}
              className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm">
              <span>{seat_id}</span>
            </div>
          );
        })}
      </div>
      <div className="w-[20rem] h-[40rem] grid grid-rows-4 grid-flow-col">
        {seatPlan.slice(71, 79).map((sp, idx) => {
          const { seat_id } = sp;
          return (
            <div
              key={idx}
              className="w-[5rem] h-[5rem] border-[.1rem] drop-shadow-sm shadow-sm">
              <span>{seat_id}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SeatPlan