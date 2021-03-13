import {Container, Jumbotron} from "react-bootstrap";
import Image from "../image/undraw_wallet_aym5 (1).svg"

export default function Jumb() {
  return(
      <div style={{padding:"50px"}}>
          <img src={Image} className="float-right" alt="reimbursement" style={{padding:"10px", marginRight:"80px", marginTop:"30px"}}/>
          <Jumbotron style={{backgroundColor:"snowflake"}}>
              <Container>
                  <h1><b>Claims, Payment & Reimbursement</b></h1>
                  <p style={{fontStyle:"italic"}}> Convenient tools and guidelines to help you get reimbursement faster.</p>
                  <h3 style={{fontStyle:"-moz-initial", marginTop:"70px"}}>
                     REIMBURSEMENT ?
                  </h3>
              </Container>
          </Jumbotron>
      </div>
  )
}