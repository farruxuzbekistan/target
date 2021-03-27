import React from 'react'
import {locationDB} from '../data/locationDB'

const Location = () => {
    return (
    <ul>
        <li><h4>Manzillarimiz</h4></li>
         {locationDB.map(loc=> <li key={loc.location}><a href={loc.map}>
            <i className={loc.icon} aria-hidden="true"></i>{loc.location}
         </a></li>)}
     </ul>
    )
}

export default Location
