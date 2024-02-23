import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';


export default function AccordionExpandDefault() {
    return (
        <div>
            <Link to='user-roles' className="SidebarIcon DashboardIcon">Dashboard</Link>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>Invice</Typography>
                </AccordionSummary>
               
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Management</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Link to='devices'>Devices</Link>
                        <Link to='user-roles'>User & Roles</Link>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel2-header"
                >
                    <Typography>Billing</Typography>
                </AccordionSummary>
                
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4-content"
                    id="panel2-header"
                >
                    <Typography>Tooles</Typography>
                </AccordionSummary>
               
            </Accordion>

            <Link to='user-roles'>Help Center</Link>


        </div>
    );
}