import React from 'react'
import ShopTitleSection from './../ShopTitleSection/ShopTitleSection';
import ShopProductShowcase from './../ShopProductShowcase/ShopProductShowcase';
import { Container } from './styled'
import ShowProductsShowcase from '../ShopProductShowcase/ShopProductsShowcase/ShowProductsShowcase';
import ShopCategoriesShowcase from '../ShopCategoriesShowcase/ShopCategoriesShowcase';
import ShopCategoryButtons from './../ShopCategoryButtons/ShopCategoryButtons';

const ShopMainContent = () => {
    return (
        <Container>
            <ShopTitleSection>
                deal of the day
            </ShopTitleSection>
            <ShopProductShowcase single />
            <ShowProductsShowcase />
            <ShopTitleSection>
                shop by category
            </ShopTitleSection>
            <ShopCategoriesShowcase />
            <ShopCategoryButtons />
        </Container>
    )
}

export default ShopMainContent
