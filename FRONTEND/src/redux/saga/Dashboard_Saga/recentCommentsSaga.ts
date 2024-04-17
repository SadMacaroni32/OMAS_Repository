import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getRecentCommentsSuccess } from "../../state/Dashboard_State/recentCommentsState";

  
  // Fetch All
  function* fetchRecentComments(): any {
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
      yield put(getRecentCommentsSuccess(data));
    } else {
      console.error("Token not found in localStorage");
    }
    } catch (error) {
      // Handle error if needed
      console.error("Error fetching reserved seats:", error);
    }
  }
  
  export function* getRecentCommentsSaga() {
    yield takeEvery("recentCommentsState/getRecentCommentsFetch", fetchRecentComments);
  }


  