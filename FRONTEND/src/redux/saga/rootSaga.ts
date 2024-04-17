// rootSaga.ts
import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { seatPlanSaga } from "./seatPlanSaga";
import { getSeatsSaga } from "./seatSaga";
import { getReservedSeatsSaga } from "./seatReservedSaga";
import { reservationSaga } from "./reservationSaga";
import  {reservationsSaga, fetchReservationsDate, reservationsSagaDate}  from "./reservationsSaga"

import { getRecentCommentsSaga } from "./Dashboard_Saga/recentCommentsSaga";
// import { reservationIdsSaga } from "./datesReservedSaga";

import { getUserIdSaga, watchFetchUsers } from "./userSaga";
import { getStatusBoxesSaga } from "./Dashboard_Saga/statusBoxesSaga";
import { getSummarySaga } from "./Dashboard_Saga/summarySaga";
import { getUserProfileSaga } from "./Dashboard_Saga/userProfileSaga";
import { getTotalSeatSaga } from "./Dashboard_Saga/seatConditionSagas/Total_Seats";
import { getAssignedSeatSaga } from "./Dashboard_Saga/seatConditionSagas/Assigned_Seats";
import { getRepairSeatSaga } from "./Dashboard_Saga/seatConditionSagas/Repair_Seats";
import { getTotalAssociatesSaga } from "./Dashboard_Saga/statusBoxesSagas/Total_Associates";
import { getReservedAssociatesSaga } from "./Dashboard_Saga/statusBoxesSagas/Reserved_Associates";
import { getUnreservedAssociatesSaga } from "./Dashboard_Saga/statusBoxesSagas/Unreserved_Associates";
import { PrincipalWithReservationInfoSaga } from "./viewReservationSaga";


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
    PrincipalWithReservationInfoSaga(),
    getUserIdSaga(),

    getRecentCommentsSaga(),
    getStatusBoxesSaga(),
    getSummarySaga(),
    getUserProfileSaga(),

    getTotalSeatSaga(),
    getAssignedSeatSaga(),
    getRepairSeatSaga(),
    getTotalAssociatesSaga(),
    getReservedAssociatesSaga(),
    getUnreservedAssociatesSaga(),



  ]);
}
