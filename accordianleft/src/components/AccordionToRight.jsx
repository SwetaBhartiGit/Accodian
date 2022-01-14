import React from 'react';
import './Accordion.css';

const AccordionToRight = (props) => {
    return (
        <>
        <div className="accordion">
            <button onClick={props.onToggle}>{props.title}</button>            
            <div className={`content ${ props.active ? "Display" : "" }`}>
                <h2>{props.content}</h2>
            </div>
        </div>
        </>
    )
}

export default AccordionToRight;