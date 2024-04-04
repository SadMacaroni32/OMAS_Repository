import { createSlice } from "@reduxjs/toolkit";

//seatPlan slice
const reservationSlice = createSlice({
  name: "reservation",
  initialState: {
    reservationValue: [],
    isLoading: false,
  },
  reducers: {
    getReservationsFetch: (state) => {
      state.isLoading = true;
    },
    getReservationsSuccess: (state, action) => {
      state.reservationValue = action.payload;
      state.isLoading = false;
    },
  },
});

export const { getReservationsFetch, getReservationsSuccess } =
  reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;


const initialState = {
  reservations: [],
  loading: false,
  error: null
};


//Mike
export const reservationsReducer = (state = initialState, action : any) => {
  switch (action.type) {
    case 'FETCH_RESERVATIONS_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
    case 'FETCH_RESERVATIONS_SUCCESS':
      return {
        ...state,
        loading: false,
        reservations: action.payload,
        error: null
      };
    case 'FETCH_RESERVATIONS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};




// reservationsActions

export const fetchReservationsRequest = () => ({
  type: 'FETCH_RESERVATIONS_REQUEST'
});

export const fetchReservationsSuccess = (reservations: any) => ({
  type: 'FETCH_RESERVATIONS_SUCCESS',
  payload: reservations
});

export const fetchReservationsFailure = (error: any) => ({
  type: 'FETCH_RESERVATIONS_FAILURE',
  payload: error
});

