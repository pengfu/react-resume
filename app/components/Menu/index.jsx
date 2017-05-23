import React from 'react'
import {Link} from 'react-router'
import style from './style.css'

export default class extends React.Component {
    render(){
        return (
            <div className={style.menu}>
                {/*<div className="avatar" >
                    <img src={avatar}/>
                    <p>测试</p>
                    <p><i className="fontello icon-wechat"></i>46565</p>
                </div>*/}
                <div className={style['menu-list']}>
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
        )
    }
}