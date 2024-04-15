import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const seatReservedSlice = createSlice({
  name: "seatsReserved",
  initialState: {
    seatingReserved: [],
    seatInfo: {
      // reservation_id: "",
      // emp_id: "",
      // note: "",
      // reg_id: "",
      // update_id: "",
      // seat_id: "",
      // proj_id: "",
      // del_flag: "",
      // start_date: "",
      // end_date: "",
      // reg_date: "",
      // update_date: "",

      note: "",
      noted_at: "",
      seat_id: "",
      last_name: "",
      middle_name: "",
      first_name: "",
      emp_id: "",
      username: "",
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
