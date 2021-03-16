import {Container} from "react-bootstrap";
import {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {Nav, NavItem, NavLink, TabContent, Table, TabPane} from "reactstrap";
import classnames from 'classnames';
import {findById} from "../../actions/employeeAction";
import { connect } from 'react-redux';


function EmployeeDetails({isLoading, data, findById}) {

    let { id } = useParams()
    useEffect( () => {
        findById(id)
    }, [findById])

    useEffect( () => {
        if(id > 0)
            findById(id)
    }, [findById])

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return(
        <Container style={{marginTop:"70px"}}>
            <Nav tabs>
                <NavItem>
                    <NavLink className={classnames({active:activeTab ==='1'})}
                    onClick={()=> {toggle('1')}}
                    >Personal Details</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink  className={classnames({active:activeTab ==='2'})}
                              onClick={()=> {toggle('2')}}>Family</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({active:activeTab ==='3'})}
                             onClick={()=> {toggle('3')}}>Account</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className={classnames({active:activeTab ==='4'})}
                             onClick={()=> {toggle('4')}}>Work</NavLink>
                </NavItem>
            </Nav>

            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">

                    <Table striped bordered hover style={{marginTop:"50px"}}>
                        <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Place of Birth</th>
                            <th>Date of Birth</th>
                            <th>Gender</th>
                            <th>Religion</th>
                            <th>Blood Type</th>
                            <th>Marital Status</th>
                            <th>Religion</th>
                            <th>Blood Type</th>
                            <th>Marital Status</th>

                        </tr>
                        </thead>
                        <tbody>
                        {/*{console.log(employee)}*/}
                        {/*{isLoading ?  employee &&*/}
                        {/*    <tr>*/}
                        {/*        <td>#</td>*/}
                        {/*        <td>Mark</td>*/}
                        {/*        <td>Otto</td>*/}
                        {/*        <td>@mdo</td>*/}
                        {/*        <td>@mdo</td>*/}
                        {/*        <td>@mdo</td>*/}
                        {/*        <td>@mdo</td>*/}


                        {/*    </tr>*/}
                        {/*    :<p> Loading...</p>*/}
                        {/*}*/}

                        </tbody>
                    </Table>

                </TabPane>

                <TabPane tabId="2">
                    <h3>Why do we use it?</h3>
                    <p>Haiiii</p>
                </TabPane>
                <TabPane tabId="3">
                    <h3>Where does it come from</h3>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.</p>
                </TabPane>
            </TabContent>
        </Container>
    )

}
const mapStateToProps = (state) => {
    return {
        isLoading: state.findEmployeeById.isLoading || [],
        employee : state.findEmployeeById.data || []
    }
}
const mapDispatchToProps = {findById}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails)