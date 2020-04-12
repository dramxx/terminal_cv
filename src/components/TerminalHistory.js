import React, { useEffect } from 'react';

//TODO: component should store and render command and response from H-2, each set should create a new line.
const TerminalHistory = ({history, outcome}) => {

  const terminalHistory = [];

  useEffect(() => {
    terminalHistory.push(history);
    terminalHistory.push(outcome);
  });

  console.log('[terminalHistory]: ', terminalHistory);

  // receive command & output from parent
  // push both as string into an Array
  // every update render both lines
  // clear history

  return (
      <>

      </>
  );
};

export default TerminalHistory;
