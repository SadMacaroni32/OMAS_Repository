// rootSaga.ts
import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { seatPlanSaga } from "./seatPlanSaga";
import { getSeatsSaga } from "./seatSaga";
import { getReservedSeatsSaga } from "./seatReservedSaga";
import { reservationSaga } from "./reservationSaga";
import  reservationsSaga  from "./reservationsSaga"
import { watchFetchUsers } from "./userSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    seatPlanSaga(),
    getSeatsSaga(),
    getReservedSeatsSaga(),
    reservationSaga(),
    reservationsSaga(),
    watchFetchUsers(),
  ]);
}
