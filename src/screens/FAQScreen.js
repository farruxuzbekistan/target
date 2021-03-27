import React from 'react'
import { Container } from 'react-bootstrap';
import FAQ from './../components/FAQ';
import { faqDB } from './../data/faqDB';


const FAQScreen = () => {
    return (
        <div className='faqScreen py-5'>
          <Container>
            <h1 className='head pb-5 text-center'>Ko'p beriladigan savollar</h1>
           <FAQ data={faqDB} />
          </Container>
        </div>
    )
}

export default FAQScreen
