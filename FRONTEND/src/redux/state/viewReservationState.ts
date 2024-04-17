import { createSlice } from "@reduxjs/toolkit";

const viewReservationSlice = createSlice({
    name: "viewreservation",
    initialState: {
      viewReservationValue: [],
    //   reservationWithUserInfo: [],
      isLoading: false,
    },
    reducers: {
    //   getPrincipalReservationsFetch: (state) => {
    //     state.isLoading = true;
    //   },
    //   getPrincipalReservationsSuccess: (state, action) => {
    //     state.viewreservationValue = action.payload;
    //     state.isLoading = false;
    //   },
      getPrincipalReservationsWithInfoFetch: (state) => {
        state.isLoading = true;
      },
      getPrincipalReservationsWithInfoSuccess: (state, action) => {
        state.viewReservationValue = action.payload;
        state.isLoading = false;
      },
      
    },
  });
  
  export const {
    // getPrincipalReservationsFetch,
    // getPrincipalReservationsSuccess,
    getPrincipalReservationsWithInfoFetch,
    getPrincipalReservationsWithInfoSuccess,
  } = viewReservationSlice.actions;
  export const viewReservationReducer = viewReservationSlice.reducer;
  

  