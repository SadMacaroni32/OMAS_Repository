// actions.js
export const FETCH_RESERVATIONS = 'FETCH_RESERVATIONS';
export const ADD_RESERVATION = 'ADD_RESERVATION';

export const fetchReservations = (seatId:any) => ({
  type: FETCH_RESERVATIONS,
  payload: seatId,
});

export const addReservation = (seatId, startDate, startTime, endDate, endTime, note) : any => ({
  type: ADD_RESERVATION,
  payload: { seatId, startDate, startTime, endDate, endTime, note },
});

