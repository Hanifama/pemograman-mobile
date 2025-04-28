import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItem, ListItemText, Avatar, Menu, MenuItem, IconButton, ListItemIcon, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { AccountCircle, ExitToApp, Dashboard, Category, LocalMall, People } from '@mui/icons-material';
import Logo from '../assets/img/icon.png';

const drawerWidth = 250;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const userName = 'Haristfh'; 
    const userRole = 'Admin'; 

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);  
    };

    const handleClose = () => {
        setAnchorEl(null);  
    };

    return (
        <div className="flex relative">
            <CssBaseline />

            {/* Wrapper for AppBar and Drawer */}
            <div className="z-10 flex">
                <AppBar position="fixed" style={{ backgroundColor: '#4D9B8C' }}>
                    <Toolbar className="flex justify-between items-center">
                        <Typography variant="h6" noWrap>
                            <div className="flex items-center space-x-2">
                                <Link to="/" className="flex items-center">
                                    <img src={Logo} alt="Deligo Logo" className="w-10 h-10" />
                                    <span className="font-bold text-xl">eliGO</span>
                                </Link>
                            </div>
                        </Typography>
                        {/* Profile Avatar with click handler */}
                        <IconButton onClick={handleClick}>
                            <Avatar alt="User Profile" src="/path/to/profile-image.jpg" className="cursor-pointer" />
                        </IconButton>
                        {/* Menu for Profile and Logout */}
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            {/* User Info Section */}
                            <div className="px-4 py-2">
                                <Typography variant="body1" fontWeight="bold">{userName}</Typography>
                                <Typography variant="body2" color="textSecondary">{userRole}</Typography>
                            </div>

                            <Divider />

                            {/* Menu items */}
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <AccountCircle fontSize="small" />
                                </ListItemIcon>
                                Profile
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <ExitToApp fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>

                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    }}
                    className="z-0"
                >
                    <Toolbar />
                    <List>
                        <ListItem component={Link} to="/dashboard" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <ListItemIcon>
                                <Dashboard fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard Monitoring" />
                        </ListItem>
                        <ListItem component={Link} to="/category" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <ListItemIcon>
                                <Category fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Manajemen Kategori" />
                        </ListItem>
                        <ListItem component={Link} to="/product" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <ListItemIcon>
                                <LocalMall fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Manajemen Produk" />
                        </ListItem>
                        <ListItem component={Link} to="/users-management" className="px-4 py-2 text-gray-700 hover:bg-gray-200">
                            <ListItemIcon>
                                <People fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Manajemen User" />
                        </ListItem>
                    </List>
                </Drawer>
            </div>

            {/* Main content area */}
            <main className="flex-grow pt-16">
                {children}
            </main>
        </div>
    );
};

export default Layout;
