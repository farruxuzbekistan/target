import React from 'react'
import { Container, Row , Col, Card } from 'react-bootstrap';

import '../css/Team.css'
import { teamDB } from './../data/teamDB';

const Team = () => {
    return (
        <div className="team">
             <Container className="py-3">
             <h1 className="text-center py-4">Bizning Jamoa</h1>
            <Row>
               
               {teamDB.map(team=><Col key={team.title} xl={3} lg={4} md={6} sm={12} >
                <Card  className="mb-4" >
                     <Card.Img variant="top" src={team.src}/>
                        <Card.Body >
                            <Card.Title className="text-center">{team.title}</Card.Title>
                            <Card.Text className="text-center">
                                {team.text}
                            </Card.Text>
                        </Card.Body>
                        </Card>
                </Col>)}
                
            </Row>
        </Container>
        </div>
    )
}

export default Team
