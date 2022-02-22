import React, { useContext } from 'react'
import './Restart.css';

import { VscDebugRestart } from 'react-icons/vsc';

import { CardOpen, PictureStateContext } from '../App';

function Restart() {
  const [, setIsCardOpen] = useContext(CardOpen);
  const [, setPictureState] = useContext(PictureStateContext);

  function clickHandler() {
    setIsCardOpen(false);
    setPictureState(false);
  }

  return (
    <button id='restartBtn' onClick={() => clickHandler()}>
      <VscDebugRestart className="restartIcon" />
    </button>
  )
}

export default Restart
