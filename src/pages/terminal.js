import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import Layout from '../components/Layout';
import Terminal from '../components/Terminal';
import TerminalLoader from '../components/TerminalLoader';
import TerminalInput from '../components/TerminalInput';

const TerminalPage = () => {

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
                text={'user@terminal: Welcome. Please, type --h to list available commands.'}
            />
            <TerminalInput wait={3100}/>
          </Terminal>
        </>
      </Layout>
  );
};

export default TerminalPage;
