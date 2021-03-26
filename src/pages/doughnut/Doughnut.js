import {findAll} from "../../actions/dashboardAction";
import {connect} from "react-redux";
import {useEffect} from "react";
import {Doughnut} from 'react-chartjs-2';

function ChartGender({findAll, dashboards, error, isLoading}) {

    useEffect(()=> {
        findAll()
    }, [])

    const state = {
        labels: ['PKWT', 'PROBABITION'],
        datasets: [
            {
                label: 'Tipe Kontrak',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                ],
                data: [dashboards?.data?.countEmployeePKWT, dashboards?.data?.countEmployeeProbabition]
            }
        ]
    }

    return(
        <div>

            <Doughnut
                data={state}
                options={{
                    title:{
                        display:true,
                        text:'Jumlah Karyawan Berdasarkan Tipe Kontrak',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'bottom'
                    }
                }}
            />
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
export default connect(mapStateToProps, mapDispatchToProps)(ChartGender)