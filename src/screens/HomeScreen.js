import React from 'react'
import Showcase from '../components/Showcase'
import About from './../components/About';
import Course from '../components/Course'
import '../css/HomeScreen.css'
import Why from '../components/Why';

import Feedback from './../components/Feedback';



const HomeScreen = () => {
    return (
       <div className="homescreen">
            <Showcase />
            <About />
            <Course />
            <Why />
            <Feedback />

       </div>
    )
}

export default HomeScreen
