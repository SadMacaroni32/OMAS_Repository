
import axios from "axios";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { 
    getPrincipalReservationsWithInfoSuccess, archiveReservationStart, archiveReservationSuccess, archiveReservationFailure} from "../state/viewReservationState";

function* fetchPrincipalWithReservationInfo(): any {
    try {
      // Get the token from localStorage
      const token = localStorage.getItem("token");
  
      // Check if the token exists
      if (token) {
        // Fetch reservations data using the token in Authorization header
        const reservations = yield call(() =>
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
        yield put(getPrincipalReservationsWithInfoSuccess(reservations));
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






function* archiveReservationSaga(action: any): any {
  try {
    const token = localStorage.getItem("token");
    const { reservation_id } = action.payload;

    yield call(() =>
      axios.put(
        `http://localhost:8080/api/reservations/archive/${reservation_id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    );

    yield put(archiveReservationSuccess(reservation_id));
  } catch (error) {
    console.error("Error archiving reservation:", error);
    yield put(archiveReservationFailure("Error archiving reservation"));
  }
}

export function* watchArchiveReservation() {
  yield takeLatest("viewreservation/archiveReservationStart", archiveReservationSaga);
}
// function* archiveReservationSaga(action:any): any {
//   try {
//     const token = localStorage.getItem("token");
//     // if (!token) {
//     //   throw new Error("Token not found in localStorage");
//     // }
//     const { reservation_id } = action.payload; // The action payload is an object, so destructure it
//     // Make API call to delete reservation using PUT method
//     const updateDelFlag = yield call(() =>
//       axios.put(
//         `http://localhost:8080/api/reservations/archive/${reservation_id}`,
//         {}, // Ensure an empty object is sent as data since PUT requests don't require a body
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       )
//     );
//     // yield put(archiveReservationStart(updateDelFlag))?
//     // Dispatch success action to update Redux state
//     yield put(archiveReservationSuccess(updateDelFlag));
//   } catch (error) {
//     console.error("Error archiving reservation:", error);
//     // Dispatch failure action with error message
//     yield put(archiveReservationFailure("Error archiving reservation"));
//   }
// }



// function* archiveReservationSaga(action:any) {
//   try {
//     const token = localStorage.getItem("token");
//     if (token) {
//       const {reservation_id} = action.payload;
//       // Make API call to update reservation status using PUT method
//       yield call(axios.put, `http://localhost:8080/api/reservations/archive/${reservation_id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       // Dispatch success action to update Redux state
//       yield put(archiveReservationSuccess(reservation_id));
//     } else {
//       console.error("Token not found in localStorage");
//     }
//   } catch (error) {
//     console.error("Error archiving reservation:", error);
//     // Dispatch failure action with error message
//     yield put(archiveReservationFailure("error"));
//   }
// }

// export function* watchArchiveReservation() {
//   yield takeLatest(archiveReservationStart.type, archiveReservationSaga);
// }
// export function* watchArchiveReservation() {
//   yield takeLatest("viewreservation/archiveReservationStart", archiveReservationSaga);
// }