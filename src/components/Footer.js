import React from 'react'
import { Container , Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {navbarImg , navbarDB} from './../data/navbarDB';
import SocialMedia from './SocialMedia';
import Location from './Location';
import CourseList from './CourseList';
import PhoneList from './PhoneList';

const Footer = () => {
    return (
        <footer className="footer py-5">
              <Container>
                      <img className='pb-4' alt='target' src={navbarImg.src} style={{width: 180}}/>
                  <Row>
                      <Col lg={3} md={6} sm={12}>
                         <Location />

                         <SocialMedia />
                      </Col>
                      <Col lg={3} md={6} sm={12} >
                         
                          <ul> 
                            <li><h4>Yordamchi Linklar</h4></li>
                             {navbarDB.map(link=><li key={link.id}>
                                  <Link to={link.to}>
                                      {link.title}
                                  </Link>
                              </li>)}
                          </ul>
                      </Col>
                      <Col lg={3} md={6} sm={12}>
                        
                         <CourseList />
                      </Col>
                      <Col lg={3} md={6} sm={12}>
                         
                          <PhoneList />
                      </Col>
                  </Row>
                  <div className="footer-line"></div>
                  <div className="text-center py-4">
                      &copy; copyright Target | Powered by <a href="https://t.me/farrux_muslim">Farrux Developer</a>
                  </div>
              </Container>
        </footer>
    )
}

export default Footer
