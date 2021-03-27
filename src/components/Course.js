import React from 'react'
import { Container, Row , Col, Card, Button } from 'react-bootstrap';
import {coursedb} from '../data/courseDB'
import { LinkContainer } from 'react-router-bootstrap';
import '../css/Course.css'

const Course = () => {
    return (
        <div className="course">
             <Container className="py-3">
             <h1 className="text-center py-4">Bizning Kurslar</h1>
            <Row>
               
               {coursedb.map(course=><Col key={course.title} xl={3} lg={4} md={6} sm={12} >
                <Card  className="mb-4" >
                     <Card.Img variant="top" src={course.src}/>
                        <Card.Body >
                            <Card.Title className="text-center pb-3">{course.title}</Card.Title>
                             <LinkContainer className="d-flex justify-content-center" to={course.to}>
                                 <Button variant="primary">Batafsil Ma'lumot</Button>
                             </LinkContainer>
                        </Card.Body>
                        </Card>
                </Col>)}
                
            </Row>
        </Container>
        </div>
    )
}

export default Course
