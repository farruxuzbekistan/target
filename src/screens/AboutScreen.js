import React from 'react'
import About from '../components/About'
import Gallery from '../components/Gallery';
import AboutShowcase from './../components/AboutShowcase';


const AboutScreen = () => {
    return (
        <>
             <AboutShowcase />
             <div className="my-5">
                 <About />
             </div>
             <Gallery />
        </>
    )
}

export default AboutScreen
