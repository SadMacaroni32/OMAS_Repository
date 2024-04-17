import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getAssignedSeatsSuccess } from "../../../state/Dashboard_State/seatConditionStates/Assigned_Seats";

// Fetch Total Assigned Seats
function* fetchAssignedSeatCondition(): any {
    try {

      const token = localStorage.getItem("token");

      if (token) {
      const data = yield call(() =>
        axios.get("http://localhost:8080/api/reservations/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
      );
      yield put(getAssignedSeatsSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getAssignedSeatSaga() {
    yield takeEvery("assignedSeatsState/getAssignedSeatsFetch", fetchAssignedSeatCondition);
  }
