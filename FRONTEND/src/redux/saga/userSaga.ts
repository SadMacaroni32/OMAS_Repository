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


// Fetch User by Id
function* fetchUserId(action: any): any {
  try {
    const { emp_id } = action.payload; 
    const users = yield call(() =>
      axios.get(`http://localhost:8000/OMAS_USERS?emp_id=${emp_id}`).then((res) => res.data)
    );
    yield put(getUsersSuccess(users));
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* getUserIdSaga() {
  yield takeEvery("users/getUsersFetch", fetchUserId);
}
