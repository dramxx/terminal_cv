import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { availableCommands } from '../commons/config';

const SystemPrefix = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-top: 1vw;
  margin-left: 1vw;
  line-height: 10px;
`;

//TODO: autofocus and fix focus
const Input = styled.input`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-top: 0.6vw;
  margin-left: 1vw;
  line-height: 10px;
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

    const listener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        inputValidation(event.target.value);
      }
    };
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('keydown', listener);
      clearTimeout(timer);
    };
  }, []);

  const validateCommand = (command, value) =>
      command === Object.keys(availableCommands).find(key => availableCommands[key] === value);

  const inputValidation = (command) => {

    const sanitizedCommand = command.replace(/\s+/g, '+').toLowerCase();

    switch (sanitizedCommand) {
      case validateCommand(sanitizedCommand, availableCommands.help):
        handleHelp();
        break;
      case validateCommand(sanitizedCommand, availableCommands.list):
        handleList();
        break;
      case validateCommand(sanitizedCommand, availableCommands.quit):
        //FIXME: not getting here on true condition
        handleQuit();
        break;
      case
      validateCommand(sanitizedCommand, availableCommands.catAbout) ||
      validateCommand(sanitizedCommand, availableCommands.catHistory) ||
      validateCommand(sanitizedCommand, availableCommands.catRecentProjects) ||
      validateCommand(sanitizedCommand, availableCommands.catSkills,
      ):
        handleCat();
        break;
      case validateCommand(sanitizedCommand, availableCommands.download):
        handleDownload();
        break;
      default:
        //TODO: return command not recognized message
    }
  };

  const handleHelp = () => {
    // TODO: render command response and new terminal line in parent
  };

  const handleList = () => {
    // TODO: render directoryList content and new terminal line in parent
  };

  const handleQuit = () => {
    //  TODO: route to index page
    console.log('[3 called handleQuit]');
  };

  const handleCat = () => {
    //  TODO: parse command param after '+', handle each case
  };

  const handleDownload = () => {
    //  TODO: download pdf from src
  };

  return (
      <div style={visible ? {display: 'inline flex'} : {display: 'none'}}>
        <SystemPrefix>user@terminal: </SystemPrefix>
        <Input type='text'/>
      </div>
  );
};

export default TerminalInput;
