import createHistory from 'history/createBrowserHistory';

import {
    TestSaga
} from './sagas/index.js';

import {
    TestReducer,
    MoneyReducer
} from './reducers/index.js';

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
        test: TestReducer,
        money: MoneyReducer,
        router: routerReducer
    }),
    applyMiddleware(...middleware)
);

sagaMiddleware.run(TestSaga);

export default store;
