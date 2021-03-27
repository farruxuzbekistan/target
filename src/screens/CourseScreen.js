import React from 'react'
import { Container } from 'react-bootstrap';
import Course from '../components/Course'
import Youtube from './../components/Youtube';
import { courseVideoDB } from './../data/courseDB';

const CourseScreen = () => {
    return (
        <div className="py-4">
            <Course />
             <Container>
                 <h1 className="head text-center mt-4">Online Webinarlar</h1>
                 <Youtube data={courseVideoDB} />
             </Container>
        </div>
    )
}

export default CourseScreen
