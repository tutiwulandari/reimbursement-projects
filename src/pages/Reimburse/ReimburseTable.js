import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import '../../assets/css/table.css';
import '../../'
import {
    Button,
    Container,
} from 'reactstrap'

import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';


export default function ReimburseTable(props) {

    const { SearchBar } = Search;
    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }]

    const columns = [
        {
            dataField: 'id',
            text: 'ID',
            sort: true,
            headerStyle: () => {
                return {
                    width: "5%"
                }
            }
        },
        {
            dataField: 'categoryId.categoryName',
            text: 'Category',
            sort: true
        },
        {
            dataField: 'employeeId.fullname',
            text: 'Employee',
            sort: true
        },
        {
            dataField: 'statusOnHc',
            text: 'Status',
            sort: true
        },
    ]

    // return (
    //     <BootstrapTable keyField='id' data={props.reimbursements} columns={columns} />
    // )

    // return (
    //     <ToolkitProvider
    //         keyField='id' bootstrap4 data={props.reimbursement}
    //         columns={columns} defaultSorted={defaultSorted} search>
    //         {
    //             props => (
    //                 <div>
    //                     <SearchBar {...props.searchProps} />
    //                     <BootstrapTable
    //                         pagination={paginationFactory()}
    //                         {...props.baseProps}
    //                     />
    //                 </div>
    //             )
    //         }
    //     </ToolkitProvider>
    // )


    // const [dropdownOpen, setOpen] = useState(false)
    // const toggle = () => setOpen(!dropdownOpen)
    // const { SearchBar } = Search;
    // const defaultSorted = [{
    //     dataField: 'id',
    //     order: 'asc'
    // }]

    // const columns = [
    //     {
    //         dataField: 'id',
    //         text: 'ID',
    //         sort: true,
    //         headerStyle: () => {
    //             return {
    //                 width: "5%"
    //             }
    //         }
    //     },
    //     {
    //         dataField: 'categoryId.categoryName',
    //         text: 'Category',
    //         sort: true
    //     },
    //     {
    //         dataField: 'employeeId.fullname',
    //         text: 'Employee',
    //         sort: true
    //     },
    //     {
    //         dataField: 'statusOnHc',
    //         text: 'Status',
    //         sort: true
    //     },
    //     {
    //         dataField: 'link',
    //         text: 'Action'
    //     }
    // ];

    // return (
    //     <ToolkitProvider
    //         keyField='id' bootstrap4 data={props.reimbursement}
    //         columns={columns} defaultSorted={defaultSorted} search>
    //         {
    //             props => (
    //                 <div>
    //                     <SearchBar {...props.searchProps} />
    //                     <BootstrapTable
    //                         pagination={paginationFactory()}
    //                         {...props.baseProps}
    //                     />
    //                 </div>
    //             )
    //         }
    //     </ToolkitProvider>
    // )
}