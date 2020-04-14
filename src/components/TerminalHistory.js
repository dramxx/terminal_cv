import React, { useEffect, useState } from 'react';
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
  display: none;
`;

const TerminalHistory = ({terminalHistory}) => {

  const [appHistory, setAppHistory] = useState('');

  useEffect(() => {
    setAppHistory(appHistory + '|' + terminalHistory + '|');
  }, [terminalHistory]);

  console.log('[appHistory]: ', appHistory);

  return (
      <>
        <LineWrapper>
          <SystemPrefix>{systemPrefix}</SystemPrefix>{}
        </LineWrapper>
      </>
  );
};

export default TerminalHistory;
