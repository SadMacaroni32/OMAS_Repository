
import { createSlice } from "@reduxjs/toolkit";

const dashUserSlice = createSlice({
  name: "users",
  initialState: {
    dashUser: [],
    dashUserInfo: {
      emp_id: "",
      fname: "",
      lname: "",
      position_name: "",
    },
    isLoading:false,
    error: "",
  },
  reducers: {
    getDashUsersFetch(state) {
      state.isLoading = true;
    },
    getDashUsersSuccess(state, action) {
      state.dashUser = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getDashUsersFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getDashUsersFetch, getDashUsersSuccess, getDashUsersFailure } = dashUserSlice.actions;

export const dashUserReducer = dashUserSlice.reducer;
