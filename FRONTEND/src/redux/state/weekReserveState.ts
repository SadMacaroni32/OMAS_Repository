
export const FETCH_RESERVATION_START = 'FETCH_RESERVATION_START';
export const FETCH_RESERVATION_SUCCESS = 'FETCH_RESERVATION_SUCCESS';
export const FETCH_RESERVATION_FAILURE = 'FETCH_RESERVATION_FAILURE';

export const fetchReservationStart = (startDate: any, seatId: any) => ({
  type: FETCH_RESERVATION_START,
  payload: { startDate, seatId },
});

export const fetchReservationSuccess = (data: any) => ({
  type: FETCH_RESERVATION_SUCCESS,
  payload: data,
});

export const fetchReservationFailure = (error: unknown) => ({
  type: FETCH_RESERVATION_FAILURE,
  payload: error,
});


const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const weekReserveReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_RESERVATION_START:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RESERVATION_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_RESERVATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
