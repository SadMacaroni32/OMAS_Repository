// userSaga.js

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUsersSuccess, setError } from "../state/userState";

// Fetch Users
function* fetchUsers(): any {
  try {
    const token = localStorage.getItem("token");

    if (token) {
    const users = yield call(() =>
      axios.get("http://localhost:8080/api/principal/info", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
    );
    yield put(getUsersSuccess(users));
  } else {
    console.error("Token not found in localStorage")
  }
  } catch (error) {
    yield put(setError("Failed to fetch users."));
  }
}

// Watcher Saga: Watches for getUsersFetch action and triggers fetchUsers saga
export function* watchFetchUsers() {
  yield takeEvery("users/getUsersFetch", fetchUsers);
}


// Fetch User by Id
function* fetchUserId(action: any): any {
  try {
    const token = localStorage.getItem("token");

    if (token) {
    const users = yield call(() =>
      axios.get(`http://localhost:8080/api/principal/info`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data)
    );
    yield put(getUsersSuccess(users));
  } else {
    console.error("Token not found in localStorage");
  }
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* getUserIdSaga() {
  yield takeEvery("users/getUsersFetch", fetchUserId);
}
