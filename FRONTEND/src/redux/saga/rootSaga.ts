// rootSaga.ts
import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { seatPlanSaga } from "./seatPlanSaga";
import { getSeatsSaga } from "./seatSaga";
import { getReservedSeatsSaga } from "./seatReservedSaga";
import { reservationSaga } from "./reservationSaga";
import  reservationsSaga  from "./reservationsSaga"

export default function* rootSaga() {
  yield all([
    loginSaga(),
    seatPlanSaga(),
    getSeatsSaga(),
    getReservedSeatsSaga(),
    reservationSaga(),
    reservationsSaga(),
  ]);
}
