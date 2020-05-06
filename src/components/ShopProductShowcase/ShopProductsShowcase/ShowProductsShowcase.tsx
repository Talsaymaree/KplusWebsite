import React from 'react';
import ShopProductShowcase from '../ShopProductShowcase';
import { Container, Product } from './styled';

const ShowProductsShowcase = () => {
    return (
        <Container container spacing={1}>
            <Product item xs={6}>
                <ShopProductShowcase />
            </Product>
            <Product item xs={6}>
                <ShopProductShowcase />
            </Product>
            <Product item xs={6}>
                <ShopProductShowcase />
            </Product>
            <Product item xs={6}>
                <ShopProductShowcase />
            </Product>
        </Container>
    )
}

export default ShowProductsShowcase
