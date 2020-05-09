import styled from 'styled-components';
import Slider from 'react-slick';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FluidObject } from 'gatsby-image';

interface BackgroundProps{
    backgroundImage: FluidObject
}

export const Container = styled.div<{ backgroundImage: FluidObject }>`
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    background-image: url(${(props: BackgroundProps) => props.backgroundImage.src});
`;

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 1;
    position: absolute;
    background-color: rgba(0,0,0,.3)
`;

export const SliderStyled = styled(Slider)`
    width: 100%;
    padding: .5em;
    margin: 0;
    text-align: center;
`;

export const TestiomonialContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Text = styled(Typography)`
    margin: .5em;
    width: 100%;
`;

export const Info = styled.p`
    text-align: center;
    margin-top: 1em;
    opacity: .7;
`;

export const Title = styled(Typography)`
    border-bottom: black 1px solid;
    text-transform: uppercase;
    text-align: center;
    justify-content: center;
    width: 70%;
    margin: .5em auto;
`;


export const AllTestimony = styled(Button)`
    z-index: 5;
    width: 60%;
    background: transparent;
    align-self: center;
    margin-top: 0;
`;
