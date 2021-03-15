import {Jumbotron} from "react-bootstrap";
import Receipts from "../../assets/image/undraw_Receipt_re_fre3.svg"
import Form from "../../assets/image/form.svg"
import Review from "../../assets/image/review.svg"
import {Col, Row} from "@themesberg/react-bootstrap";

export default function JumbotronGuide() {
    return(
        <div style={{display:"flex", justifyContent:"center"}}>
            <Jumbotron style={{backgroundColor:"white"}}>
                <h2 style={{textAlign:"center",color:"#292961"}}>HOW TO SUBMIT A CLAIM REIMBURSEMENT</h2>
                <p style={{textAlign:"center", fontSize:"revert"}}> “Straight, simple and to the point – three easy steps to help you efficiently file a health insurance claim.”</p>
                <Row>
                     <Col style={{marginLeft:"100px"}}>
                       <img src={Receipts} alt="receipts"/>
                    </Col>
                    <Col style={{marginRight:"300px"}}>
                        <h3 style={{marginTop:"70px"}}> STEP 1 </h3>
                        <p style={{fontWeight:"bold"}}>Collect Your Itemized Receipts</p>
                        <p>To file a claim you need to first obtain an itemized bill from your doctor or medical provider</p>
                    </Col>
                </Row>

                <Row>
                    <Col   >
                        <img src={Form} alt="form" className="float-right" style={{marginRight:"150px"}}/>
                    </Col>
                    <Col>
                        <h3 className="float-right" style={{marginRight:"450px", marginTop:"50px"}}> STEP 2</h3>
                        <p style={{marginTop:"100px", marginLeft:"100px", fontWeight:"bold"}}> Complete A ClaimForm </p>
                        <p> input your name, your position and upload receipts</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src={Review} alt="review" className="float-left" style={{marginTop:"30px", marginLeft:"380px"}}/>
                    </Col>
                    <Col>
                        <h3 className="float-right" style={{marginRight:"450px", marginTop:"50px"}}> STEP 3</h3>
                        <p style={{marginTop:"100px", marginLeft:"100px", fontWeight:"bold"}}> Review & Reimbursement</p>
                        <p> When you have all of your documents completed and HR will review the claim reimbursement</p>
                    </Col>
                </Row>




            </Jumbotron>
        </div>
    )
}