require('css/pages/ideas/index.css');

import ReactDom from 'react-dom';

import App from 'modules/App.jsx';

import HotLoadSupport from 'containers/HotLoadSupport.jsx';
import ReduxSupport from 'containers/ReduxSupport.jsx';

const Render = Component => {
    ReactDOM.render(
        <HotLoadSupport>
            <ReduxSupport>
                <Component />
            </ReduxSupport>
        </HotLoadSupport>,
        document.getElementById('app')
     );
}

Render(App);

if (process.env.NODE_ENV == 'development' && module.hot)
    module.hot.accept('modules/App.jsx', () => Render(App));
