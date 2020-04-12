import React from 'react';
import styled from 'styled-components';

const LineWrapper = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: 1vw;
  line-height: 30px;
`;

const SystemPrefix = styled.span`
  font-weight: 600;
`;

const TerminalResponse = ({display, history, outcome}) => {

  return (
      display ? <>
        <LineWrapper>
          <SystemPrefix>user@terminal:</SystemPrefix> {history}
        </LineWrapper>
        <LineWrapper>
          <SystemPrefix>user@terminal:</SystemPrefix> {outcome}
        </LineWrapper>
      </> : null
  );
};

export default TerminalResponse;
