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
import { addReservationsReducer } from "../state/addReservationReducer";
// import  usersReducer  from "../state/usersState";
// import { reservationIdsSlice } from "../state/datesReservedState";

import { recentCommentsReducer } from "../state/Dashboard_State/recentCommentsState";
import { statusBoxesReducer } from "../state/Dashboard_State/statusBoxesState";
import { summaryReducer } from "../state/Dashboard_State/summaryState";
import { userProfileReducer } from "../state/Dashboard_State/userProfileState";
import { totalSeatsReducer } from "../state/Dashboard_State/seatConditionStates/Total_Seats";
import { assignedSeatsReducer } from "../state/Dashboard_State/seatConditionStates/Assigned_Seats";
import { repairSeatsReducer } from "../state/Dashboard_State/seatConditionStates/Repair_Seats";
import { totalAssociatesReducer } from "../state/Dashboard_State/statusBoxesStates/Total_Associates";
import { reservedAssociatesReducer } from "../state/Dashboard_State/statusBoxesStates/Reserved_Associates";
import { unreservedAssociatesReducer } from "../state/Dashboard_State/statusBoxesStates/Unreserved_Associates";
import { viewReservationReducer } from "../state/viewReservationState";

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
    addReservationsReducer:addReservationsReducer,
    //reservations state
    // reservationIdsReducer: reservationIdsSlice.reducer,

    //View Appointment
    viewReservationReducer:viewReservationReducer,

    //Dashboard States
    recentCommentsReducer: recentCommentsReducer,
    statusBoxesReducer: statusBoxesReducer,
    summaryReducer: summaryReducer,
    userProfileReducer: userProfileReducer,
    totalSeatsReducer: totalSeatsReducer,
    assignedSeatsReducer: assignedSeatsReducer,
    repairSeatsReducer: repairSeatsReducer,
    totalAssociatesReducer: totalAssociatesReducer,
    reservedAssociatesReducer: reservedAssociatesReducer,
    unreservedAssociatesReducer: unreservedAssociatesReducer,


    // add more reducers here
    

  },
  middleware: [saga],
});

saga.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export default store;
