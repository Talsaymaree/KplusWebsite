import styled from 'styled-components';
import Typography from "@material-ui/core/Typography";
import {
    IconButton,
    Button
} from '@material-ui/core';

export const NavBarContainer = styled.div `
  display: flex;
  flex-direction: row;
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden; @media (max-width: 767px) {
    flex-direction: column;

  }
  @media (max-width: 400px) {
    flex-direction: column;
    
  }
`;
export const ButtonStyled = styled(Button)`
height: 100%;
width: 50%;
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
  width: 50vw;

  height:98vh;
  z-index: -1;
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
 justify-self: center;
  font-size: 7em;
  padding-top: 50%;
  z-index: -1; 
  color : red;
`;