// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getReservationsSuccess } from "../state/reservationState";

// Fetch User List
function* fetchResevations(): any {
  try {
    const reservationValue = yield call(() =>
      axios
        .get("http://localhost:8000/OMAS_SEATS_RESERVATIONS")
        .then((res) => res.data)
    );
    yield put(getReservationsSuccess(reservationValue));
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* reservationSaga() {
  yield takeEvery("reservation/getReservationsFetch", fetchResevations);
}
