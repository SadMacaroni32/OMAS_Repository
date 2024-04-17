import { createSlice } from "@reduxjs/toolkit";

const reservedAssociatesSlice = createSlice({
  name: "reservedAssociatesState",
  initialState: {
    reservedAssociates: [],
    reservedAssociatesInfo: {},
    isLoading: false,
  },
  reducers: {
    getReservedAssociatesFetch: (state) => {
      state.isLoading = true;
    },
    getReservedAssociatesSuccess: (state, action) => {
      state.reservedAssociates = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getReservedAssociatesFetch,
  getReservedAssociatesSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = reservedAssociatesSlice.actions;

export const reservedAssociatesReducer = reservedAssociatesSlice.reducer;
