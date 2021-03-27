import React from 'react'
import { Container } from 'react-bootstrap';
import { itVideoDB } from '../data/techDB';
import ITHeader from './../components/ITHeader';
import Tech from './../components/Technology';
import Youtube from './../components/Youtube';



const ITScreen = () => {
    return (
        <div className='itScreen'>
            <ITHeader />
            <Tech />
             <Container>
                  <h1 className="head text-center pt-5">Smm Video Darslari</h1>
                 <Youtube data={itVideoDB} />
             </Container>
        </div>
    )
}

export default ITScreen
