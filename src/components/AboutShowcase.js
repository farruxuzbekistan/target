import React from 'react'
import '../css/AboutShowcase.css'
import { Col, Container, Row } from 'react-bootstrap'
import {aboutShowcaseDB } from '../data/aboutShowcaseDb'

const AboutShowcase = () => {
   return (
        <div className="aboutshowcase mb-5" style={{background: `url(${aboutShowcaseDB.image}) no-repeat top / cover`, minHeight: '120vh'}}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} md={12}>
                       <h1 className='pb-3'>{aboutShowcaseDB.title}</h1>
                       <p className="pb-3">
                         {aboutShowcaseDB.description}
                       </p>
                       <p className='py-4'>
                           {aboutShowcaseDB.desc2}
                       </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutShowcase

