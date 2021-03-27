import React from 'react'
import { Accordion, Card  } from 'react-bootstrap'
import '../css/FAQ.css'

const FAQ = ({data}) => {
    return (
        
      <div className="faq">
             <Accordion defaultActiveKey="0">
                {data.map(d=><Card key={d.id}>
                    <Accordion.Toggle as={Card.Header} eventKey={d.id}>
                       {d.question}
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={d.id}>
                    <Card.Body>{d.answer}</Card.Body>
                    </Accordion.Collapse>
                </Card>)}
            </Accordion>
      </div>
          
       
    )
}

export default FAQ
