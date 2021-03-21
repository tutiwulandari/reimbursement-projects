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
import Routes from "./configs/Routes";
import ListEmployee from "./component/ListEmployee";
import EmployeeList from "./pages/tables";


function App() {
    return (
        <div >
            <Provider store={store}>
                <Routes/>
            </Provider>

        </div>
    );
}

export default App;
