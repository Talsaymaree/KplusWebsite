import styled from 'styled-components';
import Slider from 'react-slick';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const Container = styled.div`
    display: flex;
    position: relative;
    padding: 1em .5em;
    justify-content: center;
    width: 100%;
    /* background: rgba(0,0,0,.8) */
`;


export const SliderStyled = styled(Slider)`
    width: 100%;
    align-items: center;

    .slick-prev{
        left: 30px;
    }

    .slick-next{
        right: 30px;
    }

    .slick-prev ,.slick-next{
        z-index: 10;
        width: 20px;
        height: 20px;
    }
`;
