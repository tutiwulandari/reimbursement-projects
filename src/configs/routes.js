import Home from "../pages/Home/Home";
import Register from "../pages/Registration/Register";
import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
import Dashboard from "../component/Dashboard";
import Success from './../pages/Registration/Success';

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
    },
    {
        path: '/success-register',
        component: <Success/>,
        exact: true
    }

]