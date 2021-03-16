import Register from "../pages/Registration/Register";
import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
// import Dashboard from "../component/Dashboard";
import Success from './../pages/Registration/Success';
import Dashboard from "../SideBar/Dashboard";
import FormElement from "../pages/Registration/Form/FormElement";
import HomeSideBar from "../SideBar/HomeSideBar";
import Home from "../pages/Home/Home";
import TableDashboar from "../SideBar/TableDashboard";
import TableDashboard from "../SideBar/TableDashboard";


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
        path: '/dashboard',
        component: <Dashboard/>,
        exact: true
    },
    {
        path: '/success-register',
        component: <Success/>,
        exact: true 
    }
    {
        path: '/home/sidebar',
        component: <HomeSideBar/>,
        exact: true
    },
    {
        path: '/dashboard/table',
        component: <TableDashboard/>,
        exact: true
    }

]