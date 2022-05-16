import { AnyAction } from 'redux';
import { feedInitialState } from './feed';
import feedReducer from './feed';
import {
    WS_CONNECTION_SUCCESS,
    WS_CONNECTION_ERROR,
    WS_CONNECTION_CLOSED,
    WS_ORDER_GET
} from '../actions/feed';

describe('Проверка Feed Reducer', () => {
    const order = {
        createdAt: "2022-05-16T12:16:00.256Z",
        ingredients: ["60d3b41abdacab0026a733c7"],
        name: "Флюоресцентный бургер",
        number: 15479,
        status: "done",
        updatedAt: "2022-05-16T12:16:48.485Z",
        _id: "6282168bfa747e001bd48136",
    };

    const orders = {
        orders: [order],
        total: 99999,
        totalToday: 99,
    }
    
    it('Проверка Initial State', () => {
        expect(feedReducer(undefined, {} as AnyAction)).toEqual(feedInitialState);
    });

    it('Проверка WS_CONNECTION_SUCCESS', () => {
        expect(feedReducer(feedInitialState, {
            type: WS_CONNECTION_SUCCESS,
        })).toEqual({
            ...feedInitialState,
            wsConnected: true
        });
    });
    it('Проверка WS_CONNECTION_ERROR', () => {
        expect(feedReducer(feedInitialState, {
            type: WS_CONNECTION_ERROR
        })).toEqual({
            ...feedInitialState,
            wsConnected: false
        });
    });
    it('Проверка WS_CONNECTION_CLOSED', () => {
        expect(feedReducer(feedInitialState, {
            type: WS_CONNECTION_CLOSED
        })).toEqual({
            ...feedInitialState,
            wsConnected: false
        });
    });

    it('Проверка WS_ORDER_GET', () => {
        expect(feedReducer(feedInitialState, {
            type: WS_ORDER_GET,
            orders
        })).toEqual({
            ...feedInitialState,
            orders: [order],
            total: 99999,
            totalToday: 99,
        });
    });
})