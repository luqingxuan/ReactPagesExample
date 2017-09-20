require('css/pages/index.css');

import App from 'modules/App.jsx';

import HotLoadSupport from 'containers/HotLoadSupport.jsx';
import ReduxSupport from 'containers/ReduxSupport.jsx';

require.ensure(['modules/test.js'], function(a) {
    console.log(a);
});

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
    module.hot.accept('c.jsx', () => Render(App));
