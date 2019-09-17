import React from 'react';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel">
      {/*Test to make sure these two buttons are rendering*/}
      {/*Test if being !closed disables the toggleLocked*/}
      <button disabled={!closed} onClick={toggleLocked} className="toggle-btn">
         {/*buttons' text changes to reflect the state the door will be in if clicked*/}
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      {/*Test if being locked disables the toggleClosed*/}
      <button data-testid='close-button' disabled={locked} onClick={toggleClosed} className="toggle-btn">
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

export default Controls;
