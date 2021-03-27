import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const AbiturText = ({data}) => {
    return (
        <Row><Col>
        <Card>
            <Card.Body>

 {data.map(t=>
              <div key={t.title} className="abitur-text pb-3">
                       <h1>{t.title}</h1>  
                   <p>
                       {t.text}
                   </p>
              </div>
       )}
        </Card.Body>
        </Card>
     </Col></Row>  
    )
}

export default AbiturText
