import styled from 'styled-components';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import { AppBar } from '@material-ui/core';
import { theme } from './../../utils/globalStyle';

export const Container = styled(AppBar)`
    top: auto;
    bottom: 0;
    background: ${theme.palette.background.paper}
`;

export const ImgStyled = styled(Img)`
    height: 200px;
`;

export const Title = styled(Typography)`
    text-transform: uppercase;
    color: #e5e5e5
`;