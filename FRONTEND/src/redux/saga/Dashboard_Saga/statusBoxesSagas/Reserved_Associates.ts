import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getReservedAssociatesSuccess } from "../../../state/Dashboard_State/statusBoxesStates/Reserved_Associates";
  
  // Fetch All
  function* fetchReservedAssociates(): any {
    try {

      const token = localStorage.getItem("token");

      if (token) {
      const data = yield call(() =>
        axios.get("http://localhost:8080/api/associates/assigned", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
      );
      yield put(getReservedAssociatesSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getReservedAssociatesSaga() {
    yield takeEvery("reservedAssociatesState/getReservedAssociatesFetch", fetchReservedAssociates);
  }


  