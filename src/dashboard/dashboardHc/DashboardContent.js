import React, {useEffect} from "react";
import {findAll} from "../../actions/dashboardAction";
import {connect} from "react-redux";
import {Card, Col, Row} from "react-bootstrap";

function DashboardContent({findAll, dashboards, error, isLoading}) {

    useEffect(()=> {
        findAll()
    }, [])


    return(
      <div>
          <div className="content-wrapper">
              <div className="row">
                  <div className="col-12">
                      <div className="card"  style={{height:"70vh"}}>
                          <div className="card-header">

                              <Row style={{marginTop:"5vh"}}>
                                  <Col md={6} xl={4}>
                                      <Card>
                                          <Card.Body>
                                              <h6 className='mb-4'>Jumlah Karyawan </h6>
                                              <div className="row d-flex align-items-center">
                                                  <div className="col-9">
                                                      <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>
                                                          {dashboards?.data?.countEmployee}
                                                      </h3>
                                                  </div>
                                                  {/*<div className="col-3 text-right">*/}
                                                  {/*    <p className="m-b-0">50%</p>*/}
                                                  {/*</div>*/}
                                              </div>
                                              <div className="progress m-t-30" style={{height: '7px'}}>
                                                  <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '50%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"/>
                                              </div>
                                          </Card.Body>
                                      </Card>
                                  </Col>
                                  <Col md={6} xl={4}>
                                      <Card>
                                          <Card.Body>
                                              <h6 className='mb-4'>Jumlah Karyawan Aktif</h6>
                                              <div className="row d-flex align-items-center">
                                                  <div className="col-9">
                                                      <h3 className="f-w-300 d-flex align-items-center m-b-0">
                                                          <i className="feather icon-arrow-down text-c-red f-30 m-r-5"/>
                                                          {dashboards?.data?.countEmployeeActive}
                                                      </h3>
                                                  </div>

                                                  <div className="col-3 text-right">
                                                      <h3 className="m-b-0">
                                                          {/*<i> {dasboards?.data?.countDataDashboard} </i>*/}
                                                      </h3>
                                                  </div>
                                              </div>
                                              <div className="progress m-t-30" style={{height: '7px'}}>
                                                  <div className="progress-bar progress-c-theme2" role="progressbar" style={{width: '35%'}} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"/>
                                              </div>
                                          </Card.Body>
                                      </Card>
                                  </Col>
                                  <Col xl={4}>
                                      <Card>
                                          <Card.Body>
                                              <h6 className='mb-4'>Jumlah Klaim Reimburse</h6>
                                              <div className="row d-flex align-items-center">
                                                  <div className="col-9">
                                                      <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5"/>
                                                          {dashboards?.data?.countEmployeeReimburse}
                                                      </h3>
                                                  </div>

                                              </div>
                                              <div className="progress m-t-30" style={{height: '7px'}}>
                                                  <div className="progress-bar progress-c-theme" role="progressbar" style={{width: '70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"/>
                                              </div>
                                          </Card.Body>
                                      </Card>
                                  </Col>
                              </Row>
                          </div>

                      </div>


                  </div>


              </div>


          </div>

      </div>
    )
}

const mapStateToProps = (state) => {
    return {
        dashboards : state.findAllCount.data || null,
        error : state.findAllCount.error,
        isLoading: state.findAllCount.isLoading

    }
}

const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(DashboardContent)