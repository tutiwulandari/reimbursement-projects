import {Container} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle, faExclamationTriangle} from "@fortawesome/free-solid-svg-icons";
import {Button} from "@themesberg/react-bootstrap";
import {Jumbotron} from "react-bootstrap";

export default function TableDashboardHc() {
    return (
        <Container style={{marginTop: "100px"}}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
            </style>
            <Jumbotron style={{marginLeft:"30px", marginTop:"50px",height:"10%", width:"100%", fontFamily:"roboto", backgroundColor:"#292961"}}>
                <h4 style={{color:"white", marginBottom:"20px"}}> <FontAwesomeIcon icon={faExclamationTriangle}/> Please Validate reimbursement claims bellow!! </h4>
            </Jumbotron>
            <h3 style={{marginLeft: "50px"}}> List Of Claims</h3>
            <table className="table" style={{marginLeft: "50px", textAlign:"center"}}>
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category Claim</th>
                    <th scope="col">Date of Claim Submission</th>
                    <th scope="col"> Fee</th>
                    <th scope="col"> Status</th>
                    <th scope="col"> Disbursement Date</th>
                    <th scope="col"> Action </th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Irfaan</td>
                    <td>Glassess</td>
                    <td>22/03/2021</td>
                    <td>500.000</td>
                    <td>On Process HC Finance</td>
                    <td>27/03/2021</td>
                    <td><Button style={{backgroundColor:"#BE2528"}}> <FontAwesomeIcon icon={faCheckCircle}/> </Button> </td>

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Eka</td>
                    <td>Birthing</td>
                    <td>25/03/2021</td>
                    <td>5000.000</td>
                    <td>On Process HC Finance</td>
                    <td>27/03/2021</td>
                    <td><Button style={{backgroundColor:"#BE2528"}}> <FontAwesomeIcon icon={faCheckCircle}/> </Button> </td>


                </tr>
                </tbody>
            </table>
        </Container>

    )
}