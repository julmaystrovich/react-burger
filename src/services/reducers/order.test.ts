import { AnyAction } from "redux";
import { orderInitialState } from "./order";
import orderReducer from "./order";
import {
  CLOSE_ORDER_DETAILS,
  GET_ORDER_NUMBER_REQUEST,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
} from "../actions/order";

describe("Проверка Order Reducer", () => {
    const orderNumber = {
        orderNumber: 11111
    };

  it("Проверка Initial State", () => {
    expect(orderReducer(undefined, {} as AnyAction)).toEqual(orderInitialState);
  });

  it("Проверка CLOSE_ORDER_DETAILS", () => {
    expect(
      orderReducer(orderInitialState, {
        type: CLOSE_ORDER_DETAILS,
      })
    ).toEqual({
      ...orderInitialState,
      orderNumber: null,
    });
  });
  it("Проверка GET_ORDER_NUMBER_REQUEST", () => {
    expect(
      orderReducer(orderInitialState, {
        type: GET_ORDER_NUMBER_REQUEST,
      })
    ).toEqual({
      ...orderInitialState,
      orderNumberRequest: true, 
      orderNumberFailed: false
    });
  });

  it('Проверка GET_ORDER_NUMBER_SUCCESS', () => {
    expect(orderReducer(orderInitialState, {
        type: GET_ORDER_NUMBER_SUCCESS,
        orderNumber,
    })).toEqual({
        ...orderInitialState,
        orderNumber,
        orderNumberFailed: false,
        orderNumberRequest: false
    });
});
  it("Проверка GET_ORDER_NUMBER_FAILED", () => {
    expect(
      orderReducer(orderInitialState, {
        type: GET_ORDER_NUMBER_FAILED,
      })
    ).toEqual({
      ...orderInitialState,
      orderNumberRequest: false, 
      orderNumberFailed: true
    });
  });
});
