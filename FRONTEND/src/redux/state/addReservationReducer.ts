// reducer.js
import { FETCH_RESERVATIONS, ADD_RESERVATION } from './addReservationActions';

const initialState = {};

export const addReservationsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_RESERVATIONS:
      // Handle fetching reservations for a specific seat_id
      return state;
    case ADD_RESERVATION:
      // Handle adding a reservation to the state
      return state;
    default:
      return state;
  }
};

