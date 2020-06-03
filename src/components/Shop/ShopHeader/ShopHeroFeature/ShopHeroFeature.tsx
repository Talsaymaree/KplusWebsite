import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FeaturePropsQuery } from '../../../../graphql-types';
import { BrowseButton, Container, InfoText, ImageScroller, SubTitle, Title, InfoContainer, SliderStyled, ImgStyled } from './Styled';
import Img, { FluidObject } from 'gatsby-image';

const ShopHeroFeature = () => {
  const sliderRef = useRef();

  const data: FeaturePropsQuery = useStaticQuery(graphql`
    query FeatureProps {
      allContentfulHeroImage {
        edges {
          node {
            backgroundImage {
              fluid(maxWidth: 900) {
                ...GatsbyContentfulFluid
              }
            },
            alt
          }
        }
      }
    }
  `)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Container>
      <ImgStyled alt={data.allContentfulHeroImage.edges[0].node.alt || ""} fluid={data.allContentfulHeroImage.edges[0].node.backgroundImage?.fluid as FluidObject} />
      <InfoContainer>
        <Title variant="h5">
          Shop is for Fun
              </Title>
        <SubTitle variant="h6">
          Browse our premium product
              </SubTitle>
        <InfoText>

          Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.
              </InfoText>
        <BrowseButton variant="contained" color="primary">
          <InfoText>
            Start browsing
          </InfoText>
        </BrowseButton>
      </InfoContainer>
    </Container >
  )
}

export default ShopHeroFeature
