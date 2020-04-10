import React from 'react';
import { Helmet } from 'react-helmet/es/Helmet';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Wrapper = styled.div`
  position: relative;
  font-family: 'Inconsolata', monospace;
  margin-top: 30vh;
`;

const Heading = styled.div`
  font-size: 200px;
`;

const SubHeading = styled.div`
  font-size:25px;
  line-height: 45px;
  padding-left: 10px;
`;

const Link = styled.a`
  text-decoration: underline;
  color:inherit;
  text-decoration: none;
  background-image: linear-gradient(to right, green, green);
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 50% 8px;
  transition: background-size .4s ease;
  &:hover{
    background-size: 100% 8px;
  }
`;

const IndexPage = () => {

  return (
      <Layout>
        <Wrapper>
          <Helmet title={'hello'}/>
          <Heading>hello.</Heading>
          <SubHeading>
            <div>
              I'm Drahoš and I enjoy building busty frontends.
            </div>
            <div>
              to further information, please launch <Link href={'/terminal'}>terminal</Link>.
            </div>
          </SubHeading>
        </Wrapper>
      </Layout>
  );
};

export default IndexPage;
