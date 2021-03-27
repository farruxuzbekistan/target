import React from 'react'
import {phoneDB} from '../data/phoneDB'

const PhoneList = () => {
    return (
        <ul>
             <li>
               <h4>Telefon Raqamlar</h4>
            </li>
            {phoneDB.map(p=><li key={p.phone}><a href={p.anchor}>{p.phone}</a></li>)}
             </ul>
    )
}

export default PhoneList
