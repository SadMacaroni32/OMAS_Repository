// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getReservationsSuccess, getReservationsWithUserInfoSuccess } from "../state/reservationState";

// Fetch all reservations
function* fetchReservations(): any {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (token) {
      // Fetch seats data using the token in Authorization header
      const reservationValue = yield call(() =>
        axios
          .get("http://localhost:8080/api/reservations/all", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.data)
      );
      yield put(getReservationsSuccess(reservationValue));
    } else {
      // Handle case where token is not found in localStorage
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching reservations:", error);
  }
}

export function* reservationSaga() {
  yield takeEvery("reservation/getReservationsFetch", fetchReservations);
}


//get all reservations with user info

function* fetchReservationsWithUserInfo(): any {
  try {
    // Get the token from localStorage
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (token) {
      // Fetch seats data using the token in Authorization header
      const reservationWithUserInfo = yield call(() =>
        axios
          .get(
            "http://localhost:8080/api/reservations/allReservationWithUserInfo",
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((res) => res.data)
      );
      yield put(getReservationsWithUserInfoSuccess(reservationWithUserInfo));
    } else {
      // Handle case where token is not found in localStorage
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    // Handle error
    console.error("Error fetching reservations:", error);
  }
}

export function* reservationWithUserInfoSaga() {
  yield takeEvery(
    "reservation/getReservationsWithUserInfoFetch",
    fetchReservationsWithUserInfo
  );


  
}
