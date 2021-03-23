import Login from "../pages/login/Login";
import React from "react";
import RoutesHc from "../dashboard/RoutesHc";
import ResetPassword from "../pages/resetPassword";
import RoutesFinance from "../dashboard/RoutesFinance";
import EmployeeForm from "../pages/Employee/editForm/EmployeeForm"
import ListEmployee from "../pages/Employee/listForm/ListEmployee";
import ReimburseList from "../pages/reimburse/ReimburseList";
import DetailContract from "../pages/detailContract/listForm/DetailContract";
import Success from "../pages/registration/Success";
import {ReimburseForm} from "../pages/reimburse";
import DetailContractForm from "../pages/detailContract/editForm/DetailContractForm"



export default  [
    {
        path:'/',
        component: <Login/>,
        exact: true
    },
    {
        path: '/dashboard/hc',
        component:<RoutesHc/>,
        exact: true
    },
    {
        path: '/dashboard/finance',
        component:<RoutesFinance/>,
        exact: true
    },
    {
        path: '/success-register',
        component: <Success/>,
        exact: true
    },
    {
        path: '/dashboard/hc/employee',
        component: <ListEmployee/>,
        exact: true
    },
    {
        path: '/employee/:id/edit',
        component: <EmployeeForm/>,
        exact: true
    },
    {
        path: '/dashboard/hc/reimburse',
        component: <ReimburseList/>,
        exact: true
    },
    {
        path: '/hc/reimburse/:id',
        component: <ReimburseForm/>,
        exact: true
    },
    {
        path: '/hc/resetpassword',
        component: {ResetPassword},
        exact: true
    },
    {
        path: '/dashboard/hc/contract',
        component: <DetailContract/>,
        exact: true
    },
    {
        path: '/contract/:id',
        component: <DetailContractForm/>,
        exact: true
    }


]

