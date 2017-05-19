console.log(12344)
import React from 'react'
import {Router,hashHistory,browserHistory} from 'react-router'
import routerConfig from './routerConfig'
console.log(Router)
console.log(hashHistory)
// const routerConfig = []
console.log(routerConfig)
export default ()=>(
    <Router history={hashHistory} routes={routerConfig}>
    </Router>
)
