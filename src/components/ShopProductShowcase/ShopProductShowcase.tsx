import React from 'react'
import { ImgContainer, New, Discount, Container, ButtonContainer, ImgStyled, Price, Description } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Fab } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { ShopProductShowcasePropsQuery } from '../../../graphql-types';
import ShopStar from '../ShopStar/ShopStar';
import { FluidObject } from 'gatsby-image';

interface Props {
  single?: boolean;
}

const ShopProductShowcase = ({ single }: Props) => {
  const data: ShopProductShowcasePropsQuery = useStaticQuery(graphql`
    query ShopProductShowcaseProps{
    allContentfulFeatureProducts {
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

  if (!data) return <p>no data</p>;

  return (
    <Container>
      <ImgContainer>
        <ImgStyled fluid={data.allContentfulFeatureProducts.edges[1].node.featuredPicture?.fluid as FluidObject} />
        <New>New</New>
        <Discount>-20%</Discount>

        {single &&
          <ButtonContainer>
            <Fab color='primary' size='medium'>
              <SearchIcon />
            </Fab>
            <Fab color='primary' size='medium'>
              <PermIdentityOutlinedIcon />
            </Fab>
            <Fab color='primary' size='medium'>
              <ShoppingCartOutlinedIcon />
            </Fab>
          </ButtonContainer>
        }

      </ImgContainer>
      <Description variant='body1'>
        {data.allContentfulFeatureProducts.edges[0].node.title}
      </Description>
      <Price >
        ${data.allContentfulFeatureProducts.edges[0].node.price}
      </Price>
      <ShopStar />
    </Container>
  )
}

export default ShopProductShowcase
