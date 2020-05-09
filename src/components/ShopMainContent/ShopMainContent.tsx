import React from 'react'
import ShopTitleSection from './../ShopTitleSection/ShopTitleSection';
import ShopProductShowcase from './../ShopProductShowcase/ShopProductShowcase';
import { Container } from './styled'
import ShowProductsShowcase from '../ShopProductShowcase/ShopProductsShowcase/ShowProductsShowcase';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import Testimonial from '../Testimonial/Testimonial';
import Labels from '../Labels/Labels';
import Instagram from './../Instagram/Instagram';

const ShopMainContent = () => {
    return (
        <Container>
            <ShopTitleSection>
                deal of the day
            </ShopTitleSection>
            <ShopProductShowcase buttons price description />
            <ShowProductsShowcase />
            <ShopTitleSection>
                shop by category
            </ShopTitleSection>
            <ShopByCategory />
            <Testimonial />
            <ShopTitleSection>
                affiliated labels
            </ShopTitleSection>
            <Labels />
            <ShopTitleSection>
                instagram
            </ShopTitleSection>
            <Instagram />
        </Container>
    )
}

export default ShopMainContent
