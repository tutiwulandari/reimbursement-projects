import React, {useEffect, useState} from "react";
import {findAll} from "../../actions/dashboardAction";
import {connect} from "react-redux";
import {Card, Col, ProgressBar, Row} from "react-bootstrap";
import ChartGender from "../../pages/chart/ChartGender";
import Doughnut from "../../pages/doughnut";
import  Image from "../../assets/image/dashboard.svg"

function DashboardContent({findAll, dashboards, error, isLoading}) {

    // const [test, setTest] = useState({
    //     date: new Date()
    // })

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

    let year = new Date().getFullYear()
    console.log("coba lagi", useDate())

    return (
        <div>
            <div className="content-wrapper">
                <Card>
                    <div className="row">
                        <div style={{height:"30vh", marginTop:"5vh"}}>
                            <h3 style={{fontFamily:"roboto", marginLeft:"10vh"}}> {useDate().wish} Super Admin Enigmanians!
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
                            {/*<div className="card-header">*/}
                                <Row style={{marginTop: "5vh"}}>
                                    <Col md={6} xl={6}>
                                        {/*card */}
                                        <Card>
                                            <Card.Body>
                                                <ChartGender/>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col md={6} xl={6}>
                                        {/*card*/}
                                        <Card>
                                            <Card.Body>
                                                <Doughnut/>
                                                {/*<div className="tl-card px-0">*/}
                                                {/*    <h3>Jumlah Karyawan </h3>*/}
                                                {/*    <div data-v-d55cb4fc="" className="data-chart mt-3 px-4">*/}
                                                {/*        <div data-v-8b9a2924="" data-v-d55cb4fc="" className="progress-chart">*/}
                                                {/*            <div data-v-8b9a2924="" className="wrapper-progress-bar">*/}
                                                {/*            <span data-v-8b9a2924="" title="Permanent :  3" className="data-fill" style={{width: "60%", backgroundColor: "rgb(0, 155, 222)"}}/>*/}
                                                {/*                <span data-v-8b9a2924="" title="Contract :  1" className="data-fill" style={{width: "20%", backgroundColor: "rgb(249, 109, 1)"}}/>*/}
                                                {/*            </div>*/}

                                                            {/*<ProgressBar>*/}
                                                            {/*    <ProgressBar striped variant="success" now={dashboards?.data?.counttEmployeePKWT} key={1} />*/}
                                                            {/*    <ProgressBar variant="warning" now={dashboards?.data?.countEmployeeProbabition} key={2} />*/}
                                                            {/*</ProgressBar>*/}

                                                        {/*    <div data-v-8b9a2924="" className="bottom-text-progress">*/}
                                                        {/*        <small data-v-8b9a2924="" className="mr-auto">0%</small>*/}
                                                        {/*        <small data-v-8b9a2924="">100%</small>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}

                                                {/*        <div data-v-d55cb4fc="" className="legend-custom-cart pb-4">*/}
                                                {/*            <p data-v-d55cb4fc="" className="d-flex py-2">*/}
                                                {/*                <span data-v-d55cb4fc="">Total</span>*/}
                                                {/*                <span data-v-d55cb4fc="" className="ml-auto">5</span>*/}
                                                {/*            </p>*/}

                                                {/*            <p data-v-d55cb4fc="" className="d-flex py-2">*/}
                                                {/*            <span data-v-d55cb4fc="" className="label-circle"*/}
                                                {/*                  style={{backgroundColor: "rgb(0, 155, 222)", width:"2vh", height:"3vh"}}>{'\u00A0'}</span>*/}
                                                {/*                <span data-v-d55cb4fc="">Permanent</span>*/}
                                                {/*                <span data-v-d55cb4fc="" className="ml-auto">*/}
                                                {/*            <span data-v-d55cb4fc="">3</span>*/}
                                                {/*            <span data-v-d55cb4fc="" className="ml-3">60.0%</span>*/}
                                                {/*            </span>*/}
                                                {/*            </p>*/}
                                                {/*            <p data-v-d55cb4fc="" className="d-flex py-2">*/}
                                                {/*            <span data-v-d55cb4fc="" className="label-circle"*/}
                                                {/*                  style={{backgroundColor: "rgb(249, 109,1)", width:"2vh", height:"3vh"}}>{'\u00A0'}</span>*/}
                                                {/*                <span data-v-d55cb4fc="">Kontrak</span>*/}
                                                {/*                <span data-v-d55cb4fc="" className="ml-auto">*/}
                                                {/*            <span data-v-d55cb4fc="">1</span>*/}
                                                {/*            </span>*/}
                                                {/*                <span data-v-d55cb4fc="" className="ml-3">20.0%</span>*/}

                                                {/*            </p>*/}

                                                {/*        </div>*/}

                                                {/*    </div>*/}

                                                {/*</div>*/}
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            {/*</div>*/}
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
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent)