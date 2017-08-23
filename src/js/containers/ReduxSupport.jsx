import store, { history } from'store/index.js';

const { ConnectedRouter } = ReactRouterRedux;

const { Provider } = ReactRedux;

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
