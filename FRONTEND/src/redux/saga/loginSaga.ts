// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUsersSuccess } from "../state/userState";
import { getSeatsSuccess } from "../state/seatState";

// Fetch User List
function* fetchUser(): any {
  try {
    const token = localStorage.getItem("token");

    if (token) {
      const users = yield call(() =>
        axios
          .get("http://localhost:8080/api/principal/info", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => res.data)
      );
      yield put(getUsersSuccess(users));
    } else {
      console.error("Token is not found in localStorage");
    }
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* loginSaga() {
  yield takeEvery("users/getUsersFetch", fetchUser);
}
