import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { availableCommands, catTexts, directoryList, helpText } from '../commons/config';
import { sanitizeInput } from '../commons/helpers';

const SystemPrefix = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: 1vw;
  line-height: 30px;
  font-weight: 600;
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
  width: 40vw;
`;

const TerminalInput = ({wait, displayStatus, historyStatus, outcomeStatus}) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(true);
    }, wait);

    const enterListener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        routeCommand(event.target.value).then(() => event.target.value = '');
      }
    };
    document.addEventListener('keydown', enterListener);

    return () => {
      document.removeEventListener('keydown', enterListener);
      clearTimeout(timer);
    };
  }, []);

  const routeCommand = async (input) => {

    const command = sanitizeInput(input);

    switch (command) {
      case availableCommands.help:
        await handleHelp(`user@terminal: ${input}`);
        break;

      case availableCommands.list:
        await handleList(`user@terminal: ${input}`);
        break;

      case availableCommands.quit:
        await handleQuit(`user@terminal: ${input}`);
        break;

      case availableCommands.catAbout:
      case availableCommands.catHistory:
      case availableCommands.catRecentProjects:
      case availableCommands.catSkills:
        await handleCat(command, `user@terminal: ${input}`);
        break;

      case availableCommands.download:
        await handleDownload();
        break;

      default:
        await handleUnrecognized(input);
    }
  };

  const handleHelp = (history) => {
    historyStatus(history);
    outcomeStatus(helpText.join(' '));
    displayStatus(true);
  };

  const handleList = (history) => {
    historyStatus(history);
    outcomeStatus(directoryList.join(', '));
    displayStatus(true);
  };

  const handleQuit = (history) => {
    historyStatus(history);
    outcomeStatus('Shutting down..');
    displayStatus(true);
    setTimeout(() => {navigate('/')}, 1500);
  };

  const handleCat = (command, history) => {

    const document = command.split('+')[1];

    switch (document) {
      case '1_about.txt':
        historyStatus(history);
        outcomeStatus(catTexts.about);
        displayStatus(true);
        break;
      case '2_work_history.txt':
        historyStatus(history);
        outcomeStatus(catTexts.history);
        displayStatus(true);
        break;
      case '3_skills.txt':
        historyStatus(history);
        outcomeStatus(catTexts.skills);
        displayStatus(true);
        break;
      case '4_recent_projects.txt':
        historyStatus(history);
        outcomeStatus(catTexts.projects);
        displayStatus(true);
        break;
      default:
        return;
    }
  };

  const handleDownload = () => {
    // TODO: download pdf from src
  };

  const handleUnrecognized = (unrecognizedInput) => {
    historyStatus(`user@terminal: ${unrecognizedInput}`);
    outcomeStatus(`ERROR: Input '${unrecognizedInput}' was not recognized.`);
    displayStatus(true);
  };

  return (
      <>
        {/* TODO: autofocus */}
        <div style={visible ? {display: 'inline flex'} : {display: 'none'}}>
          <SystemPrefix>user@terminal: </SystemPrefix>
          <Input type='text'/>
        </div>
      </>
  );
};

export default TerminalInput;
