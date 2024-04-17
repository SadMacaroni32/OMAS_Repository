import { createSlice } from "@reduxjs/toolkit";

const recentCommentsSlice = createSlice({
  name: "recentCommentsState",
  initialState: {
    recentComments: [],
    recentCommentsInfo: {},
    isLoading: false,
  },
  reducers: {
    getRecentCommentsFetch: (state) => {
      state.isLoading = true;
    },
    getRecentCommentsSuccess: (state, action) => {
      state.recentComments = action.payload;
      state.isLoading = false;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getRecentCommentsFetch,
  getRecentCommentsSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = recentCommentsSlice.actions;

export const recentCommentsReducer = recentCommentsSlice.reducer;
