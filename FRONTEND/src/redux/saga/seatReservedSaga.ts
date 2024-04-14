import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getSeatsReservedSuccess } from "../state/seatReservedState";

  
  // Fetch Reserved Seats
  function* fetchReservedSeats(): any {
    try {

      const token = localStorage.getItem("token");

      if (token) {
      const seats = yield call(() =>
        axios.get("http://localhost:8080/api/reservations/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
      );
      yield put(getSeatsReservedSuccess(seats));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getReservedSeatsSaga() {
    yield takeEvery("seatsReserved/getSeatsReservedFetch", fetchReservedSeats);
  }