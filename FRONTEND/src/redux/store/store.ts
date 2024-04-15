import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../saga/rootSaga";
import { InputReducer, userReducer } from "../state/userState";
import { seatPlanReducer } from "../state/seatPlanState";
import { reservationReducer, reservationsReducer, reservationsDateReducer } from "../state/reservationState";
import { seatReducer } from "../state/seatState";
import { seatReservedReducer } from "../state/seatReservedState";

import  usersReducer  from "../state/usersState";
import { reservationIdsSlice } from "../state/datesReservedState";




const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {

    

    //user state
    userReducer: userReducer,
    InputReducer: InputReducer,

    //seatPlan state
    seatPlanReducer: seatPlanReducer,

    //seat state
    seatReducer: seatReducer,
    seatReservedReducer: seatReservedReducer,


    //reservation state
    reservationReducer: reservationReducer,
    reservationsReducer: reservationsReducer,
    reservationsDateReducer: reservationsDateReducer,

    //reservations state
    // reservationIdsReducer: reservationIdsSlice.reducer,

    // add more reducers here
    

  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
