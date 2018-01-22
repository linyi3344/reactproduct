import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import RouterConfig from './router.config'
import {Provider,connect} from 'react-redux';// connect 打造容器组件
//1.创建store对象,把reducer和state传入
const store = createStore(reducer,defaultState);

import reducer from './store/reducer';
import defaultState from './store/state';

ReactDOM.render(
  <Provider store={store}>
    <RouterConfig/>
  </Provider>,
  document.querySelector('#app')
);
