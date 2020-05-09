import React from 'react'
import { Container, SliderStyled } from './styled'
import { graphql, useStaticQuery } from 'gatsby';
import { InstagramPicturePropsQuery } from '../../../graphql-types'
import { FluidObject } from 'gatsby-image';
import InstagramPicture from './InstagramPicture/InstagramPicture';

const Instagram = () => {
  const data: InstagramPicturePropsQuery = useStaticQuery(graphql`
    query InstagramPictureProps{
        allContentfulInstagramPicture {
            edges {
                node {
                  picture {
                      fluid(maxWidth: 500, maxHeight: 200) {
                      ...GatsbyContentfulFluid
                      }
                  }
                  createdAt
                  id
                  link
                  alt
              }
            }
          }
        }
      `);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

  return (
    <Container>
      <SliderStyled {...settings}>
        {data.allContentfulInstagramPicture.edges.map(ele =>
          <InstagramPicture
            key={ele.node.id}
            link={ele.node.link || "#"}
            picture={ele.node.picture?.fluid as FluidObject}
            alt={ele.node.alt || "not defined"}
            createdAt={ele.node.createdAt}
          />
        )
        }
      </SliderStyled>
    </Container>
  )
}

export default Instagram
