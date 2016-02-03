import React from 'react'
import { render } from 'react-dom'

// First we import some modules...
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import routes from './router/router.js'

render(<Router history={browserHistory} routes={routes} />, document.getElementById("app"))