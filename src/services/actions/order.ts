import { postOrder } from "../../utils/postOrder";
import { clearConstructorAction } from "./constructor";
import { TOrderNumber, TIngredientId } from "../../utils/types";
import { AppDispatch, AppThunk } from '../types';

export const CLOSE_ORDER_DETAILS: "CLOSE_ORDER_DETAILS" = "CLOSE_ORDER_DETAILS";
export const GET_ORDER_NUMBER_REQUEST: "GET_ORDER_NUMBER_REQUEST" =
  "GET_ORDER_NUMBER_REQUEST";
export const GET_ORDER_NUMBER_SUCCESS: "GET_ORDER_NUMBER_SUCCESS" =
  "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED: "GET_ORDER_NUMBER_FAILED" =
  "GET_ORDER_NUMBER_FAILED";

export interface ICloseOrderDetailsAction {
  readonly type: typeof CLOSE_ORDER_DETAILS;
}

export interface IGetOrderNumberRequestAction {
  readonly type: typeof GET_ORDER_NUMBER_REQUEST;
}

export interface IGetOrderNumberRequestSuccessAction {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly orderNumber: TOrderNumber;
}

export interface IGetOrderNumberRequestFailedAction {
  readonly type: typeof GET_ORDER_NUMBER_FAILED;
}

export type TOrderActions =
  | ICloseOrderDetailsAction
  | IGetOrderNumberRequestAction
  | IGetOrderNumberRequestSuccessAction
  | IGetOrderNumberRequestFailedAction;

  const getOrderNumberRequestAction = (): IGetOrderNumberRequestAction => ({
    type: GET_ORDER_NUMBER_REQUEST,
  });

  const getOrderNumberRequestSuccessAction = (
    orderNumber: TOrderNumber
  ): IGetOrderNumberRequestSuccessAction => ({
    type: GET_ORDER_NUMBER_SUCCESS,
    orderNumber,
  });
  
  const getOrderNumberRequestFailedAction = (): IGetOrderNumberRequestFailedAction => ({
    type: GET_ORDER_NUMBER_FAILED,
  });

export const getOrderNumber: AppThunk = (data: Array<TIngredientId>) => (dispatch: AppDispatch) => {
    dispatch(getOrderNumberRequestAction());
    postOrder(data)
      .then((res) => {
          dispatch(getOrderNumberRequestSuccessAction(res.order.number));
          dispatch(clearConstructorAction());
      })
      .catch((err) => {
          console.log(err);
          dispatch(getOrderNumberRequestFailedAction());
          dispatch(clearConstructorAction());
      });
}

export const closeOrderModal = (): ICloseOrderDetailsAction => ({
    type: CLOSE_ORDER_DETAILS
});