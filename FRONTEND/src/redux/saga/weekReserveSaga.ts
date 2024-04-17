// sagas.js
import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_RESERVATION_START,
  fetchReservationSuccess,
  fetchReservationFailure,
} from "./../state/weekReserveState";
import axios from "axios";

function* fetchReservationSaga(action: any): any {
  try {
    
    const token = localStorage.getItem("token");
    if (token) {
        const { startDate, seatId } = action.payload;
      const response = yield call(() =>
        axios
          .get(
            `http://localhost:8080/api/timetable/reservation/start?startDate=${startDate}&seatId=${seatId}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => res.data)
      ); // Call your API function
      yield put(fetchReservationSuccess(response.data));
    } else {
      // Handle case where token is not found in localStorage
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    yield put(fetchReservationFailure(error));
  }
}

export function* weekReserveSaga() {
  yield takeLatest(FETCH_RESERVATION_START, fetchReservationSaga);
}
