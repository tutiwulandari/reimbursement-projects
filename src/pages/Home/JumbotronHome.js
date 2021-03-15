import {Card, Col, Container, Jumbotron, Row} from "react-bootstrap";
import Image from "../../assets/image/money.svg"
import Image2 from "../../assets/image/glasses2.png"
import Image3 from "../../assets/image/pregnant.png"
import Image4 from "../../assets/image/perjalanan_dinas.png"
import Image5 from "../../assets/image/training.jpg"

export default function JumbotronHome() {
    return (
        <div style={{padding: "50px", backgroundColor:"white"}}>
            <img src={Image} className="float-right" alt="reimbursement"
                 style={{padding: "10px", marginRight: "140px", marginTop: "30px"}}/>
            <Jumbotron style={{backgroundColor: "white"}}>
                <Container>
                    <h1><b>Claims, Payment & Reimbursement</b></h1>
                    <p style={{fontStyle: "italic"}}> Convenient tools and guidelines to help you get reimbursement
                        faster.</p>
                    <h3 style={{fontStyle: "-moz-initial", marginTop: "70px"}}>
                        REIMBURSEMENT ?
                    </h3>
                </Container>
            </Jumbotron>

                  <div style={{display:"flex", justifyContent:"center"}}>
                      <Row style={{display:"flex", justifyContent:"space-between"}}>
                          <Col className="d-flex align-items-stretch">
                              <Card style={{width: '18rem'}}>
                                  <Card.Img variant="top" src={Image2}/>
                                  <Card.Body>
                                      <Card.Title style={{textAlign:"center"}}>Glasses Claim</Card.Title>
                                  </Card.Body>
                              </Card>
                          </Col>
                          <Col className="d-flex align-items-stretch" style={{marginRight:"50px"}}>
                              <Card style={{width: '18rem', marginLeft: "-30px"}}>
                                  <Card.Img variant="top" src={Image3}/>
                                  <Card.Body>
                                      <Card.Title style={{textAlign:"center"}}>Birthing Claims</Card.Title>
                                  </Card.Body>
                              </Card>

                          </Col>
                          <Col className="d-flex align-items-stretch" style={{marginRight:"50px"}}>
                              <Card style={{width: '18rem', marginLeft: "-80px"}}>
                                  <Card.Img variant="top" src={Image4}/>
                                  <Card.Body>
                                      <Card.Title style={{textAlign:"center"}}>Official travel Claims</Card.Title>
                                  </Card.Body>
                              </Card>
                          </Col>

                          <Col className="d-flex align-items-stretch" >
                              <Card style={{width: '18rem', marginLeft: "-100px"}}>
                                  <Card.Img variant="top" src={Image5}/>
                                  <Card.Body>
                                      <Card.Title style={{textAlign:"center"}}>Training Claims</Card.Title>
                                  </Card.Body>
                              </Card>
                          </Col>
                      </Row>
                  </div>
        </div>
    )
}