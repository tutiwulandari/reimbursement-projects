import Header from "../../dashboard/dashboardHc/Header";
import Menu from "../../dashboard/dashboardHc/Menu";
import Footer from "../../dashboard/dashboardHc/Footer";
import React from "react";

function DetailContract() {
    return(
        <div>
            <Header/>
            <Menu/>
            <div className="content-wrapper">
                <h1 style={{color:"black", marginTop:"10px", textAlign:"center"}}> DETAIL CONTRACT</h1>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">

                                        </h3>

                                        <div className="card-tools">
                                            <div className="input-group input-group-sm" style={{width:"150px"}}>
                                                <input type="text" name="table_search" className="form-control float-right"
                                                       placeholder="Search"/>

                                                <div className="input-group-append">
                                                    <button type="submit" className="btn btn-default">
                                                        <i className="fas fa-search">

                                                        </i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body table-responsive p-0" style={{height:"300px"}}>
                                        <table className="table table-head-fixed text-nowrap">
                                            <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>User</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Reason</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>183</td>
                                                <td>John Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>219</td>
                                                <td>Alexander Pierce</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-warning">Pending</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>657</td>
                                                <td>Bob Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-primary">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>175</td>
                                                <td>Mike Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-danger">Denied</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>134</td>
                                                <td>Jim Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-success">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>494</td>
                                                <td>Victoria Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-warning">Pending</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>832</td>
                                                <td>Michael Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-primary">Approved</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            <tr>
                                                <td>982</td>
                                                <td>Rocky Doe</td>
                                                <td>11-7-2014</td>
                                                <td><span className="tag tag-danger">Denied</span></td>
                                                <td>Bacon ipsum dolor sit amet salami venison chicken flank fatback doner.</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>

        </div>


    )
}

export default DetailContract