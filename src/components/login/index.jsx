import React,  { Component } from 'react';
import './index.less';
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="login-wrap flex f-dir-top f-cross-center">
                <div className="login-title flex f-main-center f-cross-center">Login</div>
                <div className="user-name-wrap flex f-main-center f-cross-center">
                    <div className="user-name">UserName</div>
                    <input type="text" className="name-input"/>
                </div>
                <div className="user-name-wrap password-wrap flex f-main-center f-cross-center">
                    <div className="user-name password-title ">Password</div>
                    <input type="password" className="password-input name-input"/>
                </div>
                <div className="login-button-wrap flex f-main-right">
                    <div className="login-button flex f-main-center f-cross-center">Login</div>
                </div>
            </div>
        );
    }
}