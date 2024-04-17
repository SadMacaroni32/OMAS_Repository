import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getStatusBoxesSuccess } from "../../state/Dashboard_State/statusBoxesState";

  
  // Fetch All
  function* fetchStatusBoxes(): any {
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
      yield put(getStatusBoxesSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getStatusBoxesSaga() {
    yield takeEvery("statusBoxesState/getStatusBoxesFetch", fetchStatusBoxes);
  }