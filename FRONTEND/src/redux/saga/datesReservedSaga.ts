// import { call, put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';
// import {
//   fetchReservationIdsSuccess,
//   fetchReservationIdsFailure
// } from './../state/datesReservedState';

// //Get reservations by seat_id and date
// function* fetchReservationIdsSaga(action :any): any {
//     try {
//       const { seatId, date }: any = action.payload;
//       const reservations = yield call(() =>
//         axios.get(`http://localhost:8000/reservations?seat_id=${seatId}&date=${date}`)
//           .then((res) => res.data.map(reservation => reservation.reservation_id))
//       );
//       yield put(fetchReservationIdsSuccess(reservations));
//     } catch (error) {
//       yield put(fetchReservationIdsFailure(error));
//     }
//   }
  
//   export function* reservationIdsSaga() {
//     yield takeLatest('FETCH_RESERVATION_IDS_REQUEST', fetchReservationIdsSaga);
//   }