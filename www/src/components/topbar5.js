import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';// connect 打造容器组件

class topbar5 extends Component {
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
                        <Link to="/productDetails">
                            <i className="icon icon-return"></i>
                        </Link>
                        <h1>{this.props.topbartitle[5]}</h1>
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
  )(topbar5);