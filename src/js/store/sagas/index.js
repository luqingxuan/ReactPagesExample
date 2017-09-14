import TestSaga from './test.js';

export function runSaga(sagaMiddleware) {
    sagaMiddleware.run(TestSaga);
}
