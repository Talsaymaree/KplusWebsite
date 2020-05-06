import React from 'react'
import ShopNavbar from './ShopNavbar/ShopNavbar'
import { Container } from './styled'
import ShopHeroFeature from './ShopHeroFeature/ShopHeroFeature';

const ShopHeader = () => {
  return (
    <Container>
      <ShopNavbar />
      <ShopHeroFeature />
    </Container>
  )
}

export default ShopHeader
