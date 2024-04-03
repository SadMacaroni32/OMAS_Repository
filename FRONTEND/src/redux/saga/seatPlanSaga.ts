// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getSeatsSuccess } from "../state/seatPlanState";


// Fetch User List
function* fetchSeats(): any {
  try {
    const seatPlanValue = yield call(() =>
      axios.get("http://localhost:8000/OMAS_SEATS").then((res) => res.data)
    );
    yield put(getSeatsSuccess(seatPlanValue));
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* seatPlanSaga() {
  yield takeEvery("seatPlan/getSeatsFetch", fetchSeats);
}
