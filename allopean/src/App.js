import { useState } from 'react';
import './App.css';

function App() {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className="wrapper">
      <div className='accordion'>
        {data.map((item, i) => (
          <div className='item'>
            <div className='sample' onClick={()=>toggle(i)}>
              <h2>{item.sample}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
            <div className='descrip'>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    sample: 'Test1',
    description: 'hi this is description for test 1'
  },
  {
    sample: 'Test2',
    description: 'hi this is descriptin for test 2'
  }
]

export default App;
