import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getSeatsSuccess } from "../state/seatState";

// Fetch Seats
function* fetchSeats(): any {
  try {
    const token = localStorage.getItem("token");

    if (token) {
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
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching seats:", error);
  }
}

export function* getSeatsSaga() {
  yield takeEvery("seats/getSeatsFetch", fetchSeats);
}
