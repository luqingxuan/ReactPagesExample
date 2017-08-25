import { TestRoutes } from 'router/index.jsx';

import { TestActionCreator } from 'store/actionCreators/index.js';

const { connect } = ReactRedux;

const { withRouter } = ReactRouter;

const {
  BrowserRouter,
  Link,
} = ReactRouterDOM;

class App extends React.Component{
    render() {
        let { counter, onCounterIncrement } = this.props;
        return (
            <div>
                <h2 onClick={e => onCounterIncrement(2)}>{counter}</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                { TestRoutes}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        counter: state.test.counter
    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onCounterIncrement: (payload) => {
            dispatch(TestActionCreator.increment(4));
        }
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
