//引入全局模块 和共用模块
import React, { Component } from 'react';
import Topbar from './topbar';
import Topbar1 from './topbar1';
import Topbar2 from './topbar2';
import Topbar3 from './topbar3';
import Topbar4 from './topbar4';
import Topbar5 from './topbar5';
import Topbar6 from './topbar6';
import Topbar7 from './topbar7';
import Topbar8 from './topbar8';
import Footbar from './footbar';
import '../assets/css/bass.css';
import '../assets/css/style.css';
import {connect} from 'react-redux';// connect 打造容器组件
class App extends Component {
  
  render() {
    let btopbar=true;
    let bfoot = true;
    let path=this.props.location.pathname;
    if(/home/.test(path)){
      btopbar=0;
      bfoot = true;
    }
    if(/community/.test(path)){
      btopbar=1;
      bfoot = true;
    }
    if(/ShopCar/.test(path)){
      btopbar=2;
      bfoot = true;
    }
    if(/merchant/.test(path)){
      btopbar=3;
      bfoot = true;
    }
    if(/productDetails/.test(path)){
      btopbar=4;
      bfoot = false;
      
    }
    if(/confirmOrder/.test(path)){
      btopbar=5;
      bfoot = false;
    }
    if(/site/.test(path)){
      btopbar=6;
      bfoot = false;
    }
    if(/siteAdd/.test(path)){
      btopbar=7;
      bfoot = false;
    }
    if(/siteAmend/.test(path)){
      btopbar=8;
      bfoot = false;
    }
    if(/user/.test(path)){
      btopbar=9;
      bfoot = true;
    }
    if(/reg|login/.test(path)){
      btopbar=9;
      bfoot = false;
    }

    return (
      <div className="App">
       {btopbar==0?<Topbar/>:undefined}      
       {btopbar==1?<Topbar1/>:undefined}
       {btopbar==2?<Topbar2/>:undefined}
       {btopbar==3?<Topbar3/>:undefined}
       {btopbar==4?<Topbar4/>:undefined}
       {btopbar==5?<Topbar5/>:undefined}
       {btopbar==6?<Topbar6/>:undefined}
       {btopbar==7?<Topbar7/>:undefined}
       {btopbar==8?<Topbar8/>:undefined}
        {this.props.children}
        {bfoot?<Footbar/>:undefined}
      </div>
    );
  }
}

//状态satte来的属性都在mapStateToProps里面
const mapStateToProps=(state,ownProps)=>{
  // console.log('ownPorps:',ownProps);   //外部调用容器组件是传递的props参数
  return {

  }
};

//所有需要递交的action请求
const mapDispatchToProps=(dispatch,ownProps)=>{
  return {
    send:(data)=>{dispatch({type:'ADD',payload:data})},
    showLoading:()=>{
      dispatch({type:'START_LOADING'});
    },
    hideLoading:()=>{
      dispatch({type:'STOP_LOADING'});
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
