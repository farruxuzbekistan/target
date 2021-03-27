import React from 'react'
import { Col, Container , Row , Button } from 'react-bootstrap'
import {showcaseDB} from '../data/showcaseDB'
import { LinkContainer } from 'react-router-bootstrap';


const Showcase = () => {
    return (
        <div className="showcase py-5">
                <Container className='py-5'>
                <h1 className='text-center pb-3'>{showcaseDB.title}</h1>
                     <Row className="align-items-center">
                          <Col lg={6} className="mbm-2">
                              <ul>
                                  {showcaseDB.university.map(univer=><li key={univer} >
                                        <i className="fa fa-university fa-2x mr-3"></i>
                                        <p>{univer}</p>
                                   </li>)}
                              </ul>
                         </Col>
                          <Col lg={6}>
                          <iframe width="100%" title='abitur' height="315" key={showcaseDB.iframe} src={showcaseDB.iframe} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                          </Col>
                     </Row>
                      <div className="d-flex align-item-center justify-content-center pt-5">
                      <LinkContainer  to='/contact'>
                                  <Button>
                                    Ro'yxatdan O'tish
                                 </Button>
                    </LinkContainer>
                      </div>
                </Container>
           </div>
    )
}

export default Showcase
