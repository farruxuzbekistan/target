import React from 'react'
import { Container } from 'react-bootstrap'
import Youtube from './Youtube'
import {feedbackDB} from '../data/feedbackDB'
import '../css/Feedback.css'

const Feedback = () => {
    return (
       <div className="feedback">
             <Container>
                <h1 className='py-3 text-center'>O'quvchilardan kelgan feedbacklar</h1>
                <Youtube data={feedbackDB} />   
             </Container>
       </div>
    )
}

export default Feedback
