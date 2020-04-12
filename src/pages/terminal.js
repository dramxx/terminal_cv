import React, { useState } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal';
import TerminalLoader from '../components/TerminalLoader';
import TerminalInput from '../components/TerminalInput';
import TerminalResponse from '../components/TerminalResponse';
import ShutdownSequence from '../components/ShutdownSequence';
import TerminalHistory from '../components/TerminalHistory';

const TerminalPage = () => {

  const [display, setDisplay] = useState(false);
  const [history, setHistory] = useState('');
  const [outcome, setOutcome] = useState('');

  const fetchDisplay = (status) => {
    setDisplay(status);
  };

  const fetchHistory = (status) => {
    setHistory(status);
  };

  const fetchOutcome = (status) => {
    setOutcome(status);
  };

  //TODO: terminal input line wont appear in Chrome, Edge
  return (
      <Layout>
        <Helmet title={'terminal'}/>
        <>
          <Terminal>
            <TerminalLoader
                wait={500}
                text={'Booting system up'}
            />
            <TerminalLoader
                wait={1500}
                text={'Launching terminal v1.0'}
            />
            <TerminalLoader
                wait={3000}
                text={'Welcome. Please, type --h to list available commands.'}
            />
            <TerminalHistory
                history={history}
                outcome={outcome}
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
