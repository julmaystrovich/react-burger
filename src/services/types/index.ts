import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { store } from '../store';
import { TIngredientsActions } from '../actions/ingredients';
import { TConstructorActions } from '../actions/constructor';
import { TOrderActions } from '../actions/order';
import { TAuthActions } from '../actions/authorization';
import { TFeedActions } from '../actions/feed';

type TApplicationActions = TOrderActions | TIngredientsActions | TAuthActions | TConstructorActions | TFeedActions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = Dispatch<TApplicationActions>;
export type AppThunk<ReturnType = void> = ActionCreator<
  ThunkAction<ReturnType, Action, RootState, TApplicationActions>
>;