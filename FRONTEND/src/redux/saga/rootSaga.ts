// rootSaga.ts
import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { seatPlanSaga } from "./seatPlanSaga";
import { getSeatsSaga } from "./seatSaga";
import { getReservedSeatsSaga } from "./seatReserved";
import { reservationSaga } from "./reservationSaga";

export default function* rootSaga() {
  yield all([loginSaga(), seatPlanSaga(),
   getSeatsSaga(),
   getReservedSeatsSaga(), reservationSaga()]);
}
