import React from 'react'
import style from './style.css'
export default class extends React.Component {
    render(){

        return (
            <div className={style.content}>
                <div className={style['content-title']}>实例概述</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )

    }
}