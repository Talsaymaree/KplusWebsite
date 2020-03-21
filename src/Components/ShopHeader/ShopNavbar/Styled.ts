import styled from 'styled-components';
// import {
//   IconButton,
//   Button
// } from '@material-ui/core';

export const Container = styled.div`
  background: white;
  font-size: 13px;
  font-family: archivo narrow;
  font-weight: 400;
  font-style: normal;
  line-height: 1em;
  text-transform: uppercase;
  letter-spacing: .06em;
  display: flex;
  color: #313537;
  flex-direction: column;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const TitleBand = styled.div`
  height: 12vh;
  display: flex;
  align-items: center;
  padding: 0 1em;
  justify-content: space-between;
`;

export const Menu = styled.div`
  color: #fff;
  padding: 0 1em;
  background-color: #313537;
  align-items: center;
  height: 8vh;
  display: flex;
  justify-content: space-between;
`;
