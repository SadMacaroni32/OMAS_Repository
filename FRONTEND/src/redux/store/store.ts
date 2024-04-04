
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import { InputReducer, userReducer } from "../state/userState";
import { seatPlanReducer } from "../state/seatPlanState";
import { reservationReducer } from "../state/reservationState";



const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    //user state
    userReducer: userReducer,
    InputReducer: InputReducer,

    //seatPlan state
    seatPlanReducer: seatPlanReducer,

    //reservation state
    reservationReducer: reservationReducer,
    // add more reducers here
  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
