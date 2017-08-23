const { Route, Switch } = ReactRouterDOM;

const Home = () => (
    <div>
        <h2> Home </h2>
    </div>
);

const About = () => (
    <div>
        <h2> About </h2>
    </div>
);

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component = { About } />
    </Switch>
);
