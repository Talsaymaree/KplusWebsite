import React, { Fragment, useEffect, useState } from "react";
import covervid from "../../Video/KplusS.mp4";
import{ZoomStyled,
D1Styled, Video} from './Styled';

const Videoplayer = () => {
  const [checked, setChecked] = useState(true);
  const [name, setName] = useState("");
  console.log("video");

  useEffect(() => {
    const _ = setTimeout(() => {
      setChecked(false);
    }, 10000);
    return () => clearTimeout(_);
  }, [checked]);

  return (
      
    <Fragment  >
      <ZoomStyled in={checked}>
          <D1Styled >
        <Video  width="" height="" autoPlay muted>
          <source src={covervid} type="video/mp4" />
        </Video>
        </D1Styled>
      </ZoomStyled>
    </Fragment>
  );
};

export default Videoplayer;
