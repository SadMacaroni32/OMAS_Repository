import { createSlice } from "@reduxjs/toolkit";

const totalSeatsSlice = createSlice({
  name: "totalSeatState",
  initialState: {
    totalSeats: [],
    totalSeatsInfo: {},
    isLoading: false,
  },
  reducers: {
    getTotalSeatsFetch: (state) => {
      state.isLoading = true;
    },
    getTotalSeatsSuccess: (state, action) => {
      state.totalSeats = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getTotalSeatsFetch,
  getTotalSeatsSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = totalSeatsSlice.actions;

export const totalSeatsReducer = totalSeatsSlice.reducer;
