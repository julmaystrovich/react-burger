import { postOrder } from '../../utils/postOrder';

export const CLOSE_ORDER_DETAILS = 'CLOSE_ORDER_DETAILS';
export const GET_ORDER_NUMBER_REQUEST = 'GET_ORDER_NUMBER_REQUEST';
export const GET_ORDER_NUMBER_SUCCESS = 'GET_ORDER_NUMBER_SUCCESS';
export const GET_ORDER_NUMBER_FAILED = 'GET_ORDER_NUMBER_FAILED';

export function getOrderNumber(data) {
    return function (dispatch) {
        dispatch({
            type: GET_ORDER_NUMBER_REQUEST
        });
        postOrder(data).then(res => {
            if (res && res.success) {
                dispatch({
                    type: GET_ORDER_NUMBER_SUCCESS,
                    orderNumber: res.order.number
                });
            } else {
                dispatch({
                    type: GET_ORDER_NUMBER_FAILED
                });
            }
        });
    };
}

export function closeOrderModal() {
    return function (dispatch) {
        dispatch({
            type: CLOSE_ORDER_DETAILS
        });
    }
}