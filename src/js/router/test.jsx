import { Route, Switch } from 'react-router-dom';

const Home = () => (
    <div>
        <h2 style={{color: "red"}}> Home hello</h2>
    </div>
);

const About = () => (
    <div>
        <h2 style={{color: "red"}}> About world </h2>
    </div>
);

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component = { About } />
    </Switch>
);
