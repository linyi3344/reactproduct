import React, {Component} from 'react';
import {Link} from 'react-router';

class footbar extends Component {
    constructor(){
        super();
        this.state={
          bLoading:false
        }
      }
    render() {
        return (
            <div>
                <div>
                    <header>
                        <div className="header">
                            <Link to="/home">
                                <i className="icon icon-return"></i>
                            </Link>
                            <h1>分类</h1>
                        </div>
                    </header>
                    <div className="classify"></div>
                </div>
                <article className="classify-box">
                    <div className="classify-left fl">
                        <ul id="tab_btn">
                            <li className="pick">
                                <a href="javascript:;">潮流女装</a>
                            </li>
                            <li>
                                <a href="javascript:;">潮流男装</a>
                            </li>
                            <li>
                                <a href="javascript:;">居家小商品</a>
                            </li>
                            <li>
                                <a href="javascript:;">品牌鞋类</a>
                            </li>
                            <li>
                                <a href="javascript:;">皮具箱包</a>
                            </li>
                            <li>
                                <a href="javascript:;">内衣针织</a>
                            </li>
                            <li>
                                <a href="javascript:;">儿童玩具</a>
                            </li>
                            <li>
                                <a href="javascript:;">母婴用品</a>
                            </li>
                            <li>
                                <a href="javascript:;">电子数码</a>
                            </li>
                            <li>
                                <a href="javascript:;">办公用品</a>
                            </li>
                            <li>
                                <a href="javascript:;">体育用品</a>
                            </li>
                        </ul>
                    </div>
                    <div className="classify-right">
                        <ul>
                            <li className="tab_content show">
                                <a href="javascript:;">
                                    <img src="src/assets/images/fl_02.png" alt=""/>
                                    <span>衣衫</span>
                                </a>
                                <a href="javascript:;">
                                    <img src="src/assets/images/fl_03.png" alt=""/>
                                    <span>半身裙</span>
                                </a>
                                <a href="javascript:;">
                                    <img src="src/assets/images/fl_04.png" alt=""/>
                                    <span>裤子</span>
                                </a>
                                <a href="javascript:;">
                                    <img src="src/assets/images/fl_05.png" alt=""/>
                                    <span>卫衣</span>
                                </a>
                                <a href="javascript:;">
                                    <img src="src/assets/images/fl_06.png" alt=""/>
                                    <span>风衣</span>
                                </a>
                                <a href="javascript:;">
                                    <img src="src/assets/images/fl_07.png" alt=""/>
                                    <span>高帮鞋</span>
                                </a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">2</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">3</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">4</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">5</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">6</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">7</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">8</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">9</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">10</a>
                            </li>
                            <li className="tab_content">
                                <a href="javascript:;">11</a>
                            </li>
                        </ul>
                    </div>
                </article>

            </div>
        )
    }
}

export default footbar;