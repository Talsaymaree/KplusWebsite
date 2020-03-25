import styled from 'styled-components';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import { AbsoluteMiddleDiv } from './../../../utils/commonStyled';

export const Container = styled.div`
    display: flex;
    position: relative;
    margin: .5em;
`;

export const Image = styled(Img)`
    width: 300px;
`;

export const DescriptionBox = styled(AbsoluteMiddleDiv)`
    position: absolute;
    bottom: 10px;
    padding: .5em;
    display: flex;
    flex-direction: column;
    background-color: rgba(255,255,255, .8);
    height: 50px;
    justify-content: center;
`;

export const Description = styled(Typography)`
    font-style: italic;
`;

export const Title = styled(Typography)`
    font-weight: bold;
`;
