import { createSlice } from "@reduxjs/toolkit";

const unreservedAssociatesSlice = createSlice({
  name: "unreservedAssociatesState",
  initialState: {
    unreservedAssociates: [],
    unreservedAssociatesInfo: {},
    isLoading: false,
  },
  reducers: {
    getUnreservedAssociatesFetch: (state) => {
      state.isLoading = true;
    },
    getUnreservedAssociatesSuccess: (state, action) => {
      state.unreservedAssociates = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getUnreservedAssociatesFetch,
  getUnreservedAssociatesSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = unreservedAssociatesSlice.actions;

export const unreservedAssociatesReducer = unreservedAssociatesSlice.reducer;
