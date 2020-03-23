import React from 'react'
import ShopTitleSection from './../ShopTitleSection/ShopTitleSection';
import ShopProductShowcase from './../ShopProductShowcase/ShopProductShowcase';
import { Container } from './styled'
import ShowProductsShowcase from '../ShopProductShowcase/ShopProductsShowcase/ShowProductsShowcase';

const ShopMainContent = () => {
    return (
        <Container>
            <ShopTitleSection>
                deal of the day
            </ShopTitleSection>
            <ShopProductShowcase />
            <ShowProductsShowcase />
        </Container>
    )
}

export default ShopMainContent
