import { createSlice } from "@reduxjs/toolkit";

//seatPlan slice
const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservationValue: [],
    reservationWithUserInfo: [],
    isLoading: false,
    updateStatusValue: null,

    updateSeatStatusInput: {
      start_date: "",
      end_date: "",
    },
  },
  reducers: {
    getReservationsFetch: (state) => {
      state.isLoading = true;
    },
    getReservationsSuccess: (state, action) => {
      state.reservationValue = action.payload;
      state.isLoading = false;
    },
    getReservationsWithUserInfoFetch: (state) => {
      state.isLoading = true;
    },
    getReservationsWithUserInfoSuccess: (state, action) => {
      state.reservationWithUserInfo = action.payload;
      state.isLoading = false;
    },
    updateReservationStatusFetch: (state) => {
      state.isLoading = true;
    },
    updateReservationStatusSuccess: (state, action) => {
      state.updateStatusValue = action.payload;
      state.isLoading = false;
    },
    updateReservationStatusFailure: (state) => {
      state.isLoading = false;
      // Handle failure if needed
    },
  },
});

export const {
  getReservationsFetch,
  getReservationsSuccess,
  getReservationsWithUserInfoFetch,
  getReservationsWithUserInfoSuccess,
  updateReservationStatusSuccess,
 updateReservationStatusFetch,
  updateReservationStatusFailure,
} = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;

const initialState = {
  reservations: [],
  loading: false,
  error: null,
};

//Mike
export const reservationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "FETCH_RESERVATIONS_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_RESERVATIONS_SUCCESS":
      return {
        ...state,
        loading: false,
        reservations: action.payload,
        error: null,
      };
    case "FETCH_RESERVATIONS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// reservationsActions

export const fetchReservationsRequest = () => ({
  type: "FETCH_RESERVATIONS_REQUEST",
});

export const fetchReservationsSuccess = (reservations: any) => ({
  type: "FETCH_RESERVATIONS_SUCCESS",
  payload: reservations,
});

export const fetchReservationsFailure = (error: any) => ({
  type: "FETCH_RESERVATIONS_FAILURE",
  payload: error,
});

export const reservationsDateReducer = (state = [], action: any) => {
  switch (action.type) {
    case "SET_RESERVATIONS":
      return action.payload;
    default:
      return state;
  }
};
