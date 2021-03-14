import Home from "../Home/Home";
import Register from "../Registration/Register";
import Login from "../Login/Login";
import Guide from "../Guide/Guide";
import Dashboard from "../component/Dashboard";

export default  [
    {
        path:'/',
        component: <Home/>,
        exact: true
    },
    {
        path:'/register',
        component: <Register/>,
        exact: true
    },
    {
        path:'/login',
        component: <Login/>,
        exact: true
    },
    {
        path: '/petunjuk',
        component: <Guide/>,
        exact: true
    },
    {
        path: '/dahboard',
        component: <Dashboard/>,
        exact: true
    }

]