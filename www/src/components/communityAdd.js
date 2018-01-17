import React, {Component} from 'react';
import {Link, Redirect} from 'react-router';
import {connect} from 'react-redux';// connect 打造容器组件

class communityAdd extends Component {
    constructor(){
        super();
        this.btnColor=this.btnColor.bind(this);
        this.sendObj=this.sendObj.bind(this);
    }
    componentWillMount(){
        // console.log(this)
    }
    btnColor(){
       let inputlength = document.querySelector('.Pu-text textarea').value.length;
    //    console.log(inputlength);
    //    console.log(document.querySelector('.btn-forbidden').style.backgroundColor);
       //有长度的时候，点亮提交按钮
       inputlength?document.querySelector('.btn-forbidden').style.backgroundColor="#ed394a":document.querySelector('.btn-forbidden').style.backgroundColor="#ccc";
  
    }
    sendObj(){
        let {send} = this.props; 
        let title=this.refs.ipt1.value;
        let username="易帅";
        let time = "15:44";
        let obj = {username:username,title:title,time:time};
        console.log(obj);
        send(obj)
    }

    render() {
        // console.log(this.props);

        
        let {topbartitle,send} = this.props; //解构了mapStateToProps传递过来的属性
        return (
            <div className="margintop">{/*本条属性设置了margin-top：50px*/}
                <article>
                    <div className="c-Publish">
                    <div className="Pu-text">
                        <textarea rows="4" maxLength="50" onChange = {this.btnColor} placeholder="这一刻的想法(50字内)..." ref="ipt1"></textarea>  
                    </div>
                    <div className="Pu-img">
                        <a href="javascript:;" className="Pu-Add-img">
                        <img src="/src/assets/images/f_addimg.png" alt=""/>
                        <input type="file" accept="image/*"/>
                        </a>
                    </div>
                    </div>
                    <div className="submit-btn">
                    <Link to="/community"><button className="btn btn-max btn-forbidden" onClick={this.sendObj}>提交</button></Link>
                    </div>
                </article>
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
    return {

    }
  };
  
  //所有需要递交的action请求
  const mapDispatchToProps=(dispatch,ownProps)=>{
    return {
      send:(data)=>{dispatch({type:'CommunityAddData',payload:data})},
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
  )(communityAdd);