import { connect } from 'react-redux';// connect 打造容器组件
import React, { Component } from 'react';
class ComMunity extends Component {
    render() {
        let {send,list} = this.props; //解构了mapStateToProps传递过来的属性
        return (
            <div className="margin-bottom">
                {
                    list.map((item,index)=>{
                        return(
                        <article key={index}>
                            <div className="community-head">
                                <img src="/src/assets/images/user-img0.jpg" alt=""/>
                                <span>{item.username}</span>
                                <p>{item.title}</p>
                            </div>
                            <ul className="community-content">
                                <li><img src="/src/assets/images/s_sq_01.png" alt=""/></li>
                                <li><img src="/src/assets/images/s_sq_02.png" alt=""/></li>
                                <li><img src="/src/assets/images/s_sq_03.png" alt=""/></li>
                            </ul>
                            <div className="cl"></div>
                            <div className="community-foot">
                                <em>{item.time}</em>
                                <i className="icon icon-share"></i>
                            </div>
                        </article>)
                    })
                }
                
            </div>               
        )
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        this.props.showLoading();
        let url = 'http://localhost:3000/community';
       
        const headers = {
            "Content-Type": 'application/json'
          };
        fetch(url,{
            method:"post",
            mode:"cors",
            credentials:'include',
            headers,
        }).then(
            res=>res.json()
        ).then(
            data=>{
                console.log(data,"数据请求到手，可以在通过状态管理修改数据");
                
                this.props.hideLoading();
                // this.setState({
                //     data:data[0]
                // })
            }    
        ).catch(
            error=>console.log(error,"getdata fail")
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    // console.log('ownPorps:',ownProps);   //外部调用容器组件是传递的props参数
    // console.log(state);
    return {
        list:state.list,
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
  )(ComMunity);