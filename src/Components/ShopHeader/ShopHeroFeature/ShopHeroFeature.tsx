import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FeaturePropsQuery } from '../../../../graphql-types';
import { Container, ImageScroller, SliderStyled, ImgStyled } from './Styled';
import Img from 'gatsby-image';

const ShopHeroFeature = () => {
  const sliderRef = useRef();

  const data: FeaturePropsQuery = useStaticQuery(graphql`
    query FeatureProps {
      allContentfulFeatureProducts {
        edges {
          node {
            price
            title
            updatedAt
            featuredPicture {
              fluid(maxWidth: 700) {
                ...GatsbyContentfulFluid
              }
              contentful_id
            }
          }
        }
      }
    }
  `)

  const images = data.allContentfulFeatureProducts.edges;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <ImgStyled fluid={images[0].node.featuredPicture?.fluid} />
    </Container >
  )
}

export default ShopHeroFeature
