import React, { ReactNode } from 'react'
import { Content } from './styled'

interface Props {
    children: ReactNode
}

const MainContent = ({ children }: Props) => {
    return (
        <Content>
            {children}
        </Content>
    )
}

export default MainContent
