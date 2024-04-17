import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUnreservedAssociatesSuccess } from "../../../state/Dashboard_State/statusBoxesStates/Unreserved_Associates";
  // Fetch All
  function* fetchUnreservedAssociates(): any {
    try {

      const token = localStorage.getItem("token");

      if (token) {
      const data = yield call(() =>
        axios
          .get("http://localhost:8080/api/associates/unassigned", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.data)
      );
      yield put(getUnreservedAssociatesSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getUnreservedAssociatesSaga() {
    yield takeEvery("unreservedAssociatesState/getUnreservedAssociatesFetch", fetchUnreservedAssociates);
  }


  