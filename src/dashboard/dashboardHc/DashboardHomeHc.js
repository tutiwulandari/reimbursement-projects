import {Component} from "react";
import {Jumbotron} from "react-bootstrap";
import Welcome from "../../assets/image/welcome.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {Container} from "reactstrap";
import '../../assets/css/DashboardHomeHc.css'

export default class DashboardHomeHc extends Component{
    render() {
        return(
            <Container style={{marginTop:"2vw"}}>
                <Jumbotron  className="container" style={{marginLeft:"-2vw", marginTop:"-5vw",height:"-20vw", width:"80%"}}>
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
                    </style>
                    <h2 style={{color:"darkblue", fontSize:"28px", marginTop:"5vw", marginLeft:"2vw", fontFamily:"roboto"}}>
                        Heyhoo, Super Admin Enigmanians!</h2>

                   <img src={ Welcome} alt="welcome" className="img fa-luggage-cartfloat-right" style={{marginTop:"-10vw", marginLeft:"35vw"}}/>
                </Jumbotron>

                {/*<Jumbotron style={{marginLeft:"230px", marginTop:"50px",height:"100%", width:"70%", fontFamily:"roboto", backgroundColor:"#292961"}}>*/}
                {/*    <h4 style={{color:"white", marginBottom:"20px"}}> <FontAwesomeIcon icon={faExclamationTriangle}/>*/}
                {/*      Jangan Lupa Validasi Klaim Reimbursement dibawah yaa:) </h4>*/}
                {/*</Jumbotron>*/}

            </Container>
        )
    }
}