import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Reservation {
  reservation_id: number;
  // Add other properties if available
}

interface ViewState {
  viewReservationValue: Reservation[];
  isLoading: boolean;
  isdeleteSuccess: boolean;
  error: string;
}

const initialState: ViewState = {
  viewReservationValue: [],
  isLoading: false,
  isdeleteSuccess: false,
  error: "mayerro",
};

const viewReservationSlice = createSlice({
  name: "viewreservation",
  initialState,
  reducers: {
    getPrincipalReservationsWithInfoFetch(state) {
      state.isLoading = true;
    },
    getPrincipalReservationsWithInfoSuccess(
      state,
      action: PayloadAction<Reservation[]>
    ) {
      state.viewReservationValue = action.payload;
      state.isLoading = false;
    },
    archiveReservationStart(state) {
      state.isLoading = true; // Indicate that the deletion process has started
      state.error = ""; // Clear any previous error messages
    },
    archiveReservationSuccess(state, action: PayloadAction<number>) {
      console.log("Previous state:", state.viewReservationValue);
      state.viewReservationValue = state.viewReservationValue.filter(
        (reservation) => reservation.reservation_id !== action.payload
      );
      state.isdeleteSuccess = false;

      console.log("New state:", state.viewReservationValue);
    },
    archiveReservationFailure(state, action: PayloadAction<string>) {
      state.isdeleteSuccess = false;
      state.error = action.payload;
    },
  },
});

export const {
  getPrincipalReservationsWithInfoFetch,
  getPrincipalReservationsWithInfoSuccess,
  archiveReservationStart,
  archiveReservationSuccess,
  archiveReservationFailure,
} = viewReservationSlice.actions;

export const viewReservationReducer = viewReservationSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const viewReservationSlice = createSlice({
//     name: "viewreservation",
//     initialState: {
//       viewReservationValue: [],
//     //   reservationWithUserInfo: [],
//       isLoading: false,
//     },
//     reducers: {
//     //   getPrincipalReservationsFetch: (state) => {
//     //     state.isLoading = true;
//     //   },
//     //   getPrincipalReservationsSuccess: (state, action) => {
//     //     state.viewreservationValue = action.payload;
//     //     state.isLoading = false;
//     //   },
//       getPrincipalReservationsWithInfoFetch: (state) => {
//         state.isLoading = true;
//       },
//       getPrincipalReservationsWithInfoSuccess: (state, action) => {
//         state.viewReservationValue = action.payload;
//         state.isLoading = false;
//       },

//     },
//   });

//   export const {
//     // getPrincipalReservationsFetch,
//     // getPrincipalReservationsSuccess,
//     getPrincipalReservationsWithInfoFetch,
//     getPrincipalReservationsWithInfoSuccess,
//   } = viewReservationSlice.actions;
//   export const viewReservationReducer = viewReservationSlice.reducer;
