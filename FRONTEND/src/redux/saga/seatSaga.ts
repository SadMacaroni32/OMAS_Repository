import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getSeatsSuccess } from "../state/seatState";

// Fetch Seats
function* fetchSeats(): any {
    try {
      const seats = yield call(() =>
        axios.get("http://localhost:8000/OMAS_SEATS").then((res) => res.data)
      );
      yield put(getSeatsSuccess(seats));
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching seats:", error);
    }
  }
  
  export function* getSeatsSaga() {
    yield takeEvery("seats/getSeatsFetch", fetchSeats);
  }