import { createSlice } from "@reduxjs/toolkit";

const repairSeatsSlice = createSlice({
  name: "repairSeatsState",
  initialState: {
    repairSeats: [],
    repairSeatsInfo: {},
    isLoading: false,
  },
  reducers: {
    getRepairSeatsFetch: (state) => {
      state.isLoading = true;
    },
    getRepairSeatsSuccess: (state, action) => {
      state.repairSeats = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getRepairSeatsFetch,
  getRepairSeatsSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = repairSeatsSlice.actions;

export const repairSeatsReducer = repairSeatsSlice.reducer;
