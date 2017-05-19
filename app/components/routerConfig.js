/**
 * Created by chang_su on 2017/5/18.
 */
import Main from './Main.jsx'
console.log(Main)
import Tasks from './tasks/index.jsx'
import History from './history/index.jsx'
import Graduation from './graduation/index.jsx'

export default [
    {
        path: '/',
        component: Main,
        indexRoute: { component: Tasks },
        childRoutes: [
            { path: 'history', component: History },
            { path: 'graduation', component: Graduation },
        ]
    }
]
