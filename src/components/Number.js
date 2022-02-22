import React, { useState, useEffect, useContext } from 'react';
import './Number.css';
import { CardOpen } from '../App';

function Number() {
  const [num, setNum] = useState(0);
  const [isCardOpen, setCardOpen] = useContext(CardOpen);

  useEffect(() => {
    increase(num);
  }, [isCardOpen])

  function increase(num) {
    if ( num > 999 ) {
      setTimeout(() => {setCardOpen(true)}, 1000);
      setTimeout(() => {setNum(0);}, 2000);
      return;
    }
    let newNum = num + 1;
    if (num < 900) {
      setNum(newNum);
      setTimeout(() => increase(newNum), 5);
    }
    else if ( num < 1000 ) {
      setNum(newNum);
      setTimeout(() => increase(newNum), (5 * ((num-899)/15)**2));
    }
  }
  

  return (
    <div id='numCounter'>
      {num}
    </div>
  )
}

export default Number
