import styled from 'styled-components';
import { theme } from './../../../utils/globalStyle';
import { ListItem } from '@material-ui/core';

export const NestedItem = styled(ListItem)`
    padding-left: ${theme.spacing(4)}px;
    border-right: 2px solid ${theme.palette.secondary.main};
    background: ${theme.palette.primary.light};
`;

interface HeaderProps{
    open: boolean;
}

export const Header = styled(ListItem)<HeaderProps>`
    border-right: 2px solid ${props => props.open ? theme.palette.secondary.main : theme.palette.primary.main};
    /* background: ${props => props.open? theme.palette.primary.dark: theme.palette.primary.light}; */
`;