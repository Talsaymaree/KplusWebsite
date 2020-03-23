import React from 'react'
import { Container, Menu, TitleBand, IconContainer } from './Styled';
import { Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuIcon from '@material-ui/icons/Menu';

const ShopNavbar = () => {

  return (
    <Container>
      <TitleBand>
        <Typography variant="h4">
          KShop
        </Typography>
        <IconContainer>
          <SearchIcon fontSize='large' />
          <PermIdentityOutlinedIcon fontSize='large' />
          <ShoppingCartOutlinedIcon fontSize='large' />
        </IconContainer>
      </TitleBand>
      <Menu>
        <Typography variant="subtitle1">
          menu
        </Typography>
        <IconContainer>
          <MenuIcon />
        </IconContainer>
      </Menu>
    </Container>
  )
}

export default ShopNavbar
