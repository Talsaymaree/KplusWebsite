import React from 'react'
import { Container, ImgStyled, AlbumDescription } from './styled'
import { FluidObject } from 'gatsby-image';
import { Typography } from '@material-ui/core';

interface PictureInfo {
    link: string;
    picture: FluidObject;
    createdAt: string;
    alt: string;
}

const AlbumShowcase = (props: PictureInfo) => {
    return (
        <Container>
            <ImgStyled fluid={props.picture} alt={props.alt} />
            <AlbumDescription>
                <Typography variant="subtitle1">
                    To Phir Ao
                </Typography>
                <Typography variant="subtitle2">
                    Kapali
                </Typography>
            </AlbumDescription>
        </Container>
    )
}

export default AlbumShowcase
