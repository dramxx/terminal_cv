import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TextLine = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-left: 1vw;
  line-height: 30px;
`;

const TerminalLoader = ({wait, text}) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, wait);
    return () => clearTimeout(timer);
  }, []);

  return (
      <>
        {/* TODO: show preloader for first two lines */}
        {
          <TextLine style={visible ? {display: 'block'} : {display: 'none'}}>
            {visible ? text : null}
          </TextLine>
        }
      </>
  );
};

export default TerminalLoader;
