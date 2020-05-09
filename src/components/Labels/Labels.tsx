import React from 'react'
import { Container, SliderStyled, IconStyled } from './styled'
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
const Labels = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <Container>
            <SliderStyled {...settings}>
                <AccessAlarm fontSize="large" />
                <ThreeDRotation fontSize="large" />
                <AccessAlarm fontSize="large" />
                <ThreeDRotation fontSize="large" />
                <AccessAlarm fontSize="large" />
                <ThreeDRotation fontSize="large" />
            </SliderStyled>
        </Container>
    )
}

export default Labels
