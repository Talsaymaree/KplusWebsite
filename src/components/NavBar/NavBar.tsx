import React, { useState, Fragment } from "react";
import { SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@material-ui/core'

import {
  Container,
  ActiveItem
} from "./Styled"

import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import NavBarSubList from './NavBarSubList/NavBarSubList';

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setCheced] = useState(false);

  return (
    <Container>
      <List aria-label="main navbar for this website">
        <ActiveItem button key="Home" color="secondary">
          <ListItemIcon color="secondary">
            <HomeIcon color="secondary"/>
          </ListItemIcon>
          <ListItemText primary="Home" color="secondary" />
        </ActiveItem>
        {
          ['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon >{index % 2 === 0 ? <AddIcon /> : <SearchIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))
        }
        <NavBarSubList />
        {
          ['Banana juice', 'Cosco'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon >{index % 2 === 0 ? <AddIcon /> : <SearchIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))
        }

      </List>
    </Container>
  );
};

export default Navbar;
