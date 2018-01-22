import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';// connect 打造容器组件

class ConfirmOrder extends Component {
    componentWillMount(){
        // console.log(this)
    }
    
    render() {
        // console.log(this.props);
        
        let {ProList} = this.props; //解构了mapStateToProps传递过来的属性
        return (
            <div className="margintop">
                <article className="orderSite">

		<Link to="/site">
			<p>收货人：郭小帅&nbsp;&nbsp;13688888888</p>
			<span>广州市番禺区市桥街道81号</span>
			<i className="icon icon-select"></i>
		</Link>
	</article>
	<a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/sjlogo.png" alt=""/>海绵包包</a>
	<article className="confirmOrder">
		<img src="/src/assets/images/cp_gg.png" alt=""/>
		<div className="product-text">
	    	<span>{ProList.title}</span>
	    	<span className="hue">颜色：黑色</span>
	    	<span className="price">￥{ProList.price}.00 <s>${ProList.oldprice}.00</s><em>X1</em></span>
		</div>
	</article>
	<article>
		<form className="setCmp">
			<div className="setCmp-input select-Industry">
				<div className="payment">
					 <input type="radio" className="radio-la" value="微信支付" id="check-2" name="doc-radio-1"/>
		             <label className="icon-radio" htmlFor="check-2">微信支付</label>
				</div>
				<div className="payment">
					 <input type="radio" className="radio-la" value="支付宝" id="check-3" name="doc-radio-1"/>
		             <label className="icon-radio icon-radio2" htmlFor="check-3">支付宝</label>
				</div>			
			</div>
		</form>
	</article>
	<nav className="navbar-fixed-bottom">
		<div className="container">
		    <div className="navbar-text navbar-left pull-left m-cart-disbursement">		合计：￥68.00
		        <p>商品总价￥68.00， 优惠￥7.00</p>
		    </div> 
	    	<a href="javascript:;" className="btn btn-warning navbar-btn pull-right" >去结算</a>
	  	</div>	
	</nav>
            </div>
        )
    }
}
const mapStateToProps=(state,ownProps)=>{
    // console.log('ownPorps:',ownProps);   //外部调用容器组件是传递的props参数
    return {
      ProList:state.ProList,
	  sending:state.sending
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
			},
			getUserAdress: (payload) => {
				// this.props.showLoading();
				//抓用户地址数据
				let url = `/data/product.data`;
				fetch(url)
						.then(res => res.json())
						.then((data) => {
								
								// this.props.hideLoading();
						dispatch({type: 'GetProductData', payload: data})
				})
			}
    }
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ConfirmOrder);