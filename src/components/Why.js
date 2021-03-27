import React from 'react'
import {  Container} from 'react-bootstrap'
import '../css/Why.css'
import { whyDB } from './../data/whyDB';
import Circle from './Circle';

const Why = () => {
    return (
        <div className="why py-5">
            <Container>
               <h1>Nima uchun aynan Target ?</h1>
               <Circle data={whyDB}/>
            </Container>
        </div>
    )
}

export default Why
