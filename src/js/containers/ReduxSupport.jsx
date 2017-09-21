import store, { history } from'store/index.js';

import { Provider } from 'react-redux';

import  { ConnectedRouter } from 'react-router-redux';

export default class ReduxSupport extends React.Component {
    render() {
        let { children } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                        { children }
                </ConnectedRouter>
            </Provider>
        );
    }
}
