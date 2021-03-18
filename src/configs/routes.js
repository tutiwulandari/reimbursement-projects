import Register from "../pages/Registration/Register";
import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
import Success from './../pages/Registration/Success';
import DashboardHc from "../SideBar/hc/DashboardHc";
import HomeSideBar from "../SideBar/HomeSideBar";
import Home from "../pages/Home/Home";
import TableDashboardHc from "../SideBar/hc/TableDashboardHc";
import GlassesClaims from "../SideBar/FormClaims/GlassesClaims";
import React from "react";
import BirthingClaims from "../SideBar/FormClaims/BirthingClaims";
import TrainingClaims from "../SideBar/FormClaims/TrainingClaims";
import OfficeTravelClaims from "../SideBar/FormClaims/OfficeTravelClaims";
import InsuranceClaims from "../SideBar/FormClaims/InsuranceClaims";
import DashboardFinance from "../SideBar/finance/DashboardFinance";
import TableDashboardFinance from "../SideBar/finance/TableDashboardFinance";
import EditEmployee from "../pages/Employee/EditEmployee"
import EmployeeList from "../pages/Employee/EmployeeList"



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
        path: '/dashboard/hc',
        component:<DashboardHc/>,
        exact: true
    },
    {
        path: '/dashboard/finance',
        component:<DashboardFinance/>,
        exact: true
    },
    {
        path: '/success-register',
        component: <Success/>,
        exact: true 
    },
    {
        path: '/home/sidebar',
        component: <HomeSideBar/>,
        exact: true
    },
    {
        path: '/dashboard/table',
        component: <TableDashboardHc/>,
        exact: true
    },
    {
        path: '/dashboard/table2',
        component: <TableDashboardFinance/>,
        exact: true
    },

    {
        path: '/employee',
        component: <EmployeeList/>,
        exact: true
    },
    {
        path: '/employee/:id/edit',
        component: <EditEmployee/>,
        exact: true
    }

]