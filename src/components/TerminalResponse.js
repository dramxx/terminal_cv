import React from 'react';
import styled from 'styled-components';

const ResponseWrapper = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: 1vw;
  line-height: 30px;
`;

const TerminalResponse = () => {

  //TODO: handle visibility of this component in parent
  return (
      <ResponseWrapper>
        user@terminal: TEST RESPONSE
      </ResponseWrapper>
  );
};

export default TerminalResponse;
