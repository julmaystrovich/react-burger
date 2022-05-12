import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch, RootState } from "../types";
import {
  TWsOrderActions
} from "../actions/feed";

export const socketMiddleware = (
  wsUrl: string,
  wsActions: TWsOrderActions,
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onOpen, onClose, onError, onOrders, wsConnecting } = wsActions;

      if (wsInit === action.type) {
        wsUrl = action.payload;
        socket = new WebSocket(wsUrl);
        dispatch({type: wsConnecting});
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
