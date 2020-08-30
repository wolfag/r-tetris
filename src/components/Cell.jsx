import React from 'react';
import { StyledCell } from './styled/StyledCell';
import { TETROMINOS } from '../tetrominos';

function Cell({ type }) {
  return (
    <StyledCell type={type} color={TETROMINOS[type].color}>
      {console.log('rerender')}
    </StyledCell>
  );
}

export default React.memo(Cell);
