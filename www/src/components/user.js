import React, {Component} from 'react';
import {Link} from 'react-router';
class User extends Component {
    render() {
        return (
            <div>
                <article className="user-head">
                    <div className="user-bg-img">
                        <img src="/src/assets/images/user_bg.png" alt=""/>
                        <div className="user-img">
                        <Link to="reg">
                            <img src="/src/assets/images/user-img0.jpg" alt=""/>
                        </Link>
                        </div>
                    </div>
                    <div className="user-order">
                        <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/indent.png" alt=""/>我的订单
                            <span>查看所有订单</span>
                            <i className="icon icon-select"></i>
                        </a>
                    </div>
                    <div className="user-nav">
                        <a href="index.html">
                            <i className="icon icon-f1"></i>
                            待付款
                        </a>
                        <a href="javascript:;">
                            <i className="icon icon-f2"></i>
                            待收货
                        </a>
                        <a href="javascript:;">
                            <i className="icon icon-f3"></i>
                            已收货
                        </a>
                        <a href="javascript:;">
                            <i className="icon icon-f4"></i>
                            已取消
                        </a>
                        <a href="javascript:;">
                            <i className="icon icon-f5"></i>
                            售后
                        </a>
                    </div>
                </article>
                <article className="user-list">
                    <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/collct.png" alt=""/>我的收藏
                        <span>0</span>
                        <i className="icon icon-select"></i>
                    </a>
                    <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/service.png" alt=""/>联系客服<i className="icon icon-select"></i>
                    </a>
                    <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/about.png" alt=""/>关于我们<i className="icon icon-select"></i>
                    </a>
                    <a href="javascript:;" className="select-btn select-btn-t"><img src="/src/assets/images/set.png" alt=""/>设置<i className="icon icon-select"></i>
                    </a>
                </article>
            </div>
        )
    }
}

export default User;