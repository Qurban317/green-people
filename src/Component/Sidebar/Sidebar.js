import * as React from 'react';
import { Link } from "react-router-dom"
import './Sidebar.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import applogo from '../../images/logo.svg';
import { Button, Icon } from '@mui/material';
import { useState } from 'react';

export const Sidebar = () => {
    const [isactive, setIsactive] = React.useState(false);
    const toggleClass =()=>{
        setIsactive(!isactive)
    }
    return (

        <aside className={ isactive ? 'Sidebar msidebar active' : 'Sidebar msidebar' } >
            <div className='logoBox'>
            <Button id="mmenu"
              onClick={toggleClass}
              
              >
                    <Icon>menu</Icon>
                </Button>
                <Button id="Dmenu" >
                    <Icon>menu</Icon>
                </Button>
                <Link to=''>
                    <img src={applogo} className="AppLogo" alt="logo" />
                </Link>
            </div>
            <nav className='m_nav'>

                <Accordion className='comBtn'>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        className="SidebarIcon DashboardIcon01 "
                    >
                        
                    </AccordionSummary>

                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel6-content"
                        id="panel1-header"
                        className="SidebarIcon DashboardIcon02"
                    >

                        <Typography >Dashboard</Typography>
                    </AccordionSummary>

                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel0-content"
                        id="panel1-header"
                        className="SidebarIcon DashboardIcon03"
                    >
                        <Typography>Invice</Typography>
                    </AccordionSummary>

                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        className="SidebarIcon DashboardIcon04"
                    >
                        <Typography>Management</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <Link to='devices' className='navBtn btnPrimery ' color="secondary">Devices</Link>
                            <Link to='user-roles' className='navBtn'>User & Roles</Link>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3-content"
                        id="panel2-header"
                        className="SidebarIcon DashboardIcon05"
                    >
                        <Typography>Billing</Typography>
                    </AccordionSummary>

                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel4-content"
                        id="panel2-header"
                        className="SidebarIcon DashboardIcon06"
                    >
                        <Typography>Tooles</Typography>
                    </AccordionSummary>

                </Accordion>
                <Accordion>
                    <AccordionSummary
                        aria-controls="panel4-content"
                        id="panel2-header"
                        className="SidebarIcon DashboardIcon07"
                    >
                        <Typography>Help Center</Typography>
                    </AccordionSummary>

                </Accordion>

            </nav>
        </aside>

    )
}