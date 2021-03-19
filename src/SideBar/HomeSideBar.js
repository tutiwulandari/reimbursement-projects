import {Component} from "react";
import {Jumbotron} from "react-bootstrap";
import Welcome from "../assets/image/welcome.svg"


export default class HomeSideBar extends Component{
    render() {
        return(
            <div>
                <Jumbotron style={{marginLeft:"230px", marginTop:"-50px",height:"250px", width:"70%"}}>
                    <h1 style={{color:"darkblue"}}>HeiHo, Welcome Super Admin!</h1>

                   <img src={ Welcome} alt="welcome" className="float-right" style={{marginTop:"-80px", marginRight:"120px"}}/>
                </Jumbotron>

            </div>
        )
    }
}