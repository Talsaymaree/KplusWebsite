import Zoom from "@material-ui/core/Zoom";
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import {
    IconButton,
    Button
} from '@material-ui/core';

export const ZoomStyled = styled(Zoom)``;

export const D1Styled = styled.div`

 transition:  0.7s ease-out;
`;

export const NavBarContainer = styled.div `
  display: flex;
  flex-direction: column;
  top:7vh;
  left:  1vw;
  position: absolute;
  height: 10%;
  width: 30vw;

  overflow: hidden; @media (max-width: 767px) {

  }
  @media (max-width: 400px) {
    flex-direction: column;
    
  }
`;
export const ButtonStyled = styled(Button)`
height: 50%;
width: 100vw;
:hover {
		color:  red ;
		cursor: pointer;}
    overflow: hidden; @media (max-width: 767px) {

    width: 100%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const Video = styled.video `
  width: 80vw;
  left: 0;
  height:20vh;
  z-index: -4;
  object-fit: fill;  
  overflow: hidden; @media (max-width: 767px) {
  height: 49vh;
width: 100%;
}
@media (max-width: 400px) {
width: 100%;
height: 48vh;
}
`;
export const Image2 = styled.img `
  position: absolute;
  width: 10%;
  z-index: -1; 

`;

export const Image = styled.img `
  position: absolute;
  padding-top: 5%;
  width: 23%;
  z-index: -1; 

`;

export const TextStyled = styled.div`
  position: absolute;
  top:0;
  left: 0;
  font-size: 2.5em;
  z-index: 1; 
  color : red;
`;