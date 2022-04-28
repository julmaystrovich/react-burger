import { TOrders } from '../../utils/types';

export const WS_ORDER_CONNECTION_START: "WS_ORDER_CONNECTION_START" = "WS_ORDER_CONNECTION_START";
export const WS_ORDER_CONNECTION_SUCCESS: 'WS_ORDER_CONNECTION_SUCCESS' = 'WS_ORDER_CONNECTION_SUCCESS';
export const WS_ORDER_CONNECTION_ERROR: 'WS_ORDER_CONNECTION_ERROR' = 'WS_ORDER_CONNECTION_ERROR';
export const WS_ORDER_CONNECTION_CLOSED: 'WS_ORDER_CONNECTION_CLOSED' = 'WS_ORDER_CONNECTION_CLOSED';
export const WS_ORDER_GET: 'WS_ORDER_GET' = 'WS_ORDER_GET';

export const WS_USER_ORDER_CONNECTION_START: "WS_USER_ORDER_CONNECTION_START" = "WS_USER_ORDER_CONNECTION_START";
export const WS_USER_ORDER_CONNECTION_SUCCESS: 'WS_USER_ORDER_CONNECTION_SUCCESS' = 'WS_USER_ORDER_CONNECTION_SUCCESS'; 
export const WS_USER_ORDER_CONNECTION_ERROR: 'WS_USER_ORDER_CONNECTION_ERROR' = 'WS_USER_ORDER_CONNECTION_ERROR';
export const WS_USER_ORDER_CONNECTION_CLOSED: 'WS_USER_ORDER_CONNECTION_CLOSED' = 'WS_USER_ORDER_CONNECTION_CLOSED';
export const WS_USER_ORDER_GET: 'WS_USER_ORDER_GET' = 'WS_USER_ORDER_GET';

export interface IWsOrderConnectionStartAction {
    readonly type: typeof WS_ORDER_CONNECTION_START;
}

export interface IWsOrderConnectionSuccessAction {
    readonly type: typeof WS_ORDER_CONNECTION_SUCCESS;
}

export interface IWsOrderConnectionErrorAction {
    readonly type: typeof WS_ORDER_CONNECTION_ERROR;
}

export interface IWsOrderConnectionClosedAction {
    readonly type: typeof WS_ORDER_CONNECTION_CLOSED;
}

export interface IWsOrderGetAction {
    readonly type: typeof WS_ORDER_GET;
    readonly orders: TOrders;
}

export interface IWsUserOrderConnectionStartAction {
    readonly type: typeof WS_USER_ORDER_CONNECTION_START;
}

export interface IWsUserOrderConnectionSuccessAction {
    readonly type: typeof WS_USER_ORDER_CONNECTION_SUCCESS;
}

export interface IWsUserOrderConnectionErrorAction {
    readonly type: typeof WS_USER_ORDER_CONNECTION_ERROR;
}

export interface IWsUserOrderConnectionClosedAction {
    readonly type: typeof WS_USER_ORDER_CONNECTION_CLOSED;
}

export interface IWsUserOrderGetAction {
    readonly type: typeof WS_USER_ORDER_GET;
    readonly orders: TOrders;
}

export type TFeedActions =
  | IWsOrderConnectionStartAction
  | IWsOrderConnectionSuccessAction
  | IWsOrderConnectionErrorAction
  | IWsOrderConnectionClosedAction
  | IWsOrderGetAction
  | IWsUserOrderConnectionStartAction
  | IWsUserOrderConnectionSuccessAction
  | IWsUserOrderConnectionErrorAction
  | IWsUserOrderConnectionClosedAction
  | IWsUserOrderGetAction;

export const wsOrderConnectionStartAction = (): IWsOrderConnectionStartAction => ({
    type: WS_ORDER_CONNECTION_START
});
export const wsOrderConnectionSuccessAction = (): IWsOrderConnectionSuccessAction => ({
    type: WS_ORDER_CONNECTION_SUCCESS
});
export const wsOrderConnectionErrorAction = (): IWsOrderConnectionErrorAction => ({
    type: WS_ORDER_CONNECTION_ERROR
});
export const wsOrderConnectionClosedAction = (): IWsOrderConnectionClosedAction => ({
    type: WS_ORDER_CONNECTION_CLOSED
});
export const wsOrderGetAction = (orders: TOrders): IWsOrderGetAction => ({
    type: WS_ORDER_GET,
    orders
});
export const wsUserOrderConnectionStartAction = (): IWsUserOrderConnectionStartAction => ({
    type: WS_USER_ORDER_CONNECTION_START
});
export const wsUserOrderConnectionSuccessAction = (): IWsUserOrderConnectionSuccessAction => ({
    type: WS_USER_ORDER_CONNECTION_SUCCESS
});
export const wsUserOrderConnectionErrorAction = (): IWsUserOrderConnectionErrorAction => ({
    type: WS_USER_ORDER_CONNECTION_ERROR
});
export const wsUserOrderConnectionClosedAction = (): IWsUserOrderConnectionClosedAction => ({
    type: WS_USER_ORDER_CONNECTION_CLOSED
});
export const wsUserOrderGetAction = (orders: TOrders): IWsUserOrderGetAction => ({
    type: WS_USER_ORDER_GET,
    orders
});

export type TWsOrderActions = {
    wsInit: typeof WS_ORDER_CONNECTION_START;
    onOpen: typeof WS_ORDER_CONNECTION_SUCCESS;
    onError: typeof WS_ORDER_CONNECTION_ERROR;
    onClose: typeof WS_ORDER_CONNECTION_CLOSED;
    onOrders: typeof WS_ORDER_GET;
};

export const wsOrderActions: TWsOrderActions = {
    wsInit: WS_ORDER_CONNECTION_START,
    onOpen: WS_ORDER_CONNECTION_SUCCESS,
    onError: WS_ORDER_CONNECTION_ERROR,
    onClose: WS_ORDER_CONNECTION_CLOSED,
    onOrders: WS_ORDER_GET,
};

export type TWsUserOrderActions = {
    wsInit: typeof WS_USER_ORDER_CONNECTION_START;
    onOpen: typeof WS_USER_ORDER_CONNECTION_SUCCESS;
    onError: typeof WS_USER_ORDER_CONNECTION_ERROR;
    onClose: typeof WS_USER_ORDER_CONNECTION_CLOSED;
    onOrders: typeof WS_USER_ORDER_GET;
};

export const wsUserOrderActions: TWsUserOrderActions = {
    wsInit: WS_USER_ORDER_CONNECTION_START,
    onOpen: WS_USER_ORDER_CONNECTION_SUCCESS,
    onError: WS_USER_ORDER_CONNECTION_ERROR,
    onClose: WS_USER_ORDER_CONNECTION_CLOSED,
    onOrders: WS_USER_ORDER_GET,
};