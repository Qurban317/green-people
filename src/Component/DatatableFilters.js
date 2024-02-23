import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
//import { Datetime } from './Datetime';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import downloadImg from '../images/download.svg';
import printImg from '../images/print.svg';

export const DatatableFilter = () => {
    return (
        <div className='dataTableFilter'>
            <Stack spacing={2} direction="row">
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-helper-label fontSize12">Type fo Device</InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        label="Age"
                        className='fontSize12'
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Samsung</MenuItem>
                        <MenuItem value={20}>Iphone</MenuItem>
                        <MenuItem value={30}>Nokia</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="outlined-basic" label="Enter Device Name" className='fontSize12' variant="outlined" />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                </LocalizationProvider>
                <TextField id="outlined-basic" label="Search" variant="outlined" className='fontSize12' />
                <Button variant="outlined" className='fontSize12'><img src={downloadImg} className="AppLogo" alt="logo" /> Export</Button>
                <Button variant="outlined" className='fontSize12'><img src={printImg} className="AppLogo" alt="logo" /> Print All</Button>
                
                <Button variant="contained" className='fontSize12'><i class='material-icons'>add</i> Register New Device</Button>
                

            </Stack>
        </div>
    )
}