// reservationsSaga.js
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import {
  fetchReservationsSuccess,
  fetchReservationsFailure,
} from "./../state/reservationState";


function* fetchReservationsSaga(): any {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const reservations = yield call(() =>
        axios
          .get("http://localhost:8080/api/reservations/allReservationWithUserInfo",{
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.data)
      ); // Call your API function
      yield put(fetchReservationsSuccess(reservations));
    } else {
      // Handle case where token is not found in localStorage
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    yield put(fetchReservationsFailure(error));
  }
}

export function* reservationsSaga() {
  yield takeLatest("FETCH_RESERVATIONS_REQUEST", fetchReservationsSaga);
}

export function* fetchReservationsDate(): any {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const response = yield call(
        axios.get,
        "http://localhost:8080/api/reservations/allReservationWithUserInfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      yield put({ type: "SET_RESERVATIONS", payload: response.data });
    } else {
      // Handle case where token is not found in localStorage
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    console.error("Error fetching reservations:", error);
  }
}

export function* reservationsSagaDate() {
  yield takeLatest("FETCH_RESERVATIONS", fetchReservationsDate);
}
