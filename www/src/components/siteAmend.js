//修改地址页面
import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'; // connect 打造容器组件

class siteAmend extends Component {
  constructor(){
    super();
    this.savemsg=this.savemsg.bind(this);
  }
  componentWillMount() {
    // console.log(this)
  }
  savemsg(){
    //获取名字
    let {send} = this.props; 
    let username = this.refs.getusername.value;
    let Phonenum = this.refs.getphonenum.value;
    let Province = this.refs.getprovince.value;
    let Address = this.refs.getaddress.value;
    let AmendMsg={username,Phonenum,Province,Address}
    send(AmendMsg)
  }
  render() {
    // console.log(this.props);

    let {topbartitle,AddAmendMsg} = this.props; //解构了mapStateToProps传递过来的属性
    return (
      <div className="margintop">
        <article className="no-pad">
          <form>

            <div className="input-row input-row2" key={AddAmendMsg.id}>
              <label>联系人</label>
              <input type="text" placeholder="请填写联系人姓名" defaultValue={AddAmendMsg.username} ref="getusername"/>
            </div>
            <div className="input-row input-row2">
              <label>手机号</label>
              <input type="text" placeholder="请填写手机号码" defaultValue={AddAmendMsg.Phonenum} ref="getphonenum"/>
            </div>
            <div className="input-row input-row2">
              <label>所在地区</label>
              <input type="text" defaultValue={AddAmendMsg.Province} ref="getprovince"/>
            </div>
            <div className="input-row input-row2">
              <label>详细地址</label>
              <input type="text" placeholder="街道" defaultValue={AddAmendMsg.Address} ref="getaddress"/>
            </div>
            <div className="setCmp-input select-Industry addSite-radio">
              <div className="payment">
                <input
                  type="radio"
                  className="radio-la"
                  value="设置为默认地址"
                  id="check-2"
                  name="doc-radio-1"/>
                <label htmlFor="check-2">设置为默认地址</label>
              </div>
            </div>
          </form>
        </article>
        <div className="add-site">
          <Link to="/site" className="btn bottom-btn" onClick={this.savemsg}>保存地址</Link>
          <Link to="/site" className="btn bottom-btn bottom-btn2">删除地址</Link>
        </div>
      </div>
    )
  }
}
// connect是个函数,调用后，返回一个函数,这个函数可以包裹UI组件,最终返回一个容器组件 const Container =
// connect()(ToDoList); export default Container 状态satte来的属性都在mapStateToProps里面
const mapStateToProps = (state, ownProps) => {
  // console.log('ownPorps:',ownProps); 外部调用容器组件是传递的props参数
  return {topbartitle: state.topbartitle, sending: state.sending,AddAmendMsg:state.AddAmendMsg}
};

//所有需要递交的action请求
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    send: (data) => {
      dispatch({type: 'MessAge', payload: data})
    },
    showLoading: () => {
      dispatch({type: 'START_LOADING'});
    },
    hideLoading: () => {
      dispatch({type: 'STOP_LOADING'});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(siteAmend);