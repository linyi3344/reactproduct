import React, {Component} from 'react';
import {Link} from 'react-router';
class footbar extends Component {
    render() {
        return (
            <footer>
                <Link to="/home" activeClassName="pick">
                    <i className="icon icon-f1"></i>
                    首页
                </Link>
                <Link to="/community" activeClassName="pick">
                    <i className="icon icon-f2"></i>
                    社区
                </Link>
                <Link to="/ShopCar" activeClassName="pick">
                    <i className="icon icon-f3"></i>
                    购物车
                </Link>
                <Link to="/user" activeClassName="pick">
                    <i className="icon icon-f4"></i>
                    我
                </Link>
            </footer>
        )
    }
}

export default footbar;