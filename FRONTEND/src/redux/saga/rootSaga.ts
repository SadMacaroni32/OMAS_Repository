// rootSaga.ts
import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { seatPlanSaga } from "./seatPlanSaga";
import { getSeatsSaga } from "./seatSaga";
import { getReservedSeatsSaga } from "./seatReservedSaga";
import { reservationSaga, reservationWithUserInfoSaga } from "./reservationSaga";
import  {reservationsSaga, fetchReservationsDate, reservationsSagaDate}  from "./reservationsSaga"

// import { reservationIdsSaga } from "./datesReservedSaga";

import { getUserIdSaga, watchFetchUsers } from "./userSaga";
import { addReservationsSaga } from "./addReservationSaga";
import { weekReserveSaga } from "./weekReserveSaga";


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

    reservationWithUserInfoSaga(),
    addReservationsSaga(),
    weekReserveSaga(),


    getUserIdSaga(),


  ]);
}
