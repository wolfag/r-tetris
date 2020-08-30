import { useState, useCallback, useEffect } from 'react';

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  const linePoint = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // we have score
    if (rowsCleared > 0) {
      // this is how original Tetris score is calculated
      setScore((prev) => prev + linePoint[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, linePoint, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
