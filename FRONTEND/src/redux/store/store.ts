
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import { InputReducer, userReducer } from "../state/userState";
import { seatPlanReducer } from "../state/seatPlanState";



const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    //user state
    userReducer: userReducer,
    InputReducer: InputReducer,

    //seatPlan state
    seatPlanReducer: seatPlanReducer,
    // add more reducers here
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
