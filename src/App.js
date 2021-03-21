import './assets/css/Register.css'
import './assets/css/Reimburse.css'
import './assets/css/Forget.css'
import './assets/css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dashboard.css'
import './assets/css/Form.css'
import './assets/css/EmployeeDetails.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Provider } from 'react-redux';
import store from './configs/store';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import routes from "./configs/routes";


function App() {
    return (
        <div >
            <Provider store={store}>
                <Router >
                    <Switch style={{ paddingLeft: "0" }}>
                        {routes.map((route, index) =>
                            <Route key={index} path={route.path} exact>
                                {route.component}
                            </Route>)}
                    </Switch>
                </Router>
            </Provider>


        </div>
    );
}

export default App;
