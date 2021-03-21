import Login from "../pages/login/Login";
import React from "react";
import RoutesHc from "../dashboard/RoutesHc";
import ResetPassword from "../pages/resetPassword";
import RoutesFinance from "../dashboard/RoutesFinance";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeeForm from "../pages/Employee/EditForm/EmployeeForm"
import EmployeeList from "../pages/tables/EmployeeList";
import ListEmployee from "../component/ListEmployee";
import ReimburseList from "../pages/reimburse/ReimburseList";
import DetailContract from "../pages/detailContract/DetailContract";


const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Login} exact/>
                <Route path="/dashboard/hc" component={RoutesHc} exact/>
                <Route path="/dashboard/hc/reimburse" component={ReimburseList} exact/>
                <Route path="/dashboard/hc/employee" component={ListEmployee} exact/>
                <Route path="/dashboard/finance" component={RoutesFinance} exact/>
                <Route path="/hc/resetpassword" component={ResetPassword} exact/>
                <Route path="/employee/:id/edit" component={EmployeeForm} exact/>
                <Route path="/dashboard/hc/contract" component={DetailContract} exact/>


            </Switch>
        </Router>
    )
}
export default Routes;