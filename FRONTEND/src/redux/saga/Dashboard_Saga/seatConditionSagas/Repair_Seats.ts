import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getRepairSeatsSuccess } from "../../../state/Dashboard_State/seatConditionStates/Repair_Seats";
 
    // Fetch Total Repair Seats
    function* fetchRepairSeatCondition(): any {
        try {
    
          const token = localStorage.getItem("token");
    
          if (token) {
          const data = yield call(() =>
            axios.get("http://localhost:8080/api/seats/repairing", {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => res.data)
          );
          yield put(getRepairSeatsSuccess(data));
        } else {
          console.error("Token not found in localStorage");
        }
        } catch (error) {
          // Handle error if needed
          console.error("Error fetching reserved seats:", error);
        }
      }
      
      export function* getRepairSeatSaga() {
        yield takeEvery("repairSeatsState/getRepairSeatsFetch", fetchRepairSeatCondition);
      }