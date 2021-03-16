import './assets/css/Register.css'
import './assets/css/Forget.css'
import './assets/css/Login.css'
import './component/Footer/Footer.css'
import './Latihan/LatihanLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dashboard.css'
import './assets/css/Form.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import React from "react";
import routes from "./configs/routes";



function App() {
    return (
        <div >
            {/*<FormElement/>*/}

            <Router >
                <Switch style={{paddingLeft:"0"}}>
                    {routes.map((route, index) =>
                    <Route key={index} path={route.path} exact>
                        {route.component}
                    </Route>)}
                </Switch>
            </Router>
        </div>
    );
}

export default App;
