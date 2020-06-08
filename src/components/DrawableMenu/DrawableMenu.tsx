import React, { useState }from 'react'
import { IconButton, Drawer } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';
import { Fragment } from 'react';
import Navbar from '../NavBar/NavBar';

const DrawableMenu = () => {
    const [isOpen, toggleOpen] = useState(false);
    
    return (
        <Fragment>
            <IconButton onClick={() => toggleOpen(true)} edge="start" color="inherit" aria-label="open drawer">
                <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer anchor="left" open={isOpen} onClose={() => toggleOpen(false)}  >
                <Navbar/>
            </Drawer>
        </Fragment>
    )
}

export default DrawableMenu
