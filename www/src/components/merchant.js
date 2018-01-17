import React from "react";
import {Link} from 'react-router';

class merchant extends React.Component{
  render(){
    return(
      <div>
        <div className="merchant">
        <img src="/src/assets/images/sj_logo2.png" alt=""/>
        <p>海绵包包</p>
        <span className="btn">联系客服</span>
    </div>
    <div className="merchant-notice">
        <p>上新时间：每周二上新,默认圆通快递，全店默认两件包邮</p>
    </div>
    <div className="commodity-box commodity-box2">
        <ul className="commodity">
            <li>
                <Link to="/productDetails">
                    <img src="/src/assets/images/d_sp_01.jpg" alt=""/>
                    <span>首款精美海绵单肩包包</span>
                    <span className="price">￥68.00 <s>$75.00</s></span>
                </Link>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="/src/assets/images/d_sp_02.png" alt=""/>
                    <span>百搭学院风英伦背包单双肩包</span>
                    <span className="price">￥1.00 <s>$176.00</s></span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="/src/assets/images/d_sp_03.png" alt=""/>
                    <span>百搭学院风英伦背包单双肩包</span>
                    <span className="price">￥1.00 <s>$176.00</s></span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="/src/assets/images/d_sp_04.png" alt=""/>
                    <span>百搭学院风英伦背包单双肩包</span>
                    <span className="price">￥1.00 <s>$176.00</s></span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="/src/assets/images/d_sp_05.png" alt=""/>
                    <span>百搭学院风英伦背包单双肩包</span>
                    <span className="price">￥1.00 <s>$176.00</s></span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <img src="/src/assets/images/d_sp_06.png" alt=""/>
                    <span>百搭学院风英伦背包单双肩包</span>
                    <span className="price">￥1.00 <s>$176.00</s></span>
                </a>
            </li>
        </ul>   
    </div>
      </div>
	  )
  }
}
export default merchant