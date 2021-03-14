import Register from "./Registration/Register";
import './Registration/Register.css'
import './Login/Forget.css'
import './Login/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import Switch from "react-bootstrap/Switch";
import Login from "./Login/Login";
import React from "react";
import Navigation from "./component/Navigation";
import Home from "./Home/Home";
import Guide from "./Guide/Guide";
import Dashboard from "./component/Dashboard";


function App() {
    return (
        <div >
            {/*<Dashboard/>*/}
            <BrowserRouter >
                <Switch style={{paddingLeft:"0"}}>
                    <Navigation/>
                    <Route exact path = "/" component={Home}/>
                    <Route exact path = "/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                    <Route path="/petunjuk" component={Guide}  />
                    <Route exact path="/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
