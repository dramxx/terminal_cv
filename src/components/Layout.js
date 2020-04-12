import React from 'react';
import styled from 'styled-components';

const GlobalStyles = styled.div`
  body, html{
    @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
    font-family: 'Inconsolata', monospace;
    margin: 0;
    padding: 0;
  },
  
  a:hover {
    text-decoration: underline;
    underline-color: red;
  }, 
`;

const Wrapper = styled.div`
  margin-left: 10vw;
`;

const Layout = ({children}) => {

  return (
      <div>
        <GlobalStyles/>
        <Wrapper>{children}</Wrapper>
      </div>
  );
};

export default Layout;
