import React from 'react'
import { FluidObject } from 'gatsby-image'
import { Container, Image, DescriptionBox, Description, Title } from './styled'

interface Props {
    imageFluid: FluidObject;
    description: string;
    title: string;
}

const ShopCategoryShowcase = ({ imageFluid, description, title }: Props) => {
    return (
        <Container>
            <Image fluid={imageFluid} />
            <DescriptionBox>
                <Description variant="caption">{description}</Description>
                <Title align="center" >{title}</Title>
            </DescriptionBox>
        </Container>
    )
}

export default ShopCategoryShowcase
