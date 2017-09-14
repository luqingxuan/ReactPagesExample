import createHistory from 'history/createBrowserHistory';

import {
    runSaga
} from './sagas/index.js';

import Reducers from './reducers/index.js';

const {
    createStore,
    applyMiddleware,
    combineReducers
} = Redux;

const {
    routerReducer,
    routerMiddleware
} = ReactRouterRedux;

export const history = createHistory();

const reactRouterMiddleware = routerMiddleware(history);

const sagaMiddleware = ReduxSaga.default();

const middleware = [reactRouterMiddleware, ReduxThunk.default, ReduxPromise, sagaMiddleware];

const store = createStore(
    combineReducers({
        ...Reducers,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
);

runSaga(sagaMiddleware);

export default store;
