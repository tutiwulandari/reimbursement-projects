import Login from "../pages/Login/Login";
import Success from '../pages/registration/Success';
import DashboardHomeHc from "../dashboard/dashboardHc/DashboardHomeHc";
import TableDashboardHc from "../dashboard/dashboardHc/TableDashboardHc";
import React from "react";
import DashboardFinance from "../dashboard/dashboardFinance/DashboardFinance";
import TableDashboardFinance from "../dashboard/dashboardFinance/TableDashboardFinance";
import ReimburseList from '../pages/reimburse/ReimburseList';
import ReimburseForm from '../pages/reimburse/ReimburseForm';
import EmployeeList from "../pages/Tables";
import EmployeeForm from "../pages/EditForm";
import DashboardHc from "../dashboard/dashboardHc/DashboardHc";
import Verifikasi from "../pages/Tables/Verifikasi";


export default  [
    {
        path:'/',
        component: <Login/>,
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
        component: <DashboardHomeHc/>,
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