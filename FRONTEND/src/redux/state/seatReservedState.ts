import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const seatReservedSlice = createSlice({
  name: "seatsReserved",
  initialState: {
    seatingReserved: [],
    seatInfo: {},
    isLoading: false,
  },
  reducers: {
    getSeatsReservedFetch: (state) => {
      state.isLoading = true;
    },
    getSeatsReservedSuccess: (state, action) => {
      state.seatingReserved = action.payload;
      state.isLoading = false;
    },
    
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getSeatsReservedFetch,
  getSeatsReservedSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = seatReservedSlice.actions;

export const seatReservedReducer = seatReservedSlice.reducer;
