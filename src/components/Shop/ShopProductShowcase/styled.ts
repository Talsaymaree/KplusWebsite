import styled from 'styled-components';
import Img from "gatsby-image";
import {theme} from '../../../utils/globalStyle';
import { Typography } from '@material-ui/core';

export const Container = styled.div`
    display: flex; 
    flex-direction: column;
    margin: .5em 0;
`;
export const ImgContainer = styled.div`
    display: flex;
    width: 100%;
    background-color: ${theme.palette.primary.light};
    min-height: 100px;
    position: relative;
    padding: 2px;
    margin: .5em 0;
`;

export const ButtonContainer = styled.div`
    display: flex;
    position: absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%); 

    & > button{
        margin: .5em;
    }
`;

export const ImgStyled = styled(Img)`
    width: 100%;
    height: 100%;
`;

export const Price = styled(Typography)`
    font-weight: bold;
    margin: .2em 0 .4em;
`;

export const Description = styled(Typography)`
    margin: .2em 0;
`;

export const New = styled.span`
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 12px;
    font-family: roboto;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5em;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: .1em;
    background: #313537;
    padding: .4em;
`;

export const Discount = styled.span`
    position: absolute;
    right: 10px;
    top: 45px;
    font-size: 12px;
    font-family: roboto;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5em;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: .1em;
    background: #313537;
    padding: .4em;
`;