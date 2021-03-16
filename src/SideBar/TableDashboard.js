import {Container} from "reactstrap";

export default function TableDashboard() {
    return (
        <Container style={{marginTop: "100px"}}>
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

                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Eka</td>
                    <td>Birthing</td>
                    <td>25/03/2021</td>
                    <td>5000.000</td>
                    <td>On Process HC Finance</td>
                    <td>27/03/2021</td>

                </tr>
                </tbody>
            </table>
        </Container>

    )
}