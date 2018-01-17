import React, {Component} from 'react';
import Slider from './slider';
import {Link} from 'react-router';
import {connect} from 'react-redux'; // connect 打造容器组件

class home extends Component {
    componentDidMount() {
        this
            .props
            .router
            .replace('/home');
        let {getdata,showLoading,hideLoading,getProdata} = this.props;
        getProdata();
        getdata();
    }
    sendProMsg(item){
        let {send} = this.props;
        send(item)
    }
    render() {
        let {homelist,productlist, getdata} = this.props; 
        return (

            <div className="home">
                <Slider></Slider>
                <nav>
                    <div className="nav-box">
                        {homelist.map((item, index) => {
                            return (
                                <Link to={item.href} key={index}><img src={item.src} alt=""/>
                                    <span>{item.title}</span>
                                </Link>
                            )
                        })}

                    </div>
                </nav>

                <article>
                    <h1>商城客户</h1>
                    <div className="client">
                        <Link to="/merchant"><img src="/src/assets/images/scyh0.jpg" alt=""/>
                            <span>海绵包包</span>
                        </Link>
                        <a href="merchant.html"><img src="/src/assets/images/scyh3.png" alt=""/>
                            <span>韩国代购</span>
                        </a>
                        <a href="merchant.html"><img src="/src/assets/images/scyh4.png" alt=""/>
                            <span>ARC潮店</span>
                        </a>
                        <a href="merchant.html"><img src="/src/assets/images/scyh1.png" alt=""/>
                            <span>欧力女装</span>
                        </a>
                    </div>
                </article>

                <article className="cuxiao">
                    <h1>精选促销</h1>
                </article>
                <div className="commodity-box">
                    <ul className="commodity">
                        {
                            productlist.map((item,index)=>{
                                return(
                                <li key={index} onClick={()=>{this.sendProMsg(item)}}>
                                    <Link to="/productDetails" >
                                        <img src={item.src} alt=""/>
                                        <span>{item.title}</span>
                                        <span className="price">￥{item.price}.00
                                            <s>${item.oldprice}.00</s>
                                        </span>
                                    </Link>
                                </li>)
    
                            })
                        }
                        
                    </ul>
                </div>
            </div>
        )
    }
}

//状态satte来的属性都在mapStateToProps里面
const mapStateToProps = (state, ownProps) => {
    return {topbartitle: state.topbartitle, sending: state.sending, homelist: state.homelist,productlist: state.productlist}
};

//所有需要递交的action请求
const mapDispatchToProps = (dispatch, ownProps) => {
    // let {showLoading,hideLoading} = this.props;
    return {
        send:(data)=>{dispatch({type:'SendProMsg',payload:data})},
        showLoading: () => {
            dispatch({type: 'START_LOADING'});
        },
        hideLoading: () => {
            dispatch({type: 'STOP_LOADING'});
        },
        getProdata: (payload) => {
            // this.props.showLoading();
            //抓数据
            let url = `/data/product.data`;
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    
                    // this.props.hideLoading();
                dispatch({type: 'GetProductData', payload: data})
            })
        },

        getdata: (payload) => {
            // this.props.showLoading();
            //抓数据
            let url = `/data/index.data`;
            fetch(url)
                .then(res => res.json())
                .then((data) => {
                    // this.props.hideLoading();
                dispatch({type: 'GetData', payload: data})
            })
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(home);