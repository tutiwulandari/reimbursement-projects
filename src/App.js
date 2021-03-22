import './assets/css/Register.css'
import './assets/css/Reimburse.css'
import './assets/css/Forget.css'
import './assets/css/Login.css'
import './assets/css/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dashboard.css'
import './assets/css/Form.css'
import './assets/css/EmployeeDetails.css'
import './assets/css/CarouselElement.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import React from "react";
import routes from "./configs/routes";
import { Provider } from 'react-redux';
import store from './configs/store';
import TableComponent from "./pages/Tables";
import Login from './pages/Login/Login';


function App() {
    return (
        <div >
            {/*<TableComponent/>*/}

            <Provider store={store}>
                <Router >
                    <Switch style={{ paddingLeft: "0" }}>
                        {
                            routes.map((route, index) =>
                                <Route key={index} path={route.path} exact>
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
