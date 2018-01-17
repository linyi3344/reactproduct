import React, {Component} from 'react';
import {connect} from 'react-redux';// connect 打造容器组件

class ComMunity extends Component {
    constructor(){
        super();
        this.state={
            list:[],
        }
    }
    render() {
        let {send,list} = this.props; //解构了mapStateToProps传递过来的属性
        // console.log(list);
        
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
                {/* <article>
                        <div className="community-head">
                            <img src="/src/assets/images/user-img0.jpg" alt=""/>
                            <span>我是郭小帅</span>
                            <p>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                        </div>
                        <ul className="community-content">
                            <li><img src="/src/assets/images/s_sq_01.png" alt=""/></li>
                            <li><img src="/src/assets/images/s_sq_02.png" alt=""/></li>
                            <li><img src="/src/assets/images/s_sq_03.png" alt=""/></li>
                        </ul>
                        <div className="cl"></div>
                        <div className="community-foot">
                            <em>刚刚</em>
                            <i className="icon icon-share"></i>
                        </div>
                </article>

                <article>
                    <div className="community-head">
                        <img src="/src/assets/images/user-img0.jpg" alt=""/>
                        <span>我是郭小帅</span>
                        <p>[潮流服饰]:秋季大换装，就在我的小店，欢迎参观哈....</p>
                    </div>
                    <ul className="community-content">
                        <li><img src="/src/assets/images/s_sq_04.png" alt=""/></li>
                        <li><img src="/src/assets/images/s_sq_05.png" alt=""/></li>
                        <li><img src="/src/assets/images/s_sq_06.png" alt=""/></li>
                    </ul>
                    <div className="cl"></div>
                    <div className="community-foot">
                        <em>12:30</em>
                        <i className="icon icon-share"></i>
                    </div>
                </article> */}
            </div>               
        )
    }
}

//connect是个函数,调用后，返回一个函数,这个函数可以包裹UI组件,最终返回一个容器组件
// const Container = connect()(ToDoList);
// export default Container

//状态satte来的属性都在mapStateToProps里面
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