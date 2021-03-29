import './assets/css/Register.css'
import './assets/css/Reimburse.css'
import './assets/css/Forget.css'
import './assets/css/Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/Dashboard.css'
import './assets/css/Form.css'
import './assets/css/EmployeeDetails.css'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import { Provider } from 'react-redux';
import store from './configs/store';
import routes from "./configs/routes";
import 'reimburse.svg'
import Error404 from './pages/Error/Error404/Error404';


function App() {
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


                            // routes.map((route, index) => {
                            //     let path = route.path

                            //     if (path.match("dashboard/hc")) {
                            //         if (localStorage.getItem('role') == "1") {
                            //             <Route key={index} path={route.path} exact={route.exact}>
                            //                 {route.component}
                            //             </Route>
                            //         }
                            //         else {
                            //             <Route key={index} path='*' exact={false}>
                            //                 <Error404 />
                            //             </Route>
                            //         }
                            //     }
                            //     else {
                            //         <Route key={index} path='*' exact={false}>
                            //             <Error404 />
                            //         </Route>
                            //     }
                            // })


                        }
                    </Switch>
                </Router>
            </Provider>
        </div>
    );
}

export default App;
