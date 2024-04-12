// reservationsSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { fetchReservationsSuccess, fetchReservationsFailure } from './../state/reservationState';
import { fetchReservationIdsFailure, fetchReservationIdsSuccess } from '../state/datesReservedState';

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

export function* reservationsSaga() {
  yield takeLatest('FETCH_RESERVATIONS_REQUEST', fetchReservationsSaga);
}



export function* fetchReservationsDate(): any {
  try {
    const response = yield call(axios.get, 'http://localhost:8000/OMAS_SEATS_RESERVATIONS');
    yield put({ type: 'SET_RESERVATIONS', payload: response.data });
  } catch (error) {
    console.error('Error fetching reservations:', error);
  }
}

export function* reservationsSagaDate() {
  yield takeLatest('FETCH_RESERVATIONS', fetchReservationsDate);
}



