// import { createSlice } from "@reduxjs/toolkit";

// const reservationIdsSlice = createSlice({
//   name: "reservationIds",
//   initialState: {
//     reservationIds: [],
//     loading: false,
//     error: null
//   },
//   reducers: {
//     fetchReservationIdsRequest: (state) => {
//       state.loading = true;
//       state.error = null;
//     },
//     fetchReservationIdsSuccess: (state, action) => {
//       state.reservationIds = action.payload;
//       state.loading = false;
//       state.error = null;
//     },
//     fetchReservationIdsFailure: (state, action) => {
//       state.loading = false;
//       state.error = action.payload;
//     }
//   }
// });

// export const {
//   fetchReservationIdsRequest,
//   fetchReservationIdsSuccess,
//   fetchReservationIdsFailure
// } = reservationIdsSlice.actions;

// export default reservationIdsSlice.reducer;