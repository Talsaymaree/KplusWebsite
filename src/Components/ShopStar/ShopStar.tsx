import React from 'react'
import StarOutlined from '@material-ui/icons/StarOutlined';
import { Container } from './styled'

const ShopStar = () => {
    return (
        <Container>
            <StarOutlined fontSize='small' />
            <StarOutlined fontSize='small' />
            <StarOutlined fontSize='small' />
            <StarOutlined fontSize='small' />
        </Container>
    )
}

export default ShopStar
