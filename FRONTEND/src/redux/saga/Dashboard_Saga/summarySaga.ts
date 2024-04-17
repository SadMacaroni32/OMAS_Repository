import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getSummarySuccess } from "../../state/Dashboard_State/summaryState";

  
  // Fetch All
  function* fetchSummary(): any {
    try {

      const token = localStorage.getItem("token");

      if (token) {
      const data = yield call(() =>
        axios.get("http://localhost:8080/api/notes/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => res.data)
      );
      yield put(getSummarySuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getSummarySaga() {
    yield takeEvery("summaryState/getSummaryFetch", fetchSummary);
  }