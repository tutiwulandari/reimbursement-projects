import {findAll} from "../../actions/employee";
import {connect} from "react-redux";
import {useEffect} from "react";

const EmployeeList = ({findAll, employees}) => {

    useEffect( () => {
        findAll()
    }, []);
    console.log("LIST" + employees)
    return(
        <div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        employees: state.findAllEmployee.data || []

    }
}
const mapDispatchToProps = {findAll}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);