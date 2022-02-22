import React, { useState, useEffect } from 'react';
import './App.css';
import Letter from './components/Letter';
import Cover from './components/Cover';
import Bgm from './components/Bgm';

export const CredentialContext = React.createContext();
export const CardOpen = React.createContext();
export const PictureStateContext = React.createContext();

function App() {
  const credentialsState = useState(false);
  const isCardOpen = useState(false);
  const pictureState = useState(false);

  const [innerWidth,] = useState(window.innerWidth);
  const [style, setStyle] = useState({});

  useEffect(() => {
    if (innerWidth >= 600) {
      setStyle({transform: "translateZ(1px) translateX(50%)"})
    }
    else {
      setStyle({transform: "translateZ(1px)"});
    }
  }, [innerWidth])

  return (
    <CredentialContext.Provider value={credentialsState}>
      <CardOpen.Provider value={isCardOpen}>
        <PictureStateContext.Provider value={pictureState}>
          <div id='card'>
            <div className='card' style={isCardOpen[0]? style: null}>
              <Cover />
              {credentialsState[0] && isCardOpen[0] && <Letter />}
              {credentialsState[0] && <Bgm />}
            </div>
          </div>
        </PictureStateContext.Provider>
      </CardOpen.Provider>
    </CredentialContext.Provider>
  );
}

export default App;
