import './App.css';
import React, {useState} from 'react';
import Data from './components/data.js';
import AccordionToRight from './components/AccordionToRight';

function App() {
  const [show, setShow] = useState('0');
  const toggle = (i) => {
    if (show === i) {
      return setShow('0');
    }
    setShow(i);
  }

  const ourData = Data;

  return (
    <>
    <div className='main'>
      {ourData.map((item, idx) => {
        return <AccordionToRight onToggle={ () => toggle(idx) } active={ show === idx } key={ idx } title={ item.title } content={ item.content }/>
      })}
    </div>
    </>
  );
}

export default App;
