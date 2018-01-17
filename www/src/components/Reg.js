import React from "react";
import {Link, hashHistory} from 'react-router';
import reg from'../assets/css/loginandreg.css';

class Reg extends React.Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
        this.iptUsername=this.iptUsername.bind(this)
        this.iptPassword=this.iptPassword.bind(this)
        this.zc=this.zc.bind(this)
    }
    zc(){
        console.log('数据请求成功')
        if(this.state.password != ''){
            let url = 'http://localhost:3000/reg'
            var params = new URLSearchParams();  //pollfill对象 全局填充
            params.append("username", this.state.username);
            params.append("password", this.state.password);
            fetch(
              url,
              {
                method:'POST',
                // headers:{"Content-type":"application/json"},
                body:params
              }
          ).then(
              res=>{
                  res.json().then(
                data=>{
                    console.log(data)
                    
                }
            )
              }
          )
        } 
    }
    iptUsername(ev){
        this.setState({
            username:ev.target.value  
        })
    }
    iptPassword(ev){
        this.setState({
            password:ev.target.value  
        })
    }
    render() {
        return (
            <div>
                <div>
                    <header>
                        <div className="header">
                            <Link to="/user">
                                <i className="icon icon-return"></i>
                            </Link>
                            <h1>注册页</h1>
                        </div>
                    </header>
                    <div></div>
                </div>

                <div className="content margintop">
                    <p className="fhbtn">
                        <a
                            href="javascript:;"
                            onClick={() => {
                            hashHistory.go(-1)
                        }}></a>
                    </p>
                    <h1></h1>
                    <div className="login-box">
                        <p className="lsolid"></p>
                        <div className="login">
                            <Link to="/login">前往登录</Link>
                        </div>
                        <p className="rsolid"></p>
                    </div>
                    <ul>
                        <li className="lifirst">
                            <input type="text" value={this.state.username} onChange={this.iptUsername}/>
                            <span>帐号</span>
                        </li>
                        <li>
                            <input type="text" value={this.state.password} onChange={this.iptPassword}/>
                            <span>密码</span>
                        </li>
                    </ul>
                    <div className="footbox">
                        <input type="button" value="注 册" className="login-btn" onClick={this.zc}/>
                        <a href="javascript:;" className="tishi">忘记密码？</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Reg;