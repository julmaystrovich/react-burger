import {
    WS_CONNECTION_SUCCESS,
   WS_CONNECTION_ERROR,
   WS_CONNECTION_CLOSED,
   WS_ORDER_GET,
   TFeedActions
} from '../actions/feed';
import { TOrder } from '../../utils/types';

type TFeedState = {
    wsConnected: boolean;
    orders: Array<TOrder>;
    total: number;
    totalToday: number;
};

const feedInitialState: TFeedState = {
    wsConnected: false,
    orders: [],
    total: 0,
    totalToday: 0
};

const feedReducer = (state = feedInitialState, action: TFeedActions): TFeedState => {
    switch (action.type) {
        case WS_CONNECTION_SUCCESS: {
            return {
                ...state,
                wsConnected: true,
            };
        }
        case WS_CONNECTION_ERROR: {
            return {
                ...state,
                wsConnected: false,
            };
        }
        case WS_CONNECTION_CLOSED: {
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
        default: {
            return state;
        }
    }
};

export default feedReducer;