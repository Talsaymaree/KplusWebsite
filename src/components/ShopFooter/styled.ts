import styled from 'styled-components';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import { Icon } from '@material-ui/core';

const closerWhite = "#e5e5e5";
const grayish = "#bdbdbd";
export const Container = styled.footer`
    background: #323232;
    display: flex;
    flex-direction: column;
    padding: 3em;
    width: 100%;
    font-family: "Archivo Narrow";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    color: ${closerWhite};
`;

export const ImgStyled = styled(Img)`
    height: 200px;
`;

export const Title = styled(Typography)`
    text-transform: uppercase;
    margin-top: 1.5em;
    color: #e5e5e5;
`;

export const SubTitle = styled(Link)`
    margin: .5em 0;
    color: ${grayish};
    text-decoration: none;
`; 

export const Info = styled(Typography)`
    color: ${grayish};
`;

export const ContactInfoContainer = styled.div`
    display: flex;
    align-items: center;
    margin: .5em 0;
    color: ${grayish};
`;
export const ContactSubInfoContainer = styled.div`
    color: ${grayish};
    display: flex;
    flex-direction: column;
    padding: 0 1em;
    margin: 0 1em;
    border-left: ${grayish} .1px solid;
`;

export const SubscribeButton = styled(Button)`
    background: transparent;
    border-color: rgba(255,255,255, .2);
    margin: 1em 0;
    color: rgba(255,255,255, .2);
    text-transform: none;
`;

export const SocialContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1em 0;

    & span{
        display: flex;
    }
`;

export const SocialIcon = styled(Icon)`
    border: rgba(255,255,255, .2) .2px solid;
    width: 1.5em;
    height: 1.5em;
    padding: .1em;
    align-items: center;
    justify-content: center;
    display: flex;
`;