import React, { ReactNode } from 'react'
import { Content } from './styled'

interface Props {
    children: ReactNode
}

const PaperCard = ({ children }: Props) => {
    return (
        <Content elevation={2}>
            {children}
        </Content>
    )
}

export default PaperCard
