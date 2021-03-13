import {Card, Col, Container, Jumbotron, Row} from "react-bootstrap";
import Image from "../image/undraw_wallet_aym5 (1).svg"
import Image2 from "../image/glasses2.png"
import Image3 from "../image/pregnant.png"
import Image4 from "../image/perjalanan_dinas.png"
import Image5 from "../image/training.jpg"

export default function Jumb() {
    return (
        <div style={{padding: "50px"}}>
            <img src={Image} className="float-right" alt="reimbursement"
                 style={{padding: "10px", marginRight: "80px", marginTop: "30px"}}/>
            <Jumbotron style={{backgroundColor: "snowflake"}}>
                <Container>
                    <h1><b>Claims, Payment & Reimbursement</b></h1>
                    <p style={{fontStyle: "italic"}}> Convenient tools and guidelines to help you get reimbursement
                        faster.</p>
                    <h3 style={{fontStyle: "-moz-initial", marginTop: "70px"}}>
                        REIMBURSEMENT ?
                    </h3>
                </Container>
            </Jumbotron>

                    <Row >
                        <Col className="d-flex align-items-stretch">
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top" src={Image2}/>
                                <Card.Body>
                                    <Card.Title>Glasses Claim</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="d-flex align-items-stretch">
                            <Card style={{width: '18rem', marginLeft: "-30px"}}>
                                <Card.Img variant="top" src={Image3}/>
                                <Card.Body>
                                    <Card.Title>Birthing Claims</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col className="d-flex align-items-stretch">
                            <Card style={{width: '18rem', marginLeft: "-80px"}}>
                                <Card.Img variant="top" src={Image4}/>
                                <Card.Body>
                                    <Card.Title>Official travel Claims</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col className="d-flex align-items-stretch">
                            <Card style={{width: '18rem', marginLeft: "-100px"}}>
                                <Card.Img variant="top" src={Image5}/>
                                <Card.Body>
                                    <Card.Title>Training Claims</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


        </div>
    )
}