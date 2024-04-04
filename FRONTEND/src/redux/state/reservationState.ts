import { createSlice } from "@reduxjs/toolkit";

//seatPlan slice
const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservationValue: [],
    isLoading: false,
  },
  reducers: {
    getReservationsFetch: (state) => {
      state.isLoading = true;
    },
    getReservationsSuccess: (state, action) => {
      state.reservationValue = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getReservationsFetch, getReservationsSuccess } =
  reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;
