import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ProjectLogo from '../../images/shield_person.svg';
import './Header.scss';
import { Badge, Button, SvgIcon } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import userImg from '../../images/user-image.svg';
import applogo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className='header'>
           
            <div className='pageTitle'>
                <h2>
                    <img src={ProjectLogo} className="ProjectLogo" alt="logo" />
                    Project <span className='colorText'>Devices</span>
                </h2>

            </div>
            <div className='headeright'>
            <div className='mlogoBox' >
              <div className='mleft'>
                <Link to=''>
                    <img src={applogo} className="AppLogo" alt="logo" />
                </Link>
              </div>
              <div className='mright'>
              <Button className='btnoutline notifyBtn' variant='outline' sx={{ minWidth: 100 }}>
                        <Badge className='notificationBadge'>20</Badge>
                        <i class='material-icons'>notifications_none</i>
                    </Button>
                <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>
                                <img src={userImg} className="userImg" alt="logo" />
                            </Avatar>
                          
                        </IconButton>

                    </Tooltip>
              </div>
                
               
            </div>
                <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            displayEmpty
                        >
                            <MenuItem >
                                <em>English</em>
                            </MenuItem>
                            <MenuItem value='Arabic'>Arabic</MenuItem>
                        </Select>
                    </FormControl>
                    <Button className='btnoutline notifyBtn' variant='outline' sx={{ minWidth: 100 }}>
                        <Badge className='notificationBadge'>20</Badge>
                        <i class='material-icons'>notifications_none</i>
                    </Button>

                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>
                                <img src={userImg} className="userImg" alt="logo" />
                            </Avatar>
                            <Typography sx={{ minWidth: 100 }}>Rao Qurban Ali</Typography>
                        </IconButton>

                    </Tooltip>
                </Box>
                <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&::before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClose}>
                        <Avatar /> Profile
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}

