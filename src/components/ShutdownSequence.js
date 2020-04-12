import React from 'react';

const ShutdownSequence = ({display, outcome}) => {

  return (
      display ? <div>
        {outcome}
      </div> : null
  );
};

export default ShutdownSequence;
