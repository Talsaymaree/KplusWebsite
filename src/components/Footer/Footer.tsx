import React from 'react'
import { Container, Title } from './styled'
import { Toolbar, IconButton, Fab, AppBar } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import PlayArrowOutlinedIcon from '@material-ui/icons/PlayArrowOutlined'
import DrawableMenu from '../DrawableMenu/DrawableMenu';

const Footer = () => {
    return (
        <Container position="fixed">
            <Toolbar>
                <DrawableMenu/>
                <IconButton color="secondary">
                    <PlayArrowOutlinedIcon fontSize="large" />
                </IconButton>
                <IconButton color="inherit">
                    <SearchIcon fontSize="large"/>
                </IconButton>
                <IconButton edge="end" color="inherit">
                    <MoreIcon />
                </IconButton>
            </Toolbar>
        </Container>
    )
}

export default Footer
