import './assets/css/Register.css'
import './assets/css/Reimburse.css'
import './assets/css/Forget.css'
import './assets/css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dashboard.css'
import './assets/css/Form.css'
import './assets/css/EmployeeDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/CarouselElement.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Provider } from 'react-redux';
import store from './configs/store';
import routes from "./configs/routes";
import UnitList from "./component/pagination/UnitList";
import TableComponent from "./pages/Tables";
import Login from './pages/Login/Login';
import Error404 from './pages/Error/Error404/Error404';


function App() {


    const NoMatch = ({ location }) => (
        <h3>No match for <code>{location.pathname}</code></h3>
    )

    return (
        <div >
            <Provider store={store}>
                <Router>
                    <Switch style={{ paddingLeft: "0" }}>
                        {
                            routes.map((route, index) =>
                                <Route key={index} path={route.path} exact={route.exact}>
                                    {route.component}
                                </Route>)
                        }
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
