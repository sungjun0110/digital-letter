import React, { useState, useEffect, useContext } from 'react';
import './Bgm.css';
import bgm from '../music/bgm.mp3';
import { IconContext } from 'react-icons';
import { MdMusicNote } from 'react-icons/md';
import { CardOpen } from '../App';

function Bgm() {
  const [audio, ] = useState(new Audio(bgm));
  const [isPlaying, setIsPlaying] = useState(null);
  const [isCardOpen,] = useContext(CardOpen);

  function onClickHandler() {
    if (isPlaying) {
      setIsPlaying(!isPlaying);
      audio.pause();
      return;
    }
    setIsPlaying(!isPlaying);
    audio.play();
  }

  return (
    <div id="bgm" style={isCardOpen? {zIndex: "1"} : {zIndex: "3"}}>
      <IconContext.Provider value={{className: 'note', size: '1.5rem'}}>
        <button 
          id='bgmBtn' 
          onClick={() => onClickHandler()}
        >
          {isPlaying? 
            <div className="bgmBtnDiv">
              <MdMusicNote />
              <label>On</label>
            </div>
            : 
            <div className="bgmBtnDiv">
              <MdMusicNote />
              <label>Off</label>
            </div>
          }
        </button>
      </IconContext.Provider>
    </div>
  )
}

export default Bgm
