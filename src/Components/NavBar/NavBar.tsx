import React, { useState } from "react";

import {
  ButtonStyled,
  NavBarContainer,
  Video,
  ZoomStyled,
  TextStyled
} from "./Styled"

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);

  return (

    <NavBarContainer  >

      <ButtonStyled onMouseEnter={() => setChecked(true)}
        onMouseLeave={() => setChecked(false)}>
        <TextStyled>
          LISTEN
              </TextStyled>

      </ButtonStyled>
      <ButtonStyled onMouseEnter={() => setChecked2(true)}
        onMouseLeave={() => setChecked2(false)}>
        <TextStyled>
          SHOP
        </TextStyled>

      </ButtonStyled>

    </NavBarContainer>
  );
};

export default Navbar;
