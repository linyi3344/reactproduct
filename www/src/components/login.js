import React from "react";
import {Link} from 'react-router';
import login from'../assets/css/loginandreg.css';
class Login extends React.Component {
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
        this.iptUsername=this.iptUsername.bind(this)
        this.iptPassword=this.iptPassword.bind(this)
        this.dl=this.dl.bind(this)
    }
    dl(){
        console.log('数据请求成功')
        if(this.password != ''){
            let url = 'http://localhost:3000/user1/login'
            fetch(
              url,
              {
                method:'POST',
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({username:this.state.username,password:this.state.password})     
              }
          ).then(
              res=>res.json().then(
                data=>{
                    console.log(data)
                    if(data.error==0){
                      alert(data.msg);
                      // this.props.router.push({pathname:'/login'})
                    localStorage.setItem("Uid",this.state.username)
                    hashHistory.push('/user')
                    }else{
                        alert(data.msg)
                    }
                }
            )
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
                            <h1>登陆页</h1>
                        </div>
                    </header>
                    <div></div>
                </div>
                <div className="content margintop">
                    <p className="fhbtn">
                        <a href="javascript:window.history.go(-1);"></a>
                    </p>
                    <h1></h1>
                    <div className="login-box">
                        <p className="lsolid"></p>
                        <div className="login">
                            <Link to="/reg">前往注册</Link>
                        </div>
                        <p className="rsolid"></p>
                    </div>
                    <ul>
                        <li className="lifirst">
                            <input type="text" defaultValue="" ref="iptUsername"/>
                            <span>帐号</span>
                        </li>
                        <li>
                            <input type="text" defaultValue="" ref="iptPassword"/>
                            <span>密码</span>
                        </li>
                    </ul>
                    <div className="footbox">
                        <input type="button" value="登 录" className="login-btn"/>
                        <a href="javascript:;" className="tishi">忘记密码？</a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;