import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';// connect 打造容器组件

class topbar2 extends Component {
    componentWillMount(){
        // console.log(this)
    }
    
    render() {
        // console.log(this.props);
        let {topbartitle} = this.props; //解构了mapStateToProps传递过来的属性
        return (
            <div className="topbar">
                <header>
                    <div className="header">
                        <Link to="/home">
                            <i className="icon icon-return"></i>
                        </Link>
                        <h1>{this.props.topbartitle[2]}</h1>
                        <Link to="/communityAdd" className="cart-edit">编辑</Link>
                    </div>
                </header>
                <div></div>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    return {
      topbartitle:state.topbartitle,
      sending:state.sending
    }
  };
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
  )(topbar2);