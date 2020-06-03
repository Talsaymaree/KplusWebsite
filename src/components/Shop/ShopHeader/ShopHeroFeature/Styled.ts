import styled from 'styled-components';
import Slider from 'react-slick';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

export const SliderStyled = styled(Slider)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
`;

export const ImgStyled = styled(Img)`
    width: 100%;
    height: 100%;
`;

export const ImageScroller = styled.div`
    display: flex;
    width: 100%;
`;

export const Image = styled.div`
    display: flex;
`;

export const InfoContainer = styled.div`
    position: absolute;
    bottom: 0px;
    display: flex;
    margin: 0;
    padding: 1em;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    background: rgba(255,255,255,.4);
`;

export const Title = styled(Typography)`

`;

export const SubTitle = styled(Title)`
    text-transform: uppercase;
`;

export const InfoText = styled(Title)`

`;

export const BrowseButton = styled(Button)`
    text-transform: none;
    width: 10em;
    margin: 1em 0;
`;