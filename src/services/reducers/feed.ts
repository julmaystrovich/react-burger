import {
   WS_ORDER_CONNECTION_SUCCESS,
   WS_ORDER_CONNECTION_ERROR,
   WS_ORDER_CONNECTION_CLOSED,
   WS_ORDER_GET,
   WS_USER_ORDER_CONNECTION_SUCCESS,
   WS_USER_ORDER_CONNECTION_ERROR,
   WS_USER_ORDER_CONNECTION_CLOSED,
   WS_USER_ORDER_GET,
   TFeedActions
} from '../actions/feed';
import { TOrder } from '../../utils/types';

type TFeedState = {
    wsConnected: boolean;
    orders: Array<TOrder>;
    userOrders: Array<TOrder>;
    total: number;
    totalToday: number;
};

const feedInitialState: TFeedState = {
    wsConnected: false,
    orders: [],
    userOrders: [],
    total: 0,
    totalToday: 0
};

const feedReducer = (state = feedInitialState, action: TFeedActions): TFeedState => {
    switch (action.type) {
        case WS_ORDER_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnected: true,
            };
        }
        case WS_ORDER_CONNECTION_ERROR: {
            return {
                ...state,
                wsConnected: false,
            };
        }
        case WS_ORDER_CONNECTION_CLOSED: {
            return {
                ...state,
                wsConnected: false,
            };
        }
        case WS_ORDER_GET: {
            return {
                ...state,
                orders: action.orders.orders,
                total: action.orders.total,
                totalToday: action.orders.totalToday
            };
        }
        case WS_USER_ORDER_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnected: true,
            };
        }
        case WS_USER_ORDER_CONNECTION_ERROR: {
            return {
                ...state,
                wsConnected: false,
            };
        }
        case WS_USER_ORDER_CONNECTION_CLOSED: {
            return {
                ...state,
                wsConnected: false,
            };
        }
        case WS_USER_ORDER_GET: {
            return {
                ...state,
                userOrders: action.orders.orders
            };
        }
        default: {
            return state;
        }
    }
};

export default feedReducer;