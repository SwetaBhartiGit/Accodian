import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({test, content, direction}) => {
    const [show, setShow] = useState(false);

    return (
        <div className={'accord'+direction} onClick={() => { setShow(!show)}}>
            <div className='test'>{test}</div>
            {show ? <span>{content}</span> : <div></div>}
        </div>
    )
}


export default Accordion; 
