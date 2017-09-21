import {
    createActions
} from 'redux-actions';

import {
    TestActionConstant
}
from 'store/actionConstants/index.js';

export default createActions({
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
