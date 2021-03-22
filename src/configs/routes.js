import Login from "../pages/Login/Login";
import Guide from "../pages/Guide/Guide";
import Success from './../pages/Registration/Success';
import DashboardHc from "../SideBar/hc/DashboardHc";
import HomeSideBar from "../SideBar/HomeSideBar";
import TableDashboardHc from "../SideBar/hc/TableDashboardHc";
import React from "react";
import DashboardFinance from "../SideBar/finance/DashboardFinance";
import ReimburseList from './../pages/Reimburse/ReimburseList';
import TableComponent from "../pages/Tables";
import EmployeeForm from "../pages/EditForm";
import { GradeList, GradeForm } from "../pages/Grade";
import ReimburseListFinance from "../pages/Finance/Reimburse/ReimburseListFinance";
import Error404 from './../pages/Error/Error404/Error404';


export default [
    {
        path: '/',
        component: <Login />,
        exact: true
    },
    {
        path: '/petunjuk',
        component: <Guide />,
        exact: true
    },
    {
        path: '/dashboard/hc',
        component: <DashboardHc />,
        exact: true
    },
    {
        path: '/finance/dashboard',
        component: <DashboardFinance />,
        exact: true
    },
    {
        path: '/success-register',
        component: <Success />,
        exact: true
    },
    {
        path: '/home/sidebar',
        component: <HomeSideBar />,
        exact: true
    },
    {
        path: '/dashboard/table',
        component: <TableDashboardHc />,
        exact: true
    },
    {
        path: '/finance/dashboard',
        component: <DashboardFinance />,
        exact: true
    },
    {
        path: '/finance/reimburse',
        component: <ReimburseListFinance />,
        exact: true
    },
    {
        path: '/employee',
        component: <TableComponent />,
        exact: true
    },
    {
        path: '/employee/:id/edit',
        component: <EmployeeForm />,
        exact: true
    },
    {
        path: '/hc/reimburse',
        component: <ReimburseList />,
        exact: true
    },
    {
        path: '/hc/grade',
        component: <GradeList />,
        exact: true
    },
    {
        path: '/hc/grade/:id',
        component: <GradeForm />,
        exact: true
    },
    {
        path: '*',
        component: <Error404/>,
        exact: true
    }

]