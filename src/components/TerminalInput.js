import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { availableCommands } from '../commons/config';
import { sanitizeInput } from '../commons/helpers';

const SystemPrefix = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: 1vw;
  line-height: 30px;
`;

const Input = styled.input`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: .5vw;
  line-height: 30px;
  border:none;
  background-image:none;
  background-color:transparent;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
`;

const TerminalInput = ({wait}) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(true);
    }, wait);

    const enterListener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        routeCommand(event.target.value).then(() => null);
      }
    };
    document.addEventListener('keydown', enterListener);

    return () => {
      document.removeEventListener('keydown', enterListener);
      clearTimeout(timer);
    };
  }, []);

  const routeCommand = async (userCommand) => {

    const command = sanitizeInput(userCommand);

    switch (command) {
      case availableCommands.help:
        await handleHelp();
        break;

      case availableCommands.list:
        await handleList();
        break;

      case availableCommands.quit:
        await handleQuit();
        break;

      case
      availableCommands.catAbout ||
      availableCommands.catHistory ||
      availableCommands.catRecentProjects ||
      availableCommands.catSkills:
        await handleCat(command);
        break;

      case availableCommands.download:
        await handleDownload();
        break;

      default:
      // TODO: return command not recognized message
    }
  };

  const handleHelp = () => {
    // TODO: render <TerminalResponse/> & new <TerminalInput /> in parent
    console.log('[HELP]');
  };

  const handleList = () => {
    // TODO: render directoryList content and new terminal line in parent
  };

  const handleQuit = () => {
    // TODO: delayed CSS load??
    // TODO: render shutdown sequence
    return navigate('/');
  };

  const handleCat = (commandString) => {
    // TODO: parse command param after '+', handle each case
    console.log('[commandString]: ', commandString);
  };

  const handleDownload = () => {
    // TODO: download pdf from src
  };

  return (
      <>
        {/* TODO: autofocus and retain focus */}
        <div style={visible ? {display: 'inline flex'} : {display: 'none'}}>
          <SystemPrefix>user@terminal: </SystemPrefix>
          <Input type='text'/>
        </div>
      </>
  );
};

export default TerminalInput;
