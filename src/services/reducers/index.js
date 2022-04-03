import { combineReducers } from 'redux';
import constructorReducer from './constructor';
import orderReducer from './order';
import ingredientsReducer from './ingredients';
import authorizationReducer from './authorization';

export const rootReducer = combineReducers({
  auth: authorizationReducer,
  constructor: constructorReducer,
  burgerData: ingredientsReducer,
  order: orderReducer,
});