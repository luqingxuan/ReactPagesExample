const {
    createActions
} = ReduxActions;

import {
    MoneyActionConstant
}
from 'store/actionConstants/index.js';

const actions = createActions({
    [MoneyActionConstant.DOUBLE]: (multi) => {
        return {
            multi: 2
        }
    },
    [MoneyActionConstant.FIRE]: (multi) => {
        return {
            multi: 0
        }
    }
});

export default actions;
