import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const seatSlice = createSlice({
  name: "seats",
  initialState: {
    seating: [],
    seatInfo: {
      seat_id: "",
      del_flag: "",
      dept_name: "",
      created_at: "",
      updated_at: "",
      id: "",
    },
    isLoading: false,
  },
  reducers: {
    getSeatsFetch: (state) => {
      state.isLoading = true;
    },
    getSeatsSuccess: (state, action) => {
      state.seating = action.payload;
      state.isLoading = false;
    },
    
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getSeatsFetch,
  getSeatsSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = seatSlice.actions;

export const seatReducer = seatSlice.reducer;
