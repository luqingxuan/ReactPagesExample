require('css/pages/index.css');

import { AppContainer } from 'react-hot-loader';

import App from 'modules/App.jsx';

const Render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

Render(App);

if (process.env.NODE_ENV == 'development' && module.hot)
    module.hot.accept('modules/App.jsx', () => Render(App));
