import {
    CLOSE_ORDER_DETAILS,
    GET_ORDER_NUMBER_REQUEST,
    GET_ORDER_NUMBER_SUCCESS,
    GET_ORDER_NUMBER_FAILED
  } from '../actions/order';

  const orderInitialState = {
    orderNumber: null,
    orderNumberRequest: false,
    orderNumberFailed: false
};

const orderReducer = (state = orderInitialState, action) => {
    switch (action.type) {
        case GET_ORDER_NUMBER_REQUEST: {
            return { ...state, orderNumberRequest: true, orderNumberFailed: false };
        }
        case GET_ORDER_NUMBER_SUCCESS: {
            return { ...state, orderNumberFailed: false, orderNumber: action.orderNumber, orderNumberRequest: false };
        }
        case GET_ORDER_NUMBER_FAILED: {
            return { ...state, orderNumberFailed: true, orderNumberRequest: false };
        }
        case CLOSE_ORDER_DETAILS: {
            return { ...state, orderNumber: null };
        }
        default: {
            return state;
        }
    }
};

export default orderReducer;