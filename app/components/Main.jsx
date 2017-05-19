import React from 'react'
// require('../style/fontello/css/fontello.css')
require('../style/app.css')
import avatar from '../images/changsu_photo.png'
import {Link} from 'react-router'
export default class extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="menu">
                    <div className="avatar" style={{display:'none'}}>
                        <img src={avatar}/>
                        <p>测试</p>
                        <p><i className="fontello icon-wechat"></i>46565</p>
                    </div>
                    <div className="menu-list">
                        <ul>
                            <li>
                                <i className="fontello icon-tasks"></i>
                                <Link to="/">清风啊啊1</Link>
                            </li>
                            <li>
                                <i className="fontello icon-history"></i>
                                <Link to="/history">清风啊啊1</Link>
                            </li>
                            <li>
                                <i className="fontello icon-graduation-cap"></i>
                                <Link to="/graduation">清风啊啊1</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">实例概述</div>
                    <div>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}