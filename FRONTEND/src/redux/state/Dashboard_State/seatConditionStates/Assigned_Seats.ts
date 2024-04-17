import { createSlice } from "@reduxjs/toolkit";

const assignedSeatsSlice = createSlice({
  name: "assignedSeatsState",
  initialState: {
    assignedSeats: [],
    assignedSeatsInfo: {},
    isLoading: false,
  },
  reducers: {
    getAssignedSeatsFetch: (state) => {
      state.isLoading = true;
    },
    getAssignedSeatsSuccess: (state, action) => {
      state.assignedSeats = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getAssignedSeatsFetch,
  getAssignedSeatsSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = assignedSeatsSlice.actions;

export const assignedSeatsReducer = assignedSeatsSlice.reducer;
