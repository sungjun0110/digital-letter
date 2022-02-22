import React, { useState, useEffect } from 'react'
import Restart from '../Restart';
import { IconContext } from 'react-icons';
import { ImHeart } from 'react-icons/im';

function LastPart() {
  const [style, setStyle] = useState({opacity: 0});
  const [isLast, setIsLast] = useState(false);
  const pictures = [
    <>
      <div className="finale">
        <p>
        <IconContext.Provider value={{className: 'littleHeart'}}>
          <ImHeart />
        </IconContext.Provider>
        </p>
        <Restart />
      </div>
    </>
  ]
  const [picture, setPicture] = useState();
  var i = 0;

  useEffect(() => {
    setIsLast(false);
    printPicture();
  }, [])
  
  function printPicture() {
    setPicture(pictures[i]);
    i++;
    setStyle(prevStyle => ({ ...prevStyle, opacity: 1}));

    if (i >= pictures.length) {
      i = 0;
      setIsLast(true);
      return;
    }

    setTimeout(() => dimStyle(), 5000); 
  }

  function dimStyle() {
    setStyle(prevStyle => ({ ...prevStyle, opacity: 0}));
    setTimeout(() => removePicture(), 600);
  }

  function removePicture() {
    setPicture();
    setTimeout(() => printPicture(), 500);
  }

  return (
    <>
      {isLast? 
        <>
          {picture}
        </> :
        <div id='image'>
          <div className="imgFrame" style={style}>
            {picture}
          </div>
        </div>
      }
    </>
  )
}

export default LastPart
