import createHistory from 'history/createBrowserHistory';

import ReduxThunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import createSagaMiddleware from 'redux-saga';

import {
    runSaga
} from './sagas/index.js';

import Reducers from './reducers/index.js';

import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';

import {
    routerReducer,
    routerMiddleware
} from 'react-router-redux';

export const history = createHistory();

const reactRouterMiddleware = routerMiddleware(history);

const sagaMiddleware = createSagaMiddleware();

const middleware = [reactRouterMiddleware, ReduxThunk, ReduxPromise, sagaMiddleware];

const store = createStore(
    combineReducers({
        ...Reducers,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
);

runSaga(sagaMiddleware);

export default store;
