import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import storeConfig from 'reduxs/store/store.config.js';
// import router from 'react-router-dom';
// import { Button } from 'antd'; import
// asset from './DSC_3440.jpg';
// import App from './app';
import RouterView from './router';

const store = storeConfig({ config: global.$GLOBALCONFIG });
ReactDom.render(
  <Provider store={store}>
    <RouterView />
  </Provider>
, document.querySelector('#app'));
// ReactDom.render(<App />, document.querySelector('#app'));
// ReactDom.render(<RouterView />, document.querySelector('#app'));
