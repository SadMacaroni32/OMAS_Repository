import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getSeatsReservedSuccess } from "../state/seatReservedState";

  
  // Fetch Reserved Seats
  function* fetchReservedSeats(): any {
    try {
      const seats = yield call(() =>
        axios.get("http://localhost:8000/OMAS_SEATS_RESERVATIONS").then((res) => res.data)
      );
      yield put(getSeatsReservedSuccess(seats));
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getReservedSeatsSaga() {
    yield takeEvery("seatsReserved/getSeatsReservedFetch", fetchReservedSeats);
  }