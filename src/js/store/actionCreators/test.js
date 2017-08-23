const {
    createActions
} = ReduxActions;

import {
    TestActionConstant
}
from 'store/actionConstants/index.js';

const actions = createActions({
    [TestActionConstant.INCREMENT]: (delta) => {
        return {
            delta: delta
        }
    },
    [TestActionConstant.DECREMENT]: (delta) => {
        return {
            delta: delta
        }
    }
});

export default actions;
