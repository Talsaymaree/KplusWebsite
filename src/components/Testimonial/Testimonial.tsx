import React from 'react'
import { Container, SliderStyled, TestiomonialContent, AllTestimony, Text, Title, Overlay, Info } from './styled';
import { useStaticQuery, graphql } from 'gatsby'
import { TestimonialsPropsQuery } from '../../../graphql-types'
import { FluidObject } from 'gatsby-image';
import { Typography } from '@material-ui/core';

const Testimonial = () => {
  const testimonials: TestimonialsPropsQuery = useStaticQuery(graphql`
    query TestimonialsProps{
      allContentfulTestimonials {
        edges {
          node {
            id
            name
            createdAt(formatString: "MMMM Do, YYYY")
            testimony {
              testimony
            }
          }
        }
      }
      file(relativePath: { eq: "sharon-mccutcheon-62vi3TG5EDg-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Container backgroundImage={testimonials.file?.childImageSharp?.fluid as FluidObject}>
      <Overlay />
      <Title variant="h5">
        Testimonials
                </Title>
      <SliderStyled {...settings}>
        {testimonials.allContentfulTestimonials.edges.map((ele: any) =>
          <TestiomonialContent key={ele.node.id}>
            <Text align="center">{ele.node.testimony.testimony}</Text>
            <Info>{ele.node.name} - {ele.node.createdAt}</Info>
          </TestiomonialContent>)
        }
      </SliderStyled>
      <AllTestimony variant="outlined">
        <Typography>
          All Testimony
        </Typography>
      </AllTestimony>
    </Container>
  )
}

export default Testimonial
