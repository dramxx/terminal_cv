import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';
import { availableCommands, catTexts, directoryList, helpText, systemMessages, systemPrefix } from '../commons/config';

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

const TerminalInput = ({wait, displayStatus, historyStatus, outcomeStatus, terminalHistory}) => {

  const [visible, setVisible] = useState(false);

  const promptRef = useRef(null);

  useEffect(() => {

    const timer = setTimeout(() => {
      setVisible(true);
      promptRef.current.focus();
    }, wait);

    const enterListener = event => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        routeCommand(event.target.value).then(() => event.target.value = '');
      }
    };
    document.addEventListener('keydown', enterListener);

    const tabListener = event => {
      if (event.code === 'Tab' && event.target.value) {
        if (event.target.value.length > 4) {
          const phrase = event.target.value.substring(0, 5);
          const prompt = document.getElementById('prompt');

          switch (phrase) {
            case 'cat 1':
              prompt.value = 'cat 1_about.txt';
              break;
            case 'cat 2':
              prompt.value = 'cat 2_work_history.txt';
              break;
            case 'cat 3':
              prompt.value = 'cat 3_skills.txt';
              break;
            case 'cat 4':
              prompt.value = 'cat 4_recent_projects.txt';
              break;
            default:
              return;
          }
        }
      }
    };
    document.addEventListener('keydown', tabListener);

    return () => {
      document.removeEventListener('keydown', enterListener);
      document.removeEventListener('keydown', tabListener);
      clearTimeout(timer);
    };
  }, []);

  const routeCommand = async (input) => {

    //TODO: MINOR: regex to conditionally ( cat, --d ) replace white space for +
    const command = input.replace(/\s+/g, '+').toLowerCase();

    switch (command) {
      case availableCommands.help:
        await handleHelp(input);
        break;

      case availableCommands.list:
        await handleList(input);
        break;

      case availableCommands.quit:
        await handleQuit(input);
        break;

      case availableCommands.catAbout:
      case availableCommands.catHistory:
      case availableCommands.catRecentProjects:
      case availableCommands.catSkills:
        await handleCat(command, input);
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
    outcomeStatus(helpText.join(''));
    terminalHistory([history, helpText.join('')]);
    displayStatus(true);
  };

  const handleList = (history) => {
    historyStatus(history);
    outcomeStatus(directoryList.join(', '));
    terminalHistory([history, directoryList.join(', ')]);
    displayStatus(true);
  };

  const handleQuit = (history) => {
    historyStatus(history);
    outcomeStatus(systemMessages.shutdown);
    terminalHistory([history, systemMessages.shutdown]);
    displayStatus(true);
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };

  const handleCat = (command, history) => {

    const document = command.split('+')[1];

    switch (document) {
      case '1_about.txt':
        historyStatus(history);
        outcomeStatus(catTexts.about);
        terminalHistory([history, catTexts.about]);
        displayStatus(true);
        break;
      case '2_work_history.txt':
        historyStatus(history);
        outcomeStatus(catTexts.history);
        terminalHistory([history, catTexts.history]);
        displayStatus(true);
        break;
      case '3_skills.txt':
        historyStatus(history);
        outcomeStatus(catTexts.skills);
        terminalHistory([history, catTexts.skills]);

        displayStatus(true);
        break;
      case '4_recent_projects.txt':
        historyStatus(history);
        outcomeStatus(catTexts.projects);
        terminalHistory([history, catTexts.projects]);
        displayStatus(true);
        break;
      default:
        return;
    }
  };

  const handleDownload = () => {
    // TODO: download pdf/md from src
  };

  const handleUnrecognized = (unrecognizedInput) => {
    historyStatus(unrecognizedInput);
    outcomeStatus(`ERROR: Input '${unrecognizedInput}' was not recognized.`);
    terminalHistory([unrecognizedInput, `ERROR: Input '${unrecognizedInput}' was not recognized.`]);
    displayStatus(true);
  };

  return (
      <>
        <div style={visible ? {display: 'inline flex'} : {display: 'none'}}>
          <SystemPrefix>{systemPrefix}</SystemPrefix>
          <Input
              ref={promptRef}
              name='prompt'
              id='prompt'
              type='text'
          />
        </div>
      </>
  );
};

export default TerminalInput;
