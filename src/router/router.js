import Index from '../pages/Index.js';

import Login from '../pages/Login.js';

import Layout from '../pages/Layout.js';

// 路由配置
export default
{
  path: '/',
  component: Layout,
  indexRoute: { component: Index },
  childRoutes: [
    {
    	path:'login',
    	component:Login,
    	childRoutes:[] 
    }
  ]
};
