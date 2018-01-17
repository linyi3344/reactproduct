import React from "react";
import {Link} from 'react-router';
import {connect} from 'react-redux'; // connect 打造容器组件

class productDetails extends React.Component{
  render(){
	let {ProList} = this.props; 
	console.log(ProList);
	
    return(
<div className="margintop">
  <div className="product-head">
		<a href="##"><img src="src/assets/images/fx02.png" alt=""/></a>
		<a href="##"><img src="src/assets/images/sc02.png" alt=""/></a>
		<img src={ProList.src} alt=""/>
	</div>
	<article className="product-text">
    	<span>{ProList.title}</span>
    	<span className="price">￥{ProList.price}.00 <s>${ProList.oldprice}.00</s></span>
  </article>
    <a id="norms" href="##" className="select-btn select-btn-s">选择规格<i className="icon icon-select"></i></a>
    {/* <!-- 选择规格 --> */}
    <div className="norms-box">
    	<div className="norms-box-bg"></div>
        <div className="norms-content">

            <div className="norms-content-t norms-content-one">
                <div className="norms-img"><img src="src/assets/images/cp_gg.png" alt=""/></div>
                <div className="norms-c-text">
                    <span>{ProList.title}</span>
                    <span className="price">￥{ProList.price}.00 <s>${ProList.oldprice}.00</s></span>
                </div>
                <div className="norms-off-btn"><img src="src/assets/images/off_btn.png" alt=""/></div>
            </div>
            <div className="norms-content-t norms-content-two">
                数量
                <span className="icon norms-out"></span>
                <span>1</span>
                <span className="icon norms-add"></span>
            </div>
            <div className="norms-content-three">
                颜色<br/>
                <span className="pick">黑色</span>
                <span >白色</span>
            </div>
        </div>
    </div>
    <a href="##" className="select-btn select-btn-t"><img src="src/assets/images/sjlogo.png" alt=""/>{ProList.name} <i className="icon icon-select"></i></a>
    <a href="##" className="select-btn select-btn-t select-btn-d"><img src="src/assets/images/tel.png" alt=""/>{ProList.tel}</a>
    {/* {<!-- 详情内容 product-content --> */}
    <div className="product-content">
    	<ul id="tab_btn" className="product-content-ul">
    		<li className="pick">
    			<span>图文详情</span>
    		</li>
    		<li>
    			<span>用户评价</span>
    		</li>
    	</ul>
    	<ul className="product-content-ul2">
    		<li className="tab_content show">
    			<img src="src/assets/images/xq01.png" alt=""/>
    			<img src="src/assets/images/xq02.jpg" alt=""/>
    			<img src="src/assets/images/xq03.jpg" alt=""/>
    		</li>
    		<li className="tab_content">
    			用户评价
    			<div className="evaluate">
    				<div className="evaluate-head">
    					<img src="src/assets/images/user-img0.jpg" alt=""/>
	    				<p>郭小帅 <span>2016-08-24</span></p>
	    				<p><img src="src/assets/images/xingxing.png" alt=""/></p>
    				</div>
    				<p>这个包包不错，值得拥有</p>
    			</div>
    			<div className="evaluate">
    				<div className="evaluate-head">
    					<img src="src/assets/images/user-img0.jpg" alt=""/>
	    				<p>郭小帅 <span>2016-08-24</span></p>
	    				<p><img src="src/assets/images/xingxing.png" alt=""/></p>
    				</div>
    				<p>这个包包不错，值得拥有</p>
    			</div>
    			<div className="evaluate">
    				<div className="evaluate-head">
    					<img src="src/assets/images/user-img0.jpg" alt=""/>
	    				<p>郭小帅 <span>2016-08-24</span></p>
	    				<p><img src="src/assets/images/xingxing.png" alt=""/></p>
    				</div>
    				<p>这个包包不错，值得拥有</p>
    			</div>
    		</li>
    	</ul>
    </div>
     {/* {<!-- 加入购物车底部 -->} */}
      <div className="add-shopping">
        <a href="##" className="shopping-btn">
          <em>2</em>
          <i className="icon icon-car"></i>
        </a>
        <Link to="/confirmOrder" className="btn btn-red fr">立即购买</Link>
        <a href="##" className="btn btn-yellow fr">加入购物车</a>
        <div className="cl"></div>
      </div>
      </div>
    )
  }
}
//状态satte来的属性都在mapStateToProps里面
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
  )(productDetails);