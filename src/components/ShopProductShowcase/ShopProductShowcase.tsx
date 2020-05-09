import React from 'react'
import { ImgContainer, New, Discount, Container, ButtonContainer, ImgStyled, Price, Description } from './styled'
import SearchIcon from '@material-ui/icons/Search';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Fab } from '@material-ui/core';
import ShopStar from '../ShopStar/ShopStar';
import { FluidObject } from 'gatsby-image';
import { ContentfulProduct } from '../../../graphql-types';

interface Props {
  buttons?: boolean; // determine if the buttons should be shown
  description?: boolean; // determine if the description should be shown
  price?: boolean; // determine if the price should be shown
  product?: ContentfulProduct;
  star?: boolean;
}

const ShopProductShowcase = ({ buttons, description, price, product, star }: Props) => {

  if (!product) return <p>no data</p>;

  return (
    <Container>
      <ImgContainer>
        <ImgStyled fluid={product.featuredPicture?.fluid as FluidObject} />
        <New>New</New>
        <Discount>-20%</Discount>

        {buttons &&
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

      {description &&
        <Description variant='body1'>
          {product?.title}
        </Description>
      }

      {price &&
        <Price >
          ${product?.price}
        </Price>
      }
      {star &&
        <ShopStar />
      }
    </Container>
  )
}

export default ShopProductShowcase
