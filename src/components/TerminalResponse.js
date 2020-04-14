import React from 'react';
import styled from 'styled-components';
import { systemPrefix } from '../commons/config';

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
          <SystemPrefix>{systemPrefix}</SystemPrefix>{history}
        </LineWrapper>
        <LineWrapper>
          <SystemPrefix>{systemPrefix}</SystemPrefix>{outcome}
        </LineWrapper>
      </> : null
  );
};

export default TerminalResponse;
