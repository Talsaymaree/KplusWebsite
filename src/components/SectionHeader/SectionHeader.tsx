import React from 'react'
import { Typography } from '@material-ui/core'
import { Container, Link } from './styled'
import { KeyboardArrowRight } from '@material-ui/icons'
interface Props {
    title: string;
    subtitle: string;
    linkText?: string;
}

const SectionHeader = ({ title, subtitle, linkText }: Props) => {
    return (
        <Container>
            <Typography variant="h6">
                {title}
            </Typography>
            <Typography variant="subtitle1">
                {subtitle}
            </Typography>
            {linkText &&
                <Link color="default" variant="text" endIcon={<KeyboardArrowRight />}> {linkText} </Link>
            }
        </Container>
    )
}

export default SectionHeader
