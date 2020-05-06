import styled from 'styled-components';
import Zoom from "@material-ui/core/Zoom";

export const ZoomStyled = styled(Zoom)``;

export const D1Styled = styled.div`
 width: 100vw;
 height: 100vh;
 transition:  0.7s ease-out;
`;

export const Video = styled.video`
  object-fit: fill;
  width: 100%;
 height: 100%;
  z-index: 10;
`;