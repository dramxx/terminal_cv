import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import Layout from '../components/Layout';
import TerminalLoader from '../components/TerminalLoader';
import Terminal from '../components/Terminal';

const TerminalPage = () => {

  return (
      <Layout>
        <Helmet title={'terminal'}/>
        <>
          <Terminal>
            <TerminalLoader
                text={'user@terminal: Booting system up..'}
                wait={1000}
            />
            <TerminalLoader
                text={'user@terminal: Bootstrapping terminal..'}
                wait={3000}
            />
            <TerminalLoader
                text={'user@terminal: Launching terminal..'}
                wait={5000}
            />
          </Terminal>
        </>
      </Layout>
  );
};

export default TerminalPage;
