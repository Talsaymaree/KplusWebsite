import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { HeroHeaderPropsQuery } from '../../../graphql-types';
import { BrowseButton, Container, InfoText, ImageScroller, SubTitle, Title, InfoContainer, SliderStyled, ImgStyled } from './atyled';
import Img, { FluidObject } from 'gatsby-image';

const ShopHeroFeature = () => {
    const data: HeroHeaderPropsQuery = useStaticQuery(graphql`
    query HeroHeaderProps {
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

    return (
        <Container>
            <ImgStyled alt={data.allContentfulHeroImage.edges[0].node.alt || ""} fluid={data.allContentfulHeroImage.edges[0].node.backgroundImage?.fluid as FluidObject} />
            <InfoContainer>
                <Title variant="h3">
                    Kplus
              </Title>
                <SubTitle variant="h5">
                    Us which over of signs divide dominion earth without morning over third. Their land fly grass.
              </SubTitle>
                <BrowseButton variant="contained" color="secondary">
                    <InfoText>
                        Start browsing
                    </InfoText>
                </BrowseButton>
            </InfoContainer>
        </Container >
    )
}

export default ShopHeroFeature
