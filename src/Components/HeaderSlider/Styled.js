import Zoom from "@material-ui/core/Zoom";
import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import {
    IconButton,
    Button
} from '@material-ui/core';
import {  Fab } from '@material-ui/core';
import { Slide } from '@material-ui/core';
import { fade } from '@material-ui/core/styles/colorManipulator';
import Fade from '@material-ui/core/Fade';
// import { black } from "material-ui/styles/colors";
export const PageUpContainer = styled.div`
  position: fixed;
  bottom: 0.3em;
  left: 0;
  transition: width 0.3s ease-in;
  z-index: 100;
  /* flex-direction: column-reverse; */
`;

export const PageUpStyled = styled(Fab)`
  position: relative;
  background-color: red;};
`;

export const Container = styled.div`
  position: relative;
  flex-direction: row;
  height: 5em;
  align-items: center;
  overflow: hidden;
  flex-direction: row;

  /* flex-direction: column-reverse; */
`;
export const Fixed = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: ${({ width }) => (width ? '100%' : '4em')};
  transition: width 0.3s ease-in;
  z-index: 2;
  /* flex-direction: column-reverse; */
`;

export const LogoStyled = styled.img`
  height: 4em;
  width: 4em;
  position: absolute;
  background-color: ${({ background }) =>
    background ? `red` : 'none'};
  transition: background-color 1s ease-in;
  z-index: 4;
  right: 0;
  cursor: pointer;
`;

export const BottomStyled = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  z-index: -2;
`;

export const ToggleLabel = styled(Typography)`
  position: relative;
  font-size: 0.02em;
  left: 0;
  z-index: 1000;
  /* margin-left: 96%; */
  /* position: relative; */
  cursor: pointer;
`;

export const ToggleContainer = styled.div`
  position: absolute;
  left: 0;
  width: 4em;
  font-size: 0.02em;
  /* bottom: 1em; */

  flex-direction: column;
  /* margin-bottom: 5.5vh; */
`;

export const SlideStyled = styled(Slide)`
`;

export const FadeStyled = styled(Fade)``;

export const SpotifyButton = styled(Button)`
  background-color: #1db954;
  color: white;
`;

export const IconStyled = styled.img`
  height: 3.5vh;
  margin-bottom: 1em;
`;

export const PreviousWebsiteIconStyled = styled.img`
  height: 3.7em;
  margin-bottom: 1em;
  /* height: 4em; */
`;


export const ZoomStyled = styled(Zoom)``;

export const D1Styled = styled.div`

 transition:  0.7s ease-out;
`;

export const HeaderContainer = styled.div `
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  position: absolute;
  height: 4em;
  width: 6vw;

  overflow: hidden; @media (max-width: 767px) {

  }
  @media (max-width: 400px) {
    flex-direction: column;
    
  }
`;
export const ButtonStyled = styled(Button)`
height: 5em;
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
  width: 100vw;
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
  left: 2vw;
  font-size: 2.5em;
  z-index: 1; 
  color : red;
`;