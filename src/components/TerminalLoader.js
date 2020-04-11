import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const TextLine = styled.div`
  font-family: 'Inconsolata', monospace;
  font-size: 20px;
  color: green;
  margin-top: 1vw;
  margin-left: 1vw;
  line-height: 10px;
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
        {
          <TextLine style={visible ? {display: 'block'} : {display: 'none'}}>
            {visible ? text : null}
          </TextLine>
        }
      </>
  );
};

export default TerminalLoader;
