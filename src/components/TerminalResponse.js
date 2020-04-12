import React from 'react';
import styled from 'styled-components';

const HistoryWrapper = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: 1vw;
  line-height: 30px;
`;

const ResponseWrapper = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: 1vw;
  line-height: 30px;
`;

const SystemPrefix = styled.span`
  // font-weight: 600;
`;

const TerminalResponse = ({display, history, outcome}) => {

  return (
      display ? <>
        <HistoryWrapper>
          {history}
        </HistoryWrapper>
        <ResponseWrapper>
          <SystemPrefix>user@terminal:</SystemPrefix> {outcome}
        </ResponseWrapper>
      </> : null
  );
};

export default TerminalResponse;
