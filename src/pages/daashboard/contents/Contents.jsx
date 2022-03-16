import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';


export const Home = (
  <React.Fragment>
    <ListItemButton>
     <ListItemIcon>
         <HomeIcon/>
       </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItemButton>
  </React.Fragment>
);

export const Users = (
    <React.Fragment>
     <ListItemButton>
      <ListItemIcon>
      <PeopleIcon/>
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>       
    </React.Fragment>
  );