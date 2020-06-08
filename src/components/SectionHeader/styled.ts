import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { theme } from './../../utils/globalStyle';

export const Container = styled.div`
    flex-direction: column;
    display: flex;
    margin: .5em 1em;
`;

export const Link = styled(Button)`
    padding: 0;
    margin: .5em 0;
    justify-content: flex-start;
    background: none;
    color: ${theme.palette.secondary.main};
`;