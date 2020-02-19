import React, { Fragment, useEffect, useState } from "react";
import covervid1 from "../../Video/streamvid.mp4";
import covervid2 from "../../Video/cart3.mp4";
import coverimg from "../../Images/kplus.gif";
import coverimg2 from "../../Images/dollaz.gif";
import {ButtonStyled,
    NavBarContainer,
Video,
Image,
Image2,
TextStyled} from "./Styled"
const Navbar = () => {

    return (
        
      <NavBarContainer  >
          <ButtonStyled>
              <Video  width="" height="" autoPlay loop muted>
                  <source  src={covervid1} type="video/mp4" />
              </Video>
              <Image src={coverimg}/>
              <TextStyled>
                LISTEN
              </TextStyled>

          </ButtonStyled>
          <ButtonStyled>
              <Video  width="" height="" autoPlay loop muted>
                  <source  src={covervid2} type="video/mp4" />
              </Video>
              <Image2 src={coverimg2}/>
              <TextStyled>
                SHOP
              </TextStyled>
          </ButtonStyled>
    
      </NavBarContainer>
    );
  };
  
  export default Navbar;
  