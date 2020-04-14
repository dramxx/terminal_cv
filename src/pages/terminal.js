import React, { useState } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal';
import TerminalLoader from '../components/TerminalLoader';
import TerminalInput from '../components/TerminalInput';
import TerminalResponse from '../components/TerminalResponse';
import ShutdownSequence from '../components/ShutdownSequence';
import TerminalHistory from '../components/TerminalHistory';
import {systemMessages} from '../commons/config';

const TerminalPage = () => {

  const [display, setDisplay] = useState(false);
  const [history, setHistory] = useState('');
  const [outcome, setOutcome] = useState('');
  const [terminalHistory, setTerminalHistory] = useState('');

  const fetchDisplay = (status) => {
    setDisplay(status);
  };

  const fetchHistory = (status) => {
    setHistory(status);
  };

  const fetchOutcome = (status) => {
    setOutcome(status);
  };

  const fetchTerminalHistory = (status) => {
    setTerminalHistory(status);
  }

  //TODO: terminal input line wont appear in Chrome, Edge
  return (
      <Layout>
        <Helmet title={'terminal'}/>
        <>
          <Terminal>
            <TerminalLoader
                wait={500}
                text={systemMessages.boot}
            />
            <TerminalLoader
                wait={1500}
                text={systemMessages.launch}
            />
            <TerminalLoader
                wait={3000}
                text={systemMessages.welcome}
            />
            <TerminalHistory
                terminalHistory={terminalHistory}
            />
            <TerminalResponse
                display={display}
                history={history}
                outcome={outcome}
            />
            <TerminalInput
                wait={3100}
                displayStatus={fetchDisplay}
                historyStatus={fetchHistory}
                outcomeStatus={fetchOutcome}
                terminalHistory={fetchTerminalHistory}
            />
            <ShutdownSequence
                display={display}
                outcome={outcome}
            />
          </Terminal>
        </>
      </Layout>
  );
};

export default TerminalPage;
