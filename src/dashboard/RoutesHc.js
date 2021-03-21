import Header from "./dashboardHc/Header";
import Menu from "./dashboardHc/Menu";
import Content from "./dashboardHc/Content";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from "./dashboardHc/Footer";
import {ReimburseList} from "../pages/reimburse";
import EmployeeForm from "../pages/Employee/EditForm";

function RoutesHc() {
    return(
        <div>
            <Header/>
            <Menu />
            <Router>
                <Switch>
                    {/*<Route path="/dashboard/hc/employee" component={EmployeeList} exact/>*/}
                    <Route path="/dashboard/hc/reimburse" component={ReimburseList} exact/>
                    <Route path="/dashboard/hc" component={Content} exact/>
                    <Route path="/dashboard/employee/:id/edit" component={EmployeeForm} exact/>
                </Switch>
            </Router>
            <Footer />
        </div>
    )
}
export default RoutesHc