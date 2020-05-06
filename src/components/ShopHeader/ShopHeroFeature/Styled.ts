import styled from 'styled-components';
import Slider from 'react-slick';
import Img from 'gatsby-image';

export const SliderStyled = styled(Slider)`
      width: 100%;
      background-color: grey;
    height: 100%;
    position:absolute !important;
    overflow: hidden;
`;

export const Container = styled.div`
    display: flex;
    overflow: hidden;
    width: 95%;
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