import {findAll} from "../../actions/dashboardAction";
import {connect} from "react-redux";
import {Bar, Doughnut} from "react-chartjs-2";
import {useEffect} from "react";

function DoughnutFinance({findAll, dashboards, error, isLoading}) {

    useEffect(()=> {
        findAll()
    }, [])

    const state = {
        labels: ['Kacamata', 'Training', 'Melahirkan',
            'Asuransi', 'Perjalanan Dinas'],
        datasets: [
            {
                label:"klaim pengembalian dana",
                fill: false,
                lineTension: 0.5,
                backgroundColor: [
                    '#292961',
                    '#FFDEAD',
                    '#0000FF',
                    '#DEB887',
                    '#E9967A'
                ],
                hoverBackgroundColor: [
                    '#292961',
                    '#FFDEAD',
                    '#0000FF',
                    '#DEB887',
                    '#E9967A'
                ],
                data: [dashboards?.data?.countEmployeeReimbursementGlasses, dashboards?.data?.countEmployeeReimbursementTraining,
                    dashboards?.data?.countEmployeeReimbursementGiveBirth, dashboards?.data?.countEmployeeReimbursementInsurance,
                    dashboards?.data?.countEmployeeReimbursementOfficialTravel]
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
                        text:'Jumlah Klaim Pengembalian Dana',
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
export default connect(mapStateToProps, mapDispatchToProps)(DoughnutFinance)