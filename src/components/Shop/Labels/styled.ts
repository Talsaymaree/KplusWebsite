import styled from 'styled-components';
import Slider from 'react-slick';
import { Icon } from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    position: relative;
    margin: 1em 0;
    justify-content: center;
    width: 100%;
    /* background: rgba(0,0,0,.8) */
`;

export const SliderStyled = styled(Slider)`
    width: 100%;
    height: 100px;
    align-items: center;
`;

export const IconStyled = styled(Icon)`

`;