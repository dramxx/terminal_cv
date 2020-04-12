import React from 'react';
import styled from 'styled-components';

const TerminalHeader = styled.div`
  position: relative;
  margin-top: 10vh;
  margin-left: 10vw;
  width: 60vw;
  height: 5.5vh;
  border: 2px solid #404040;
  border-radius: 10px 10px 0 0;;
  background-color: #404040;
  z-index: -1;
`;

const TerminalBody = styled.div`
  margin-left: 10vw;
  width: 60vw;
  height: 60vh;
  border-bottom: 2px solid grey;
  border-left: 2px solid grey;
  border-right: 2px solid grey;
  border-radius: 0 0 10px 10px;
  background-color: black;
  z-index: -100;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const WindowButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: relative;
  top: 14.5vh;
  left: 10.5vw;
  margin-left: 20px;
  background-color: ${props => props.color};
  opacity: 100%;  
`;

const TerminalTextWrapper = styled.div`
  padding-top: 1vh;
`;

// TODO: inner overflow;
const TerminalWrapper = styled.div`
  @media (max-width: 1150px) {
    ${TerminalHeader} & {
      margin: 0;
      padding: 0;
    }
    ${TerminalBody} & {
      margin: 0;
      padding: 0;
    }
  }
`;

const Terminal = ({children}) => {

  return (
      <TerminalWrapper>
        <ButtonsWrapper>
          <WindowButton color={'#ed473b'}/>
          <WindowButton color={'#ffe75e'}/>
          <WindowButton color={'#83ff3b'}/>
        </ButtonsWrapper>
        <TerminalHeader/>
        <TerminalBody>
          <TerminalTextWrapper>
            {children}
          </TerminalTextWrapper>
        </TerminalBody>
      </TerminalWrapper>
  );
};

export default Terminal;
