import {Container, Table, Button} from "reactstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";


export default function TableDashboardHc() {
    return (
        <div>
            <Container style={{marginTop: "80px"}}>
                <h3 style={{marginLeft: "50px", textAlign: "center", marginBottom: "30px"}}> List Klaim
                    Reimbursement</h3>
                <table className="table" style={{marginLeft: "50px", textAlign: "center"}}>
                    <thead>
                    <tr>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}>#</th>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}>Name</th>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}>Category Claim</th>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}>Date of Claim Submission</th>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}> Fee</th>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}> Status</th>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}> Disbursement Date</th>
                        <th scope="col" style={{minWidth: "130px", maxWidth: "130px", verticalAlign: "middle", textAlign: "center"}}> Action
                        </th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>Irfaan</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>Glassess</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>22/03/2021</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>500.000</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>On Process</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>27/03/2021</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}><Button
                            style={{backgroundColor: "#BE2528"}}> <FontAwesomeIcon icon={faCheckCircle}/>
                        </Button></td>

                    </tr>
                    <tr>
                        <th scope="row" style={{minWidth: "130px", maxWidth: "130px"}}>2</th>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>Eka</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>Birthing</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>25/03/2021</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>5000.000</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>On Process</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}>27/03/2021</td>
                        <td style={{minWidth: "130px", maxWidth: "130px"}}><Button
                            style={{backgroundColor: "#BE2528"}}> <FontAwesomeIcon icon={faCheckCircle}/>
                        </Button></td>

                    </tr>
                    </tbody>
                </table>
            </Container>
        </div>
    )
}