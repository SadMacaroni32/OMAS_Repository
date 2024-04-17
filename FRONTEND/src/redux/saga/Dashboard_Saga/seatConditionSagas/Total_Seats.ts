import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getTotalSeatsSuccess } from "../../../state/Dashboard_State/seatConditionStates/Total_Seats";
  
  // Fetch Total Seats
  function* fetchTotalSeats(): any {
    try {

      const token = localStorage.getItem("token");

      if (token) {
      const data = yield call(() =>
        axios.get("http://localhost:8080/api/seats/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
      );
      yield put(getTotalSeatsSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getTotalSeatSaga() {
    yield takeEvery("totalSeatState/getTotalSeatsFetch", fetchTotalSeats);
  }