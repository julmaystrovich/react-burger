import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch, RootState } from "../types";
import {
  WS_ORDER_CONNECTION_START,
  WS_USER_ORDER_CONNECTION_START,
  TWsUserOrderActions, 
  TWsOrderActions
} from "../actions/feed";
import { getCookie } from "../../utils/cookie";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWsOrderActions | TWsUserOrderActions
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onOrders } = wsActions;
      const { loggedIn } = getState().auth;
      const token = loggedIn ? `?token=${getCookie('token')?.replace('Bearer ', '')}` : '';

      if (type === wsInit && type === WS_USER_ORDER_CONNECTION_START) {
        socket = new WebSocket(`${wsUrl}${token}`);
      }

      if (type === wsInit && type === WS_ORDER_CONNECTION_START) {
        socket = new WebSocket(`${wsUrl}/all`);
      }

      if (socket) {
        socket.onopen = (event) => {
            dispatch({ type: onOpen, orders: event });
        };

        socket.onerror = (event) => {
            dispatch({ type: onError, orders: event });
        };

        socket.onclose = (event) => {
            dispatch({ type: onClose, orders: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          dispatch({ type: onOrders, orders: parsedData });
        };
      }

      next(action);
    };
  }) as Middleware;
};
