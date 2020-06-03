import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content:center;
    margin: 1em 0;
`;

export const Title = styled(Typography)`
    font-size: 18px;
    font-family: archivo narrow;
    font-weight: 400;
    font-style: normal;
    line-height: 1em;
    text-transform: uppercase;
    color: #444;
    padding: .5em;
    letter-spacing: .1em;
    border-bottom: 2px solid black;
`; 