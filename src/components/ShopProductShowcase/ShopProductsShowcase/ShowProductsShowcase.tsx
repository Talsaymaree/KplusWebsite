import React from 'react';
import ShopProductShowcase from '../ShopProductShowcase';
import { graphql, useStaticQuery } from 'gatsby';
import { ShopProductShowcasePropsQuery, ContentfulProduct } from '../../../../graphql-types';
import { Container, Product } from './styled';

const ShowProductsShowcase = () => {
  const data: ShopProductShowcasePropsQuery = useStaticQuery(graphql`
    query ShopProductShowcaseProps{
    allContentfulProduct(filter: {featured: {eq: true}}) {
      edges {
        node {
          price
          title
          updatedAt
          featuredPicture {
            contentful_id
            fluid(maxWidth: 700) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
  `);

  return (
    <Container container spacing={1}>
      <Product item xs={6}>
        <ShopProductShowcase star description price product={data.allContentfulProduct.edges[0].node as ContentfulProduct} />
      </Product>
      <Product item xs={6}>
        <ShopProductShowcase star description price product={data.allContentfulProduct.edges[1].node as ContentfulProduct} />
      </Product>
      <Product item xs={6}>
        <ShopProductShowcase star description price product={data.allContentfulProduct.edges[2].node as ContentfulProduct} />
      </Product>
      <Product item xs={6}>
        <ShopProductShowcase star description price product={data.allContentfulProduct.edges[3].node as ContentfulProduct} />
      </Product>
    </Container>
  )
}

export default ShowProductsShowcase
