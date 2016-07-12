require('css/pages/index.css');

import {Router,Route,Link,IndexLink,IndexRoute,hashHistory} from 'react-router';

class Index extends React.Component {
  render() {
    return (
    <div>
      <h1>hello index!</h1>
      <Link to='/about'>About</Link>
    </div>
    );
  }
};

var About=React.createClass({
	  render() {
	    return (
	    <div>
	      <h1>hello about!</h1>
	      <Link to='/index'>Index</Link>
	    </div>
	    );
	  }
	});

ReactDOM.render(
		<Router history={hashHistory}>
			<Route path='/' component={Index}/>
				<IndexRoute component={Index}/>
				<Route path='/index' component={Index}/>
				<Route path='/about' component={About}/>
		</Router>, document.getElementById('app'));