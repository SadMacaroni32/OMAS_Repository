import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { 
    getPrincipalReservationsWithInfoSuccess, } from "../state/viewReservationState";

function* fetchPrincipalWithReservationInfo(): any {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("token");
  
      // Check if the token exists
      if (token) {
        // Fetch seats data using the token in Authorization header
        const viewreservation = yield call(() =>
          axios
            .get(
              "http://localhost:8080/api/principal/reservation",
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then((res) => res.data)
        );
        yield put(getPrincipalReservationsWithInfoSuccess(viewreservation));
      } else {
        // Handle case where token is not found in localStorage
        console.error("Token not found in localStorage");
      }
    } catch (error) {
      // Handle error
      console.error("Error fetching reservations:", error);
    }
  }
  export function* PrincipalWithReservationInfoSaga() {
    yield takeEvery(
      "viewreservation/getPrincipalReservationsWithInfoFetch",
      fetchPrincipalWithReservationInfo
    );
}

  