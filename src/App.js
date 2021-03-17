import './assets/css/Register.css'
import './assets/css/Forget.css'
import './assets/css/Login.css'
import './assets/css/Footer.css'
import './Latihan/LatihanLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dashboard.css'
import './assets/css/Form.css'
import './assets/css/EmployeeDetails.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import React from "react";
import routes from "./configs/routes";
import { Provider } from 'react-redux';
import store from './configs/store';



function App() {
    return (
        <div >
            {/*<EmployeeDetails/>*/}
            <Provider store={store}>
                <Router >
                    {/* <Navigation></Navigation> */}
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
