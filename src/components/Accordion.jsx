import React, {useState} from 'react'
import "./Accordion.css"
import {data} from './data.js'

export default function Accordion() {
    const [show, setShow] = useState(false)
    const click = (id) => {
        if(show === id) {
            setShow(null);
        }
        setShow(id);
    }
    return (
        <>
            <div>
                {data.map((item, id) => {
                    return (
                        <>
                        <div className='selector' onClick={() => click(id)} key={id}>
                            <div className='accordion-header'>
                                <h2>{item.sample}</h2>
                                {show === id? <p>➖</p> : <p>➕</p>}
                            </div>
                            <div className='accordion-content'>
                                {show === id? <p>{item.description}</p> : null}
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}