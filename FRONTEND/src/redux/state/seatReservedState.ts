import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const seatReservedSlice = createSlice({
  name: "seatsReserved",
  initialState: {
    seatingReserved: [],
    seatInfo: {
      reservation_id: "",
      emp_id: "",
      note: "",
      fname: "",
      lname: "",
      seat_id: "",
      project_id: "",
      start_date: "",
      end_date: "",
      del_flag: "",
      created_at: "",
      updated_at: "",
      id: "",
    },
    isLoading: false,
  },
  reducers: {
    getSeatsReservedFetch: (state) => {
      state.isLoading = true;
    },
    getSeatsReservedSuccess: (state, action) => {
      state.seatingReserved = action.payload;
      state.isLoading = false;
    },
    
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const {
  getSeatsReservedFetch,
  getSeatsReservedSuccess,
  setIsLoading,

  // changePasswordSuccess,
} = seatReservedSlice.actions;

export const seatReservedReducer = seatReservedSlice.reducer;
