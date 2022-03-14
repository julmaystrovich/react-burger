import { combineReducers } from 'redux';
import constructorReducer from './constructor';
import orderReducer from './order';
import ingredientsReducer from './ingredients';

export const rootReducer = combineReducers({
  constructor: constructorReducer,
  burgerData: ingredientsReducer,
  order: orderReducer,
});