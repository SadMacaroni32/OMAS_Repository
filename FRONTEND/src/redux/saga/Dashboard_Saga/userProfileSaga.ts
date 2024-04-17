import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getUserProfileSuccess } from "../../state/Dashboard_State/userProfileState";

  
  // Fetch All
  function* fetchUserProfile(): any {
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
      yield put(getUserProfileSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getUserProfileSaga() {
    yield takeEvery("userProfileState/getUserProfileFetch", fetchUserProfile);
  }