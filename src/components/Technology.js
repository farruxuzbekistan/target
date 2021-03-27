import React from 'react'
import { Container, Row , Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../css/Tech.css'
import { techDB } from './../data/techDB';

const Tech = () => {
    return (
        <div className="tech">
             <Container className="py-3">
             <h1 className="text-center py-4">Texnalogiyalar</h1>
            <Row>
               
               {techDB.map(tech=><Col key={tech.title} xl={3} lg={4} md={6} sm={12} >
                <Card  className="mb-4" >
                     <Card.Img variant="top" src={tech.src}/>
                        <Card.Body >
                            <Card.Title className="text-center pb-3">{tech.title}</Card.Title>
                             <LinkContainer className="d-flex justify-content-center" to={tech.to}>
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

export default Tech
