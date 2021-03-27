import React from 'react'
import {socialLink} from '../data/socialDB'

const SocialMedia = () => {
    return (
        <div className="social-media">
            <ul>
               
                {socialLink.map(link=> <li key={link.icon} ><a href={link.link}>
                    <i className={link.icon} aria-hidden="true"></i>
                </a> </li>)}
               
            </ul>
    </div>
    )
}

export default SocialMedia
