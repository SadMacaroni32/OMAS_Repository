import {  createSlice } from "@reduxjs/toolkit";

//seatPlan slice
const seatPlanSlice = createSlice({
  name: "seatPlan",
  initialState: {
    seatPlanValue: [],
    isLoading: false,
  },
  reducers: {
    getSeatsFetch: (state) => {
      state.isLoading = true;
    },
    getSeatsSuccess: (state, action) => {
      state.seatPlanValue = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getSeatsFetch, getSeatsSuccess } = seatPlanSlice.actions;
export const seatPlanReducer = seatPlanSlice.reducer