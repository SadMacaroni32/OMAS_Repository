// userSaga.js

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUsersSuccess, setError } from "../state/userState";

// Fetch Users
function* fetchUsers(): any {
  try {
    const users = yield call(() =>
      axios.get("http://localhost:8000/OMAS_USERS").then((res) => res.data)
    );
    yield put(getUsersSuccess(users));
  } catch (error) {
    yield put(setError("Failed to fetch users."));
  }
}

// Watcher Saga: Watches for getUsersFetch action and triggers fetchUsers saga
export function* watchFetchUsers() {
  yield takeEvery("users/getUsersFetch", fetchUsers);
}
