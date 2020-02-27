import React, { Fragment, useEffect, useState } from "react";
import covervid1 from "../../Video/streamvid.mp4";
import covervid2 from "../../Video/cart3.mp4";
import coverimg from "../../Images/kplus.gif";
import coverimg2 from "../../Images/dollaz.gif";
import {ButtonStyled,
  HeaderContainer,
Video,
ZoomStyled,
D1Styled,
BottomStyled,
  SlideStyled,
  Container,
  LogoStyled,
  ToggleContainer,
  ToggleLabel,
  Fixed,
  IconStyled,
  FadeStyled,
  PreviousWebsiteIconStyled,
  PageUpStyled,
  PageUpContainer,
TextStyled} from "./Styled"
const HeaderSlider = (props) => {
  const [checked, setChecked] = useState(false);


    return (
        
      <HeaderContainer  >
        <ToggleContainer checked={checked} >
          <ButtonStyled   onClick={() => setChecked((prev) => !prev)}>    
                 <TextStyled>
                K+
              </TextStyled>    
                <Video  width="" height="" autoPlay loop muted>
                  <source  src={covervid1} type="video/mp4" />
              </Video>      
                     </ButtonStyled>      
        </ToggleContainer>
        <SlideStyled direction='right' in={checked} mountOnEnter unmountOnExit timeout={800}>
            <BottomStyled>
              <ButtonStyled onClick={() => window.open('https://twitter.com/syncedvibes')}>
                <IconStyled ></IconStyled>
              </ButtonStyled>
              <ButtonStyled onClick={() => window.open('https://www.instagram.com/synced.vibes/ ')}>
                <IconStyled ></IconStyled>
              </ButtonStyled>
              <ButtonStyled
                onClick={() =>
                  window.open('https://open.spotify.com/playlist/4WLJKeeVOtZAqFjs88yr9k')
                }
              >
                <IconStyled ></IconStyled>
              </ButtonStyled>
              <ButtonStyled onClick={() => window.open('https://soundcloud.com/syncedvibesdotcom')}>
              </ButtonStyled>
            </BottomStyled>
          </SlideStyled>

      </HeaderContainer>
    );
  };
  
  export default HeaderSlider;
   