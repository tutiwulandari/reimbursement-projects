import Register from "./component/Register";
import './style/Register.css'
import './style/Login.css'
import './style/Forget.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import Login from "./component/Login";
import React from "react";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import Petunjuk from "./component/Petunjuk";
import Dashboard from "./component/Dashboard";


function App() {
    return (
        <>

            <BrowserRouter>
                <Switch>
                    <Navigation/>
                    <Route exact path = "/" component={Home}/>
                    <Route exact path = "/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/petunjuk" component={Petunjuk}  />
                    <Route exact path="/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
