// userListSaga.ts
import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { getUsersSuccess} from "../state/userState";
import { getSeatsSuccess } from "../state/seatState";

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

export function* getUserId() {
  yield takeEvery("users/getUsersFetch", fetchUserId);
}

