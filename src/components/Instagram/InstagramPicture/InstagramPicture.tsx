import React from 'react'
import { Container, ImgStyled } from './styled'
import { FluidObject } from 'gatsby-image';

interface PictureInfo {
    link: string;
    picture: FluidObject;
    createdAt: string;
    alt: string;
}

const InstagramPicture = (props: PictureInfo) => {
    return (
        <Container>
            <ImgStyled fluid={props.picture} alt={props.alt} />
        </Container>
    )
}

export default InstagramPicture
