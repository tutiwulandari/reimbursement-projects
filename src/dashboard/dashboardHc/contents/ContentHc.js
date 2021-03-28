import React, {useEffect, useState} from "react";
import {findAll} from "../../../actions/dashboardAction";
import {connect} from "react-redux";
import {Card, Col, Row} from "react-bootstrap";
import ChartGender from "./ChartGender";
import  Image from "../../../assets/image/dashboard.svg"
import LineGraphEmployee from "./BarChart";
import {CardBody} from "reactstrap";
import DoughnutTypeContract from "./DoughnutTypeContract";
import DoughnutTypeEmployee from "./DoughnutTypeEmployee";
import BarChart from "./BarChart";


function ContentHc({findAll, dashboards, error, isLoading}) {

    let year = new Date().getFullYear()
    useEffect(() => {
        findAll()
    }, [])

    const useDate = ()=> {
        const locale = 'id'

        const [today, setToday] = useState(new Date())

        useEffect(() => {
            const timer = setInterval( () => {
                setToday(new Date())
            }, 60 * 1000)
            return () => {
                clearInterval(timer)
            }
        })

        const day = today.toLocaleDateString(locale, {weekday: 'long'})
        const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {month:'long'}, {year:'number'})}\n\n`
        const hour = today.getHours();
        const wish =  `Selamat ${(hour < 12 && 'Pagi') || (hour < 17 && 'Siang') || 'Malam'}, `;

        const time = today.toLocaleTimeString(locale,{hour:'numeric', hour12: true, minute:'numeric'})
        return {
            date,
            time,
            wish
        }
    }



    return (
        <div>
            <div className="content-wrapper">
                <Card>
                    <div className="row">
                        <div style={{height:"30vh", marginTop:"5vh"}}>
                            <h3 style={{fontFamily:"roboto, ubuntu, oxygen", marginLeft:"10vh"}}> {useDate().wish} Super Admin Enigmanians!
                                <p>
                                    {useDate().date}
                                    {year} {''}
                                    {useDate().time}
                                </p>
                            </h3>
                            <div className="float-right" style={{marginTop:"-20vh", marginRight:"20vh"}}>
                                <img src={Image} alt="image"/>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="row">
                    <div className="col-12">
                        <div>
                                <Row>
                                    <Col md={6}>
                                        <Card>
                                            <Card.Body>
                                                <ChartGender/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6} >
                                        <Card>
                                            <Card.Body>
                                                <DoughnutTypeContract/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            <Row>
                                <Col md={6}>
                                    <Card>
                                        <CardBody>
                                            <BarChart/>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col md={6}>
                                    <Card>
                                        <CardBody>
                                            <DoughnutTypeEmployee/>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dashboards: state.findAllCount.data || null,
        error: state.findAllCount.error,
        isLoading: state.findAllCount.isLoading

    }
}

const mapDispatchToProps =
    {
        findAll
    }
export default connect(mapStateToProps, mapDispatchToProps)(ContentHc)