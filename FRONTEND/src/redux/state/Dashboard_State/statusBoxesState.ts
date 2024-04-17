import { createSlice } from "@reduxjs/toolkit";

const statusBoxesSlice = createSlice({
  name: "statusBoxesState",
  initialState: {
    statusBoxes: [],
    statusBoxesInfo: {},
    isLoading: false,
  },
  reducers: {
    getStatusBoxesFetch: (state) => {
      state.isLoading = true;
    },
    getStatusBoxesSuccess: (state, action) => {
      state.statusBoxes = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getStatusBoxesFetch,
  getStatusBoxesSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = statusBoxesSlice.actions;

export const statusBoxesReducer = statusBoxesSlice.reducer;
