import styled, { keyframes } from "styled-components";
import Typography from "@material-ui/core/Typography";


export const TextContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 100vh;
  color: white;

`;

export const caret = keyframes`
50% {
  border-color: transparent;
}
`;

export const Text1 = styled(Typography)``;

export const Caret = styled.span`
border-right: white 0.05em solid;
animation: caret 1s steps(1) infinite;
`;