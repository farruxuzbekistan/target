import React from 'react'
import { Container } from 'react-bootstrap';
import Map from './../components/Map';
import '../css/Contact.css'
import LeeLoo from '../components/LeeLoo';

const ContactScreen = () => {
    return (
        <div className="contactScreen py-5">
            <Container>
                <LeeLoo />
                <Map />
            </Container>
        </div>
    )
}

export default ContactScreen
