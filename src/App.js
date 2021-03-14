import './Registration/Register.css'
import './Login/Forget.css'
import './Login/Login.css'
import './Footer/Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import React from "react";
import Navigation from "./component/Navigation";
import routes from "./configs/routes";


function App() {
    return (
        <div >
            <Router >
                <Navigation/>
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
