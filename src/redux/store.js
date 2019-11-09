import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import * as History from 'history';
import {appReducer} from './reducers/app.reducer'

export const history = History.createBrowserHistory();

const enhancers = [];
const initialState = {}
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

const combinedReducers = combineReducers({
    router: connectRouter(history),
    app: appReducer
});

export default createStore(
    combinedReducers,
    initialState,
    composedEnhancers,
);
