import { postOrder } from '../../utils/postOrder';
import { CLEAR_CONSTRUCTOR } from './constructor';

export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS';
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

export function getOrderNumber(data) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_NUMBER_REQUEST
        });
        postOrder(data)
        .then((res) => {
            dispatch({
                type: GET_ORDER_NUMBER_SUCCESS,
                orderNumber: res.order.number
            });
            dispatch({
                type: CLEAR_CONSTRUCTOR
            });
          })
        .catch((err) => {
            dispatch({
              type: GET_ORDER_NUMBER_FAILED
            });
          });
    };
}

export function closeOrderModal() {
    return {
        type: CLOSE_ORDER_DETAILS
    };
}