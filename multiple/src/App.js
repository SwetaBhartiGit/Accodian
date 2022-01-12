import './App.css';
import Accordion from './components/Accordion';
import data from './components/data';

function App() {
  return (
    <>
    <div className='main'>
      {data.map((item, idx) => {
        return <Accordion key={idx} sample={item.sample} descrip={item.descrip}/>
      })}
    </div>
    </>
  );
}

export default App;
