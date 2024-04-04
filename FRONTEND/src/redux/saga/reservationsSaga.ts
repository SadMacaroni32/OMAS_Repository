// reservationsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchReservationsSuccess, fetchReservationsFailure } from './../state/reservationState';

function* fetchReservationsSaga(): any {
  try {
    const reservations = yield call(() => 
    axios.get("http://localhost:8000/OMAS_SEATS_RESERVATIONS")
    .then((res) => res.data)
    ); // Call your API function
    yield put(fetchReservationsSuccess(reservations));
  } catch (error) {
    yield put(fetchReservationsFailure(error));
  }
}

function* reservationsSaga() {
  yield takeLatest('FETCH_RESERVATIONS_REQUEST', fetchReservationsSaga);
}

export default reservationsSaga;
