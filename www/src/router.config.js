//引入路由和react组件
import React from 'react';
import {Router,Route,hashHistory,browserHistory,IndexRoute,Redirect} from 'react-router';
//各个路由登场
import App from './components/App';//主控制模块
import reg from './components/Reg';//注册模块
import Home from './components/home';//主页
import User from './components/User';//用户
import Site from './components/site';//收货地址
import Error from './components/error';//404报错
import Login from './components/login';//登陆模块
import ShopCar from './components/ShopCar';//购物车
import SiteAdd from './components/siteadd';//添加地址
import ClassIfy from './components/classify';//分类
import Merchant from './components/merchant';//商家
import ComMunity from './components/community';//社区
import siteAmend from './components/siteAmend';//修改地址
import Detail from './components/productDetails';//商品详情
import ConfirmOrder from './components/ConfirmOrder';//确认订单
import CommunityAdd from './components/communityAdd';//编辑评论
import ProductDetails from './components/productDetails';//



const RouterConfig = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="reg" component={reg}/>
      <Route path="home" component={Home}/>
      <Route path="site" component={Site}/>
      <Route path="user" component={User}/>
      <Route path="login" component={Login}/>
      <Route path="shopcar" component={ShopCar}/>
      <Route path="siteadd" component={SiteAdd}/>
      <Route path="classify" component={ClassIfy}/>
      <Route path="merchant" component={Merchant}/>
      <Route path="community" component={ComMunity}/>
      <Route path="siteamend" component={siteAmend}/>
      <Route path="confirmorder" component={ConfirmOrder}/>
      <Route path="communityadd" component={CommunityAdd}/>
      <Route path="productdetails" component={ProductDetails}/>
    </Route>
      <Route path="*" component={Error}/>
  </Router>
);
export default RouterConfig;