import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
import Success from './../pages/Registration/Success';
import DashboardHc from "../SideBar/hc/DashboardHc";
import HomeSideBar from "../SideBar/HomeSideBar";
import TableDashboardHc from "../SideBar/hc/TableDashboardHc";
import React from "react";
import DashboardFinance from "../SideBar/finance/DashboardFinance";
import TableDashboardFinance from "../SideBar/finance/TableDashboardFinance";
import ReimburseList from './../pages/Reimburse/ReimburseList';
import ReimburseForm from './../pages/Reimburse/ReimburseForm';
import TableComponent from "../pages/Tables";
import EmployeeForm from "../pages/EditForm";


export default  [
    {
        path:'/',
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
        component: <TableComponent/>,
        exact: true
    },
    {
        path: '/employee/:id/edit',
        component: <EmployeeForm/>,
        exact: true
    },
    {
        path: '/hc/reimburse',
        component: <ReimburseList/>,
        exact: true
    },
    {
        path: '/hc/reimburse/:id',
        component: <ReimburseForm/>,
        exact: true
    },

]