import DataTable from 'react-data-table-component';
import Badge from '@mui/material/Badge';

import Button from '@mui/material/Button';



  
const columns = [
    {
        name: 'Sr No.',
        selector: row => row.Sr_No,
        sortable : true,
    },
    {
        name: 'Status',
        selector: row => row.Status,
        sortable : true,
    },
    {
        name: 'Device Type',
        selector: row => row.DeviceType,
        sortable : true,
    },
    {
        name: 'Device Name',
        selector: row => row.DeviceName,
        sortable : true,
    },
    {
        name: 'Date Issued',
        selector: row => row.DateIssue,
        sortable : true,
    },
    {
        name: 'One Time Passcode',
        selector: row => row.OTP,
        sortable : true,
    },
    {
        name: '',
        selector: row => row.Action,
        sortable : true,
    },
];

const data = [
    {
        Sr_No: 1,
        Status: <Badge className='BadgeGreen'> Recover</Badge>,
        DeviceType: 'Iphone',
        DeviceName: '1988',
        DateIssue: '12-23-23',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },{
        Sr_No: 2,
        Status: <Badge className='BadgeRed'> Distroy</Badge>,
        DeviceType: 'Iphone',
        DeviceName: '1988',
        DateIssue: '11-23-22',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },{
        Sr_No: 3,
        Status: <Badge className='BadgeBlue'> Active</Badge>,
        DeviceType: 'Samsung',
        DeviceName: '1988',
        DateIssue: '11-23-23',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },{
        Sr_No: 4,
        Status: <Badge className='BadgeGreen'> Recover</Badge>,
        DeviceType: 'Iphone',
        DeviceName: '1988',
        DateIssue: '05-23-22',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },
    {
        Sr_No: 5,
        Status: <Badge className='BadgeRed'> Distroy</Badge>,
        DeviceType: 'Sony',
        DeviceName: '1988',
        DateIssue: '11-14-22',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },{
        Sr_No: 6,
        Status: <Badge className='BadgeBlue'> Active</Badge>,
        DeviceType: 'Nokia',
        DeviceName: '1988',
        DateIssue: '11-11-22',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },
    {
        Sr_No: 7,
        Status: <Badge className='BadgeGreen'> Recover</Badge>,
        DeviceType: 'Samsung',
        DeviceName: '1988',
        DateIssue: '11-05-22',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },{
        Sr_No: 8,
        Status: <Badge className='BadgeRed'> Distroy</Badge>,
        DeviceType: 'Iphone',
        DeviceName: '1988',
        DateIssue: '01-23-22',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    },{
        Sr_No: 9,
        Status: <Badge className='BadgeBlue'> Active</Badge>,
        DeviceType: '1988',
        DeviceName: '1988',
        DateIssue: '11-23-20',
        OTP: '1988',
        Action: <Button variant="outlined" className='BtnStanderd'><i class='material-icons'>more_vert</i> Options</Button>,
    }
]

export const DataTableContect = () =>{
   
    return(
        <div className='dataTable_container'>
            <DataTable
            columns={columns}
            data={data}
            fixedHeader
            pagination
        />
        </div>
    )
}