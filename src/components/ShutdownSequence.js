import React from 'react';

const ShutdownSequence = ({display, outcome}) => {

  //TODO: disable input line on shutdown prompt

  return (
      display ? <div>
        {outcome}
      </div> : null
  );
};

export default ShutdownSequence;
