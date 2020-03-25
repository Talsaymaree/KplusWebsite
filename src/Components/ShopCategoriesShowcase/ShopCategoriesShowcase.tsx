import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { ShopCategoriesShowcasePropsQuery } from '../../../graphql-types'
import { Container, SliderStyled } from './styled';
import ShopCategoryShowcase from './ShopCategoryShowcase/ShopCategoryShowcase';
import { FluidObject } from 'gatsby-image';

const ShopCategoriesShowcase = () => {
    const data: ShopCategoriesShowcasePropsQuery = useStaticQuery(graphql`
    query ShopCategoriesShowcaseProps{
      allContentfulCategory {
        edges {
          node {
            image {
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid
              }
            }
            slug
            title
            description
            id
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
            <SliderStyled {...settings}>
                {data.allContentfulCategory.edges.map((ele: any) =>
                    <ShopCategoryShowcase
                        key={ele.node.id}
                        title={ele.node.title ?? "default title"}
                        imageFluid={ele.node.image?.fluid as FluidObject}
                        description={ele.node.description ?? "default description"}
                    />)
                }
            </SliderStyled>
        </Container>
    )
}

export default ShopCategoriesShowcase
