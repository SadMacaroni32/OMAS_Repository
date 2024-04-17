import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getTotalAssociatesSuccess } from "../../../state/Dashboard_State/statusBoxesStates/Total_Associates";
  
  // Fetch All
  function* fetchTotalAssociates(): any {
    try {

      const token = localStorage.getItem("token");

      if (token) {
      const data = yield call(() =>
        axios.get("http://localhost:8080/api/associates/total", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
      );
      yield put(getTotalAssociatesSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getTotalAssociatesSaga() {
    yield takeEvery("totalAssociatesState/getTotalAssociatesFetch", fetchTotalAssociates);
  }


  