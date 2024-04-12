// rootSaga.ts
import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { seatPlanSaga } from "./seatPlanSaga";
import { getSeatsSaga } from "./seatSaga";
import { getReservedSeatsSaga } from "./seatReservedSaga";
import { reservationSaga, reservationWithUserInfoSaga } from "./reservationSaga";
import  {reservationsSaga, fetchReservationsDate, reservationsSagaDate}  from "./reservationsSaga"
import { getUserIdSaga, watchFetchUsers } from "./userSaga";

export default function* rootSaga() {
  yield all([
    loginSaga(),
    seatPlanSaga(),
    getSeatsSaga(),
    getReservedSeatsSaga(),
    reservationSaga(),
    reservationsSaga(),
    watchFetchUsers(),
    fetchReservationsDate(),
    reservationsSagaDate(),

    reservationWithUserInfoSaga()

    getUserIdSaga(),


  ]);
}
