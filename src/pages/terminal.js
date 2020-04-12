import React, { useState } from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal';
import TerminalLoader from '../components/TerminalLoader';
import TerminalInput from '../components/TerminalInput';
import TerminalResponse from '../components/TerminalResponse';

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

  // TODO: IMPLEMENT cat
  // TODO: MAINTAIN history object in parent and prepend each output

  return (
      <Layout>
        <Helmet title={'terminal'}/>
        <>
          <Terminal>
            <TerminalLoader
                wait={500}
                text={'Booting system up..'}
            />
            <TerminalLoader
                wait={1500}
                text={'Launching terminal..'}
            />
            <TerminalLoader
                wait={3000}
                text={`user@terminal: Welcome. Please, type --h to list available commands.`}
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
          </Terminal>
        </>
      </Layout>
  );
};

export default TerminalPage;
