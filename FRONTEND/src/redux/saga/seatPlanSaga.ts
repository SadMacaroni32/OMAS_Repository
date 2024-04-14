// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getSeatsSuccess } from "../state/seatPlanState";

// Fetch Seats
function* fetchSeats(): any {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (token) {
      // Fetch seats data using the token in Authorization header
      const seats = yield call(() =>
        axios
          .get("http://localhost:8080/api/seats/all", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.data)
      );
      yield put(getSeatsSuccess(seats));
    } else {
      // Handle case where token is not found in localStorage
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching seats:", error);
  }
}

export function* seatPlanSaga() {
  yield takeEvery("seatPlan/getSeatsFetch", fetchSeats);
}
