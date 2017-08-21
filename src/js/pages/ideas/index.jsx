require('css/pages/ideas/index.css');

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

if (process.env == 'development' && module.hot)
    module.hot.accept('modules/App.jsx', () => Render(App));
