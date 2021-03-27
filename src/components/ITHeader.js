import React from 'react'
import { Container, Row , Col} from 'react-bootstrap'
import '../css/ITHeader.css'
import { itCourseDB } from './../data/itDB';



const ITHeader = () => {
    
  
   return (
       <div className="bg-hn" >
              <div className="Header py-5">
                    <Container className="h-100 ">
                    <Row className="align-items-center">
                        <Col  md="12">
                        <h1 className="header-title">Kelajak Kasblari</h1>
                        </Col>
                    </Row>
                        <Row className="py-5 mt-5">
                            {itCourseDB.map(c=><Col lg={3} md={6}>
                                {c.icon}
                                <h3 className="header-title-h3 mb-3">{c.title}</h3>
                                <p>
                                  {c.text}
                                </p>
                            </Col>)}
                        </Row>
                    </Container>
                </div>
       </div>
    )
}

export default ITHeader
