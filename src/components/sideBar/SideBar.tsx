import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaClipboard, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import {
  AppBar,
  Toolbar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  Box,
  CssBaseline,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

// Define the props interface
interface SidebarProps {
  setActiveComponent: (component: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveComponent }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const sidebarContent = (
    <Box
      sx={{
        width: 250,
        bgcolor: '#4BBDBD', // Set the background color to light green
        color: 'black', // Change text color to black for better contrast
        height: '100%',
        p: 2,
        fontFamily: 'Ubuntu, sans-serif', // Set font family to Ubuntu
      }}
      role="presentation"
      onClick={toggleDrawer}
    >
      <Typography variant="h6" align="center" sx={{ mb: 2, color: 'white', fontWeight: 'bold' }}>
        Admin Panel
      </Typography>
      <List>
        <ListItem component={Link} to="/dashboard" onClick={() => setActiveComponent('Dashboard')} sx={listItemStyle}>
          <ListItemIcon>
            <FaTachometerAlt color="white" /> {/* Change icon color to white */}
          </ListItemIcon>
          <ListItemText primary="Dashboard" sx={{ color: 'rgba(255, 255, 255, 0.8)' }} /> {/* Set text color to transparent white */}
        </ListItem>
        <ListItem component={Link} to="/user-management" onClick={() => setActiveComponent('User Management')} sx={listItemStyle}>
          <ListItemIcon>
            <FaUsers color="white" /> {/* Change icon color to white */}
          </ListItemIcon>
          <ListItemText primary="User Management" sx={{ color: 'rgba(255, 255, 255, 0.8)' }} /> {/* Set text color to transparent white */}
        </ListItem>
        <ListItem component={Link} to="/content-management" onClick={() => setActiveComponent('Content Management')} sx={listItemStyle}>
          <ListItemIcon>
            <FaClipboard color="white" /> {/* Change icon color to white */}
          </ListItemIcon>
          <ListItemText primary="Content Management" sx={{ color: 'rgba(255, 255, 255, 0.8)' }} /> {/* Set text color to transparent white */}
        </ListItem>
        <ListItem component={Link} to="/quiz-management" onClick={() => setActiveComponent('Quiz Management')} sx={listItemStyle}>
          <ListItemIcon>
            <FaQuestionCircle color="white" /> {/* Change icon color to white */}
          </ListItemIcon>
          <ListItemText primary="Quiz Management" sx={{ color: 'rgba(255, 255, 255, 0.8)' }} /> {/* Set text color to transparent white */}
        </ListItem>
      </List>

      {/* Logout Button */}
      <Box sx={{ position: 'absolute', bottom: 16, width: '100%',  }}>
        <ListItem
          sx={{
            ...listItemStyle,
            justifyContent: 'center',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighten on hover
            },
          }}
        >
          <ListItemIcon>
            <FaSignOutAlt color="white" /> {/* Change icon color to white */}
          </ListItemIcon>
          <ListItemText primary="Logout" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontWeight: 'bold' }} /> {/* Set text color to transparent white */}
        </ListItem>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      {/* AppBar for mobile view */}
      <AppBar position="fixed" sx={{ display: { md: 'none' } }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer} aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer (Sidebar) */}
      <Drawer
        variant="temporary"
        open={isOpen}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250, bgcolor: '#b2e0b2' }, // Set background color for temporary drawer
        }}
      >
        {sidebarContent}
      </Drawer>

      {/* Permanent Sidebar for Desktop */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
            bgcolor: '#b2e0b2', // Set background color for permanent drawer
            color: 'black', // Change text color to black for better contrast
            zIndex: 1,
          },
        }}
        open
      >
        {sidebarContent}
      </Drawer>

      {/* Main content area with adjusted padding */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: { xs: 7, md: 0 }, // Adjusts for mobile app bar height
          position: 'relative',
          zIndex: 0,
        }}
      >
        {/* Ensure the dashboard title is visible */}
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        {/* Your actual content goes here */}
      </Box>
    </Box>
  );
};

// Define styles for the list items with hover effects
const listItemStyle = {
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Lighten on hover
    transition: 'background-color 0.3s ease', // Smooth transition for the background color
  },
};

export default Sidebar;
