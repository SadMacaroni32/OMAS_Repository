import { createSlice } from "@reduxjs/toolkit";

const summarySlice = createSlice({
  name: "summaryState",
  initialState: {
    summary: [],
    summaryInfo: {},
    isLoading: false,
  },
  reducers: {
    getSummaryFetch: (state) => {
      state.isLoading = true;
    },
    getSummarySuccess: (state, action) => {
      state.summary = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getSummaryFetch,
  getSummarySuccess,
  setIsLoading,

  // changePasswordSuccess,
} = summarySlice.actions;

export const summaryReducer = summarySlice.reducer;
