import { TOrders } from '../../utils/types';

export const WS_CONNECTION_START: "WS_CONNECTION_START" = "WS_CONNECTION_START";
export const WS_CONNECTING: "WS_CONNECTING" = "WS_CONNECTING";
export const WS_CONNECTION_SUCCESS: 'WS_CONNECTION_SUCCESS' = 'WS_CONNECTION_SUCCESS';
export const WS_CONNECTION_ERROR: 'WS_CONNECTION_ERROR' = 'WS_CONNECTION_ERROR';
export const WS_CONNECTION_CLOSED: 'WS_CONNECTION_CLOSED' = 'WS_CONNECTION_CLOSED';
export const WS_ORDER_GET: 'WS_ORDER_GET' = 'WS_ORDER_GET';

export interface IWsConnectionStartAction {
    readonly type: typeof WS_CONNECTION_START;
    readonly payload: string; // url
}

export interface IWsConnecting {
    readonly type: typeof WS_CONNECTING;
};
export interface IWsConnectionSuccessAction {
    readonly type: typeof WS_CONNECTION_SUCCESS;
}

export interface IWsConnectionErrorAction {
    readonly type: typeof WS_CONNECTION_ERROR;
}

export interface IWsConnectionClosedAction {
    readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsOrderGetAction {
    readonly type: typeof WS_ORDER_GET;
    readonly orders: TOrders;
}

export type TFeedActions =
  | IWsConnectionStartAction
  | IWsConnecting
  | IWsConnectionSuccessAction
  | IWsConnectionErrorAction
  | IWsConnectionClosedAction
  | IWsOrderGetAction;

export const wsConnectionStartAction = (payload: string): IWsConnectionStartAction => ({
    type: WS_CONNECTION_START,
    payload
});
export const wsOrderConnectionSuccessAction = (): IWsConnectionSuccessAction => ({
    type: WS_CONNECTION_SUCCESS
});
export const wsOrderConnectionErrorAction = (): IWsConnectionErrorAction => ({
    type: WS_CONNECTION_ERROR
});
export const wsConnectionClosedAction = (): IWsConnectionClosedAction => ({
    type: WS_CONNECTION_CLOSED
});
export const wsOrderGetAction = (orders: TOrders): IWsOrderGetAction => ({
    type: WS_ORDER_GET,
    orders
});

export type TWsOrderActions = {
    wsInit: typeof WS_CONNECTION_START;
    wsConnecting: typeof WS_CONNECTING;
    onOpen: typeof WS_CONNECTION_SUCCESS;
    onError: typeof WS_CONNECTION_ERROR;
    onClose: typeof WS_CONNECTION_CLOSED;
    onOrders: typeof WS_ORDER_GET;
};

export const wsOrderActions: TWsOrderActions = {
    wsInit: WS_CONNECTION_START,
    wsConnecting: WS_CONNECTING,
    onOpen: WS_CONNECTION_SUCCESS,
    onError: WS_CONNECTION_ERROR,
    onClose: WS_CONNECTION_CLOSED,
    onOrders: WS_ORDER_GET,
};