// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getReservationsSuccess, getReservationsWithUserInfoSuccess, updateReservationStatusFailure, updateReservationStatusSuccess } from "../state/reservationState";

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

// Update reservation status saga
function* updateReservationStatus(action: any): any {
  try {
    const { reservationId, status } = action.payload;
    const token = localStorage.getItem("token");

    if (token) {
      // Make PUT request to update reservation status
      const updatedStatus = yield call(() =>
        axios.put(
          `http://localhost:8080/api/reservations/${reservationId}/${status}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
      );
      
      // Dispatch success action with updated status data
      yield put(updateReservationStatusSuccess(updatedStatus.data));
    } else {
      console.error("Token not found in localStorage");
    }
  } catch (error) {
    console.error("Error updating reservation status:", error);
    // Dispatch failure action if needed
    yield put(updateReservationStatusFailure());
  }
}

// Watcher saga
export function* reservationSaga() {
  yield takeEvery("reservation/getReservationsFetch", fetchReservations);
  yield takeEvery(
    "reservation/getReservationsWithUserInfoFetch",
    fetchReservationsWithUserInfo
  );
  yield takeEvery("reservation/updateReservationStatusFetch", updateReservationStatus);
}
