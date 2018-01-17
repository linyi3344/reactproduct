import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux'; // connect 打造容器组件

class siteadd extends Component {
  constructor(){
    super();
    this.savemsg=this.savemsg.bind(this);
  }
  componentWillMount() {
    // console.log(this)
  }
  savemsg(){
    let {send} = this.props; 
    let username=this.refs.username.value;
    let Phonenum=this.refs.Phonenum.value;
    let Province=this.refs.Province.value;
    let Address=this.refs.Address.value;
    let radioClick=this.refs.radioClick.value;
    let AddressMsg={username,Phonenum,Province,Address,radioClick}
    send(AddressMsg)
  }
  render() {
    // console.log(this.props);

    let {topbartitle} = this.props; //解构了mapStateToProps传递过来的属性
    return (
      <div className="siteadd">
        <article className="no-pad">
          <form>
            <div className="input-row">
              <label>联系人</label>
              <input type="text" placeholder="请填写联系人姓名" ref="username"/>
            </div>
            <div className="input-row">
              <label>手机号</label>
              <input type="text" placeholder="请填写手机号码" ref="Phonenum"/>
            </div>
            <div className="input-row">
              <label>所在地区</label>
              <input type="text" ref="Province"/>
            </div>
            <div className="input-row">
              <label>详细地址</label>
              <input type="text" placeholder="街道" ref="Address"/>
            </div>
            <div className="setCmp-input select-Industry addSite-radio">
              <div className="payment">
                <input
                  type="radio"
                  className="radio-la"
                  value="设置为默认地址"
                  id="check-2"
                  name="doc-radio-1"
                  ref="radioClick"
                  />
                <label  htmlFor="check-2">设置为默认地址</label>
              </div>
            </div>
          </form>
        </article>
        <div className="add-site">
          <Link to="/site" className="btn bottom-btn" onClick={this.savemsg}>保存地址</Link>
        </div>
      </div>
    )
  }
}
// connect是个函数,调用后，返回一个函数,这个函数可以包裹UI组件,最终返回一个容器组件 const Container =
// connect()(ToDoList); export default Container 状态satte来的属性都在mapStateToProps里面
const mapStateToProps = (state, ownProps) => {
  // console.log('ownPorps:',ownProps);   //外部调用容器组件是传递的props参数
  return {topbartitle: state.topbartitle, sending: state.sending}
};

//所有需要递交的action请求
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    send: (data) => {
      dispatch({type: 'AddressMsg', payload: data})
    },
    showLoading: () => {
      dispatch({type: 'START_LOADING'});
    },
    hideLoading: () => {
      dispatch({type: 'STOP_LOADING'});
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(siteadd);