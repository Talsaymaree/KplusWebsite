import React from 'react'
import { Title, Container } from './styled';
import { ReactNode } from 'react';

interface Props{
    children: ReactNode
}

const ShopTitleSection = ({ children }: Props) => {
    return (
        <Container>
            <Title variant='subtitle2'>
                {children}
            </Title>
        </Container>
    )
}

export default ShopTitleSection
