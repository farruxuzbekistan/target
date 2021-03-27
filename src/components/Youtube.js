import React from 'react'
import { Col, Row } from 'react-bootstrap'
import '../css/Youtube.css'

const Youtube = ({data}) => {
    return (
        <div className="youtube py-5">
            
                <Row>
                    {data.map(d=> <Col key={d.src} lg={4} md={6} sm={12} className='youtube-wrap'>
                          <iframe title={d.src} width="100%" height="100%" src={d.src} frameBorder="0" allow={d.allow} allowFullScreen></iframe>
                     </Col>)}
                </Row>
          
        </div>

    )
}

export default Youtube
