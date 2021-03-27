import React from 'react'
import Youtube from './../components/Youtube';
import {abiturTextDB, abiturVideoDB , abiturCicleDB , abiturFeedbackDB} from '../data/abiturDB'
import { Button,  Container } from 'react-bootstrap';
import '../css/AbiturScreen.css'
import { LinkContainer } from 'react-router-bootstrap';
import AbiturText from '../components/AbiturText';
import Circle from '../components/Circle';

const AbiturScreen = () => {
    return (
        <div className="abitur py-5">
           <Container>
                <h1 className="head text-center">Abituriyent 2.0 programmasi</h1>
                <Youtube  data={abiturVideoDB} />

               
                        <div className="d-flex justify-content-center pb-5">
                        <LinkContainer to='/contact'>
                        <Button>
                             Ro'yxatdan O'tish
                        </Button>
                        </LinkContainer>
                        </div>
                   
                
                <AbiturText data={abiturTextDB} />
                <div className="abitur-for py-5">
                    <h1 className="head pb-5  pt-3">Bu loyiha kimlar uchun ?</h1>
                  <Circle data={abiturCicleDB} />    
                </div>  
                 
                <h1 className="head">ABITURIYENT 2.0 FEEDBACKS</h1> 
               <Youtube  data={abiturFeedbackDB} /> 

           </Container>
        </div>
    )
}

export default AbiturScreen
