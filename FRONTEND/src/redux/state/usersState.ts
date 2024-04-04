
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUsersFetch(state) {
      state.isLoading = true;
    },
    getUsersSuccess(state, action) {
      state.users = action.payload;
      state.isLoading = false;
      state.error = "";
    },
    getUsersFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { getUsersFetch, getUsersSuccess, getUsersFailure } = userSlice.actions;

export default userSlice.reducer;
