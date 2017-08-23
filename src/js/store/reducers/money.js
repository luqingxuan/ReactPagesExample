import {
    MoneyActionConstant
} from 'store/actionConstants/index.js';

const {
    handleActions
} = ReduxActions;

const defaultState = {
    counter: 0
};

export default handleActions({
    [MoneyActionConstant.DOUBLE](state, {
        payload
    }) {
        return {
            ...state,
            counter: state.counter * payload.multi
        };
    },
    [MoneyActionConstant.FIRE](state, action) {
        return {
            ...state,
            counter: state.counter - payload.multi
        };
    }
}, defaultState);
