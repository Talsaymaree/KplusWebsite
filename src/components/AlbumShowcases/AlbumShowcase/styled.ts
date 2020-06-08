import styled from 'styled-components';
import Img from 'gatsby-image';
import { theme } from './../../../utils/globalStyle';

export const Container = styled.div`
    margin: .5em;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    height: 300px;
    /* position: relative; */
`;

export const AlbumDescription = styled.div`
    /* position: absolute; */
    /* bottom: 20; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 75px;
    background: ${theme.palette.background.paper}
`;

export const ImgStyled = styled(Img)`
    height: 300px;
`;
