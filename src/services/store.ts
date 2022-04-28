import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware';
import { wsUrl } from '../utils/const';
import { wsOrderActions, wsUserOrderActions } from './actions/feed';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsUrl, wsOrderActions), socketMiddleware(wsUrl, wsUserOrderActions)))
);