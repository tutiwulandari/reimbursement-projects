import {findAll} from "../../actions/dashboardAction";
import {connect} from "react-redux";
import {useEffect} from "react";
import {Pie, Doughnut} from 'react-chartjs-2';

function ChartGender({findAll, dashboards, error, isLoading}) {

    useEffect(()=> {
        findAll()
    }, [])


    console.log("COBA YAA", dashboards)
    // const state = {
    //     labels: ['January', 'February', 'March',
    //         'April', 'May'],
    //     datasets: [
    //         {
    //             label: 'Rainfall',
    //             backgroundColor: [
    //                 '#B21F00',
    //                 '#C9DE00',
    //                 '#2FDE00',
    //                 '#00A6B4',
    //                 '#6800B4'
    //             ],
    //             hoverBackgroundColor: [
    //                 '#501800',
    //                 '#4B5000',
    //                 '#175000',
    //                 '#003350',
    //                 '#35014F'
    //             ],
    //             data: [65, 59, 80, 81, 56]
    //         }
    //     ]
    // }
    return(
        <div>
            <Pie
                data={dashboards?.data}
                options={{
                    title:{
                        display:true,
                        text:'Jumlah Karyawan Perempuan',
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    }
                }}
            />

            {/*<Doughnut*/}
            {/*    data={state}*/}
            {/*    options={{*/}
            {/*        title:{*/}
            {/*            display:true,*/}
            {/*            text:'Average Rainfall per month',*/}
            {/*            fontSize:20*/}
            {/*        },*/}
            {/*        legend:{*/}
            {/*            display:true,*/}
            {/*            position:'right'*/}
            {/*        }*/}
            {/*    }}*/}
            {/*/>*/}
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