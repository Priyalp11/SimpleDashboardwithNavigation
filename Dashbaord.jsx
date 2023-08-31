import * as React from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Event from '@mui/icons-material/Event';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Nightlife  from'@mui/icons-material/Nightlife';
import Sports from '@mui/icons-material/Sports';
import Rule from '@mui/icons-material/Rule';
import Eventlist from './Eventlist';
import Cultural from './Cultural';
import Dashboard from './Home';
import Sport from './Sport';
import Rules from './Rules'; 

const drawerWidth = 240;

 function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>

      <ListItem  disablePadding onClick={() => navigate('/')}>
            <ListItemButton>
              <ListItemIcon>
              <Home />
              </ListItemIcon>
              <ListItemText> Home </ListItemText>
            </ListItemButton>
          </ListItem>
          </List>


          <ListItem  disablePadding onClick={() => navigate('/Eventlist')}>
            <ListItemButton>
              <ListItemIcon>
              <Event />
              </ListItemIcon>
              <ListItemText> Eventlist </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem  disablePadding onClick={() => navigate('/Cultural')}>
            <ListItemButton>
              <ListItemIcon>
              <Nightlife />
              </ListItemIcon>
              <ListItemText> Cultural </ListItemText>
            </ListItemButton>
          </ListItem> 


          <ListItem  disablePadding onClick={() => navigate('/Sport')}>
            <ListItemButton>
              <ListItemIcon>
              <Sports/>
              </ListItemIcon>
              <ListItemText> Sports </ListItemText>
            </ListItemButton>
          </ListItem> 

          
          <ListItem  disablePadding onClick={() => navigate('/Rules')}>
            <ListItemButton>
              <ListItemIcon>
              <Rule />
              </ListItemIcon>
              <ListItemText> Rules </ListItemText>
            </ListItemButton>
          </ListItem>  
          </div>
  );
        

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Routes>
            <Route exact path="/" element={ <Dashboard />}></Route>
            <Route  path="/Cultural" element={ <Cultural />}></Route>
            <Route  path="/Sport" element={ <Sport />}></Route>
            <Route  path="/Eventlist" element={ <Eventlist />}></Route>
            <Route  path="/Rules" element={ <Rules />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;