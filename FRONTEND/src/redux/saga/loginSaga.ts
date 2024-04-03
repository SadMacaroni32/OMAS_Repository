// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUsersSuccess } from "../state/userState";

// Fetch User List
function* fetchUser(): any {
  try {
    const users = yield call(() =>
      axios.get("http://localhost:8000/OMAS_USERS").then((res) => res.data)
    );
    yield put(getUsersSuccess(users));
  } catch (error) {
    // Handle error if needed
    console.error("Error fetching user list:", error);
  }
}

export function* loginSaga() {
  yield takeEvery("users/getUsersFetch", fetchUser);
}
