import styled from 'styled-components';
import { ListItem } from '@material-ui/core';
import { theme } from './../../utils/globalStyle';

export const Container = styled.div`
 width: 15em;
 height: 100%;
 display: flex;
 flex-direction: column;
 /* align-items: center; */
 justify-content: center;

 & .MuiListItemIcon-root{
   color: wheat;
 }
`;

export const ActiveItem = styled(ListItem)`
  color: ${theme.palette.secondary.main};
`;
