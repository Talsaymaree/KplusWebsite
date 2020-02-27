import React, { Fragment, useEffect, useState } from "react";
import covervid1 from "../../Video/streamvid4.mp4";
import covervid2 from "../../Video/cart4.mp4";
import coverimg from "../../Images/kplus.gif";
import coverimg2 from "../../Images/dollaz.gif";
import {ButtonStyled,
    NavBarContainer,
Video,
ZoomStyled,
D1Styled,
TextStyled} from "./Styled"
const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [name, setName] = useState("");


    return (
        
      <NavBarContainer  >
  
          <ButtonStyled         onMouseEnter={() => setChecked(true)}
        onMouseLeave={() => setChecked(false)}>    
                 <TextStyled>
                LISTEN
              </TextStyled>       
              <ZoomStyled in={checked}>
              <Video  width="" height="" autoPlay loop muted>
                  <source  src={covervid1} type="video/mp4" />
              </Video>     
                       </ZoomStyled>
          </ButtonStyled>
          <ButtonStyled onMouseEnter={() => setChecked2(true)}
        onMouseLeave={() => setChecked2(false)}> 
           <TextStyled>
          SHOP
        </TextStyled>       
        <ZoomStyled in={checked2}>
        <Video  width="" height="" autoPlay loop muted>
            <source  src={covervid2} type="video/mp4" />
        </Video>     
                 </ZoomStyled>
    </ButtonStyled>
    
      </NavBarContainer>
    );
  };
  
  export default Navbar;
   