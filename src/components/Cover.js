import React, { useState, useContext, useEffect } from 'react';
import Num from './Number';
import './Cover.css';
import { CredentialContext, CardOpen } from '../App';

import { IconContext } from 'react-icons';
import { ImHeart } from 'react-icons/im';

function Cover() {
  const [style, setStyle] = useState({});
  const [credentialStatus, setCredential] = useContext(CredentialContext);
  const [isCardOpen,] = useContext(CardOpen);

  useEffect(() => {
    if (credentialStatus) {
      setStyle({backgroundColor: "rgb(223, 195, 255)"});
    }
    if (isCardOpen) {
      setStyle({
        backgroundColor: "rgb(223, 195, 255)",
        transform: "rotateY(-180deg)"
      })
    }
  }, [isCardOpen, credentialStatus])

  return (
    <div id="cover" style={style}>
      <div className="coverFront">
        {!credentialStatus && 
          <button id="start-btn" onClick={() => setCredential(!credentialStatus)}>Start</button>
        }
        {credentialStatus && 
          <div className="coverContent">
            <q>Aimer ce n'est pas se regarder lun lautre, <br/> c'est regarder dans la même direction.</q>
            <Num />
            <IconContext.Provider value={{className: "heart"}}>
              <ImHeart />
            </IconContext.Provider>
          </div>
        }
      </div>
      <div className="coverBack">
      </div>
    </div>
  )
}

export default Cover
