import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Man3Icon from '@mui/icons-material/Man3';
import Man4Icon from '@mui/icons-material/Man4';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <NavLink to="/">
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
    </NavLink>
    <NavLink to="teachers">
      <ListItemButton>
        <ListItemIcon>
          <Man3Icon />
        </ListItemIcon>
        <ListItemText primary="Teachers" />
      </ListItemButton>
    </NavLink>
    <NavLink to="students">
      <ListItemButton>
        <ListItemIcon>
          <Man4Icon/>
        </ListItemIcon>
        <ListItemText primary="Students" />
      </ListItemButton>
    </NavLink>
    <NavLink to="profile">
      <ListItemButton>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </NavLink>
  </React.Fragment>
);
