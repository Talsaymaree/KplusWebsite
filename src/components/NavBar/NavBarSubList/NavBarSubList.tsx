import React, { Fragment, useState } from 'react'
import { ListItem, ListItemIcon, ListItemText, Collapse, List } from '@material-ui/core'
import { ExpandLess, ExpandMore, StarBorder, Inbox } from '@material-ui/icons'
import { NestedItem, Header } from './styled';


const NavBarSubList = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Fragment>
            <Header open={isOpen} button onClick={() => setIsOpen(prev => !prev)}>
                <ListItemIcon color="inherit" >
                    <Inbox />
                </ListItemIcon>
                <ListItemText primary="Inboxer" />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </Header>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <NestedItem button>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </NestedItem>
                    <NestedItem button>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </NestedItem>
                    <NestedItem button>
                        <ListItemIcon>
                            <StarBorder />
                        </ListItemIcon>
                        <ListItemText primary="Starred" />
                    </NestedItem>
                </List>
            </Collapse>
        </Fragment>
    )
}

export default NavBarSubList
