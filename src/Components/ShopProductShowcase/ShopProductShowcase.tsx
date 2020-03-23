import React from 'react'
import { Container, New, ButtonContainer, ImgStyled, Price, Description } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Fab } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { ShopProductShowcasePropsQuery } from '../../../graphql-types';
import ShopStar from '../ShopStar/ShopStar';

const ShopProductShowcase = () => {
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
    <>
      <Container>
        <ImgStyled fluid={data.allContentfulFeatureProducts.edges[1].node.featuredPicture?.fluid} />
        <New>New</New>
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

      </Container>
      <Description variant='body1'>
        {data.allContentfulFeatureProducts.edges[0].node.title}
      </Description>
      <Price >
        ${data.allContentfulFeatureProducts.edges[0].node.price}
      </Price>
      <ShopStar/>
    </>
  )
}

export default ShopProductShowcase
