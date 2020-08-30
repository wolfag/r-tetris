import React from 'react';
import { StyledStartButton } from './styled/StyledStartButton';

function StartButton({ onClick }) {
  return <StyledStartButton onClick={onClick}>Start Game</StyledStartButton>;
}

export default StartButton;
