import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Typography from "@material-ui/core/Typography";

export const Container = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 99vw;
  height: 100vh;
  color: white;
  font: 10em "Helvetica", "Fira Sans", sans-serif;
`;

const caret = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const H1 = styled(Typography)``;

export const Caret = styled.span`
  border-right: white 0.05em solid;
  animation: caret 1s steps(1) infinite;
`;

const IndexPage = () => {
  const [displayedText, updateDisplayText] = useState("");
  const [currentPosition, incrementCurrentPosition] = useState(0);
  const [tick, incrementTick] = useState(0);
  const [currentTxtPos, incrementCurrentTxtPos] = useState(0);
  const [isDecrement, reverseDecrement] = useState(false);
  var dataText = ["Coming Soon...", "...قريبا", " demnächst"];

  useEffect(() => {
    const interval = setInterval(() => {
      incrementTick(prev => prev + 1);
      // console.log(
      //   "just testing this," + currentPosition + " , " + displayedText
      // );
    }, 150);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    typeWriter();
  }, [tick]);

  const typeWriter = () => {
    if (currentPosition < dataText[currentTxtPos].length && !isDecrement) {
      incrementCurrentPosition(prev => prev + 1);
      // console.log("incrementi/ng");
      updateDisplayText(
        dataText[currentTxtPos].substring(0, currentPosition + 1)
      );
    } else {
      if (currentPosition > 0) {
        incrementCurrentPosition(prev => prev - 1);
        // console.log("decrementing");
        reverseDecrement(true);
        updateDisplayText(
          dataText[currentTxtPos].substring(0, currentPosition - 1)
        );
      } else {
        reverseDecrement(false);
        if (currentTxtPos < dataText.length - 1) {
          // console.log("it's changing for new word");
          incrementCurrentTxtPos(prev => prev + 1);
        } else {
          // console.log("it's going back to first word");
          incrementCurrentTxtPos(0);
        }
      }
    }
  };

  return (
    <Container>
      <H1 variant="h2">
        {displayedText}
        <Caret />
      </H1>
    </Container>
  );
};

export default IndexPage;
