import React from 'react'
import { Category, Container } from './styled';

const ShopCategoryButtons = () => {
    return (
        <Container>
            <Category selected>
                all
            </Category>
            <Category>
                Featureded
            </Category>
            <Category>
                Special
            </Category>
            <Category>
                dresses
            </Category>
        </Container>
    )
}

export default ShopCategoryButtons
