// rootSaga.ts
import { all } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { seatPlanSaga } from "./seatPlanSaga";

export default function* rootSaga() {
  yield all([
   loginSaga(),
   seatPlanSaga()
  ]);
}
