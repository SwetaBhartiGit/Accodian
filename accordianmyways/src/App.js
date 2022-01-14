import React, { useState } from 'react';
import data from './components/data.js';
import Accordion from './components/Accordion.jsx';

function App() {
  const [direction, setDirection] = useState('0');

  return (
    <>
      <button name={'0'} onClick={(e) => {
        setDirection(e.target.name);
      }}>Open Top</button>
      <button name={'1'} onClick={(e) => {
        setDirection(e.target.name);
      }}>Open Right</button>
      <button name={'2'} onClick={(e) => {
        setDirection(e.target.name);
      }}>Open Bottom</button>
      <button name={'3'} onClick={(e) => {
        setDirection(e.target.name);
      }}>Open Left</button>
      <div>{direction}</div>
      {data.map((item, id) => {
        return <Accordion key={id} test={item.test} content={item.content} direction={direction}/>
      })}
    </>
  );
}

export default App;
