import styled from 'styled-components';
import Img from 'gatsby-image';
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
    background: #323232;
    display: flex;
    flex-direction: column;
    padding: 1em;
    width: 100%;
    font-family: "Archivo Narrow";
`;

export const ImgStyled = styled(Img)`
    height: 200px;
`;

export const Title = styled(Typography)`
    text-transform: uppercase;
    color: #e5e5e5
`;