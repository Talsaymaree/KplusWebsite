import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { theme } from '../../../utils/globalStyle';

export const Category = styled(Typography)<{ selected?: boolean }>`
    color: #444;
    text-transform: uppercase;
    font-size: 15px;
    margin-top: 1em;
    font-weight: 400;
    letter-spacing: .1em;
    padding: 0 5px 10px;
    line-height: 19px;
    display: block;
    border-bottom: 2px solid ${props => props.selected ? theme.palette.primary.main: 'transparent'};
`;

export const Container = styled.div`
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    align-self: center;
    justify-content: center;
`;