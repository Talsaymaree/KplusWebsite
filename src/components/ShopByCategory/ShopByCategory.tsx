import React from 'react'
import ShopCategoriesShowcase from './../ShopCategoriesShowcase/ShopCategoriesShowcase';
import ShopCategoryButtons from '../ShopCategoryButtons/ShopCategoryButtons';
import { useStaticQuery, graphql } from 'gatsby'
import { ShopCategoryProductPropsQuery } from '../../../graphql-types'
import { Container } from './styled'
import ShopProductShowcase from './../ShopProductShowcase/ShopProductShowcase';

const ShopByCategory = () => {
  const data: ShopCategoryProductPropsQuery = useStaticQuery(graphql`
    query ShopCategoryProductProps{
    allContentfulProduct(filter: {category: {slug: {in: "shoes"}}}) {
      edges {
        node {
          id
          price
          ratings
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
    <Container>
      <ShopCategoriesShowcase />
      <ShopCategoryButtons />
      <div>
        {data.allContentfulProduct.edges.map((ele: { node: any }) =>
          <ShopProductShowcase
            key={ele.node.id}
            product={ele.node}
            description
            price
          />)
        }
      </div>
    </Container>
  )
}

export default ShopByCategory
