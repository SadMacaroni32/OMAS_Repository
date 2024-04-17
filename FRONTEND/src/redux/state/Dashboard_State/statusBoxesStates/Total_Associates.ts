import { createSlice } from "@reduxjs/toolkit";

const totalAssociatesSlice = createSlice({
  name: "totalAssociatesState",
  initialState: {
    totalAssociates: [],
    totalAssociatesInfo: {},
    isLoading: false,
  },
  reducers: {
    getTotalAssociatesFetch: (state) => {
      state.isLoading = true;
    },
    getTotalAssociatesSuccess: (state, action) => {
      state.totalAssociates = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getTotalAssociatesFetch,
  getTotalAssociatesSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = totalAssociatesSlice.actions;

export const totalAssociatesReducer = totalAssociatesSlice.reducer;
