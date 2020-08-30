import React from 'react';
import { StyledDisplay } from './styled/StyledDisplay';

function Display({ gameOver, text }) {
  return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;
}

export default Display;
