import React, {useState} from 'react';
import './Accordion.css';

const Accordion = (data) => {
    const opened = data.descrip;
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow((i) => {
            if(i) {
                return false;
            } else {
                return true;
            }
        })
    }

    return (
        <>
            <div className='accordion'>
                <h2 onClick={toggle}>{data.sample}</h2>
                <div className={`content ${ show ? "show" : "shownone"}`}>
                    {opened.map((item, i) => {
                        return <h3 key={i}>{item}</h3>
                    })}
                </div>
            </div>
        </>
    )
}

export default Accordion; 
