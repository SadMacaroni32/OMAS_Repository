import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfileState",
  initialState: {
    userProfile: [],
    userProfileInfo: {},
    isLoading: false,
  },
  reducers: {
    getUserProfileFetch: (state) => {
      state.isLoading = true;
    },
    getUserProfileSuccess: (state, action) => {
      state.userProfile = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getUserProfileFetch,
  getUserProfileSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = userProfileSlice.actions;

export const userProfileReducer = userProfileSlice.reducer;
