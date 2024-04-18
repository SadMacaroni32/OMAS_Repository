// sagas.js
import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_RESERVATIONS, ADD_RESERVATION } from './../state/addReservationActions';
import axios from 'axios';

function* fetchReservationsSaga(action): any {
    try {
        const token = localStorage.getItem("token");
    
        if (token) {
          const response = yield call(
            axios.post,
            "http://localhost:8080/api/reservations/{seat_id}/add", {
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

function* addReservationSaga(action): any {
    try {
        const { seatId, startDate, startTime, endDate, endTime, note } = action.payload;
        const token = localStorage.getItem("token");
    
        if (token) {
          const response = yield call(
            axios.post,
            `http://localhost:8080/api/reservations/${seatId}/add`,
            {
              start_date: startDate + 'T' + startTime,
              end_date: endDate + 'T' + endTime,
              note,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json', // Ensure JSON content type
              },
            }
          );
          yield put({ type: "SET_RESERVATIONS", payload: response.data });
        } else {
          // Handle case where token is not found in localStorage
          console.error("Token not found in localStorage");
        }
      } catch (error) {
        console.error("Error adding reservation:", error);
      }
}

export function* addReservationsSaga() {
  yield takeLatest(FETCH_RESERVATIONS, fetchReservationsSaga);
  yield takeLatest(ADD_RESERVATION, addReservationSaga);
}
