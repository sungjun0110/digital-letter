import React, { useState, useEffect, useContext } from 'react';
import './Letter.css';
import PartA from './letter/PartA';
import PartB from './letter/PartB';
import LastPart from './letter/LastPart';

import { CredentialContext, CardOpen, PictureStateContext } from '../App';

function Letter() {
  const letter = [<PartA />, <PartB />, <LastPart />];
  const [letterStyle, setLetterStyle] = useState({});
  const fadeInStyle = {opacity: 1};
  const fadeOutStyle = {opacity: 0};
  const [part, setPart] = useState();
  const [credentialStatus,] = useContext(CredentialContext);
  const [pictureState, setPictureState] = useContext(PictureStateContext);
  const [isCardOpen,] = useContext(CardOpen);
  var count = 0;

  useEffect(() => {
    setTimeout(() => printLetter(), 1000);
  }, [])

  function printLetter() {
    setPart(letter[count]);
    count++;
    setTimeout(() => fadeIn(), 500);
  }

  function fadeIn() {
    setLetterStyle(fadeInStyle);
    if (count > letter.length) {
      count = 0;
      setPictureState(true);
      return;
    }
    if (count < letter.length) setTimeout(() => fadeOut(), 3000);
  }

  function fadeOut() {
    setLetterStyle(fadeOutStyle);
    setTimeout(() => printLetter(), 600);
  }

  return (
    <div id="letterContainer">
      <div id="letterContent" style={letterStyle}>
        {credentialStatus && isCardOpen && !pictureState && part}
      </div>
    </div>
  )
}

export default Letter
