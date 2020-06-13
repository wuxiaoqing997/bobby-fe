import React,  { Component } from 'react';
import './index.less';
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="register-wrap flex f-dir-top f-cross-center">
                <div className="register-title flex f-main-center f-cross-center">Sign In</div>
                <div className="user-name-wrap flex f-main-center f-cross-center">
                    <div className="user-name">UserName</div>
                    <input type="text" className="name-input"/>
                </div>
                <div className="user-name-wrap flex f-main-center f-cross-center">
                    <div className="user-name">Tel</div>
                    <input type="number" className="name-input"/>
                </div>
                <div className="user-name-wrap password-wrap flex f-main-center f-cross-center">
                    <div className="user-name password-title ">Password</div>
                    <input type="password" className="password-input name-input"/>
                </div>
                <div className="user-name-wrap password-wrap flex f-main-center f-cross-center">
                    <div className="user-name password-title ">RePassword</div>
                    <input type="password" className="password-input name-input"/>
                </div>
                <div className="register-button-wrap flex f-main-right">
                    <div className="register-button flex f-main-center f-cross-center">Sign In</div>
                </div>
            </div>
        );
    }
}