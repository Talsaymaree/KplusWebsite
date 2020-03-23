import React from 'react';
import ShopProductShowcase from '../ShopProductShowcase';
import { Container } from './styled';

const ShowProductsShowcase = () => {
    return (
        <Container>
            <ShopProductShowcase />
            <ShopProductShowcase />
            <ShopProductShowcase />
            <ShopProductShowcase />
        </Container>
    )
}

export default ShowProductsShowcase
