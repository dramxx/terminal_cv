import React from 'react';
import styled from 'styled-components';

const  HistoryWrapper = styled.div`
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

const TerminalResponse = ({display, history, outcome}) => {

  return (
      display &&
      <>
        <HistoryWrapper>
          {history}
        </HistoryWrapper>
        <ResponseWrapper>
          user@terminal: {outcome}
        </ResponseWrapper>
      </>
  );
};

export default TerminalResponse;
