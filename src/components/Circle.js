import React from 'react'
import {Row , Col} from 'react-bootstrap'
import '../css/Circle.css'

const Circle = ({data}) => {
  
    

  return (
        <Row> 
        <Col lg={6}>
          {data.slice(0, data.length/2).map(w=>
           <div key={w.number} className="circle-wrap">
            <div className="circle">
              {w.number}
           </div>
               <p>
                  {w.title}
               </p>
          </div>)}
       
        </Col> 
        <Col lg={6}>
        {data.slice(data.length/2 , data.length).map(w=>
          <div key={w.number} className="circle-wrap">
           <div className="circle">
              {w.number}
           </div>
               <p>
                  {w.title}
               </p>
          </div>)}
        </Col> 
   </Row>
    )
}

export default Circle
