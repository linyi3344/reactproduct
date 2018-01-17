import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';// connect 打造容器组件

class Site extends Component {
  constructor(){
    super();
    this.SendSiteMsg=this.SendSiteMsg.bind(this);
  }
    componentWillMount(){
        // console.log(this)
    }
    SendSiteMsg(item){
      let {send} = this.props;
      send(item);
    }
    render() {
      
      let {topbartitle,addressmsg} = this.props; //解构了mapStateToProps传递过来的属性
      console.log(addressmsg);
        return (
            <div className="margintop">
                <article className="orderSite">
                {
                  addressmsg.map((item,index)=>{
                    return(
                    <Link to="/siteAmend" key={index} onClick={()=>{this.SendSiteMsg(item)}}>
                    <p>收货人：{item.username}&nbsp;&nbsp;{item.Phonenum}</p>
                    <span><em>{index==0?"[默认]":undefined}</em>{item.Province}{item.Address}</span>
                    <i className="icon icon-select"></i>
                  </Link>)
                  })
                }
                  {/* <Link to="/siteAmend">
                    <p>收货人：郭小帅&nbsp;&nbsp;13688888888</p>
                    <span><em>[默认]</em>广州市番禺区市桥街道81号</span>
                    <i className="icon icon-select"></i>
                  </Link>
                  <Link to="/siteAmend">
                    <p>收货人：郭小帅&nbsp;&nbsp;13688888888</p>
                    <span>广州市番禺区市桥街道81号</span>
                    <i className="icon icon-select"></i>
                  </Link> */}
                </article>
                <div className="add-site">
                  <Link to="/siteAdd" className="btn bottom-btn">新增地址</Link>	
                </div>
            </div>
        )
    }
}
//connect是个函数,调用后，返回一个函数,这个函数可以包裹UI组件,返回一个容器组件
//状态satte来的属性都在mapStateToProps里面
const mapStateToProps=(state,ownProps)=>{
    return {
      addressmsg:state.addressmsg,
      topbartitle:state.topbartitle,
      sending:state.sending
    }
  };
  
  //所有需要递交的action请求
  const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
      send:(data)=>{dispatch({type:'SendSiteMsg',payload:data})},
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
  )(Site);