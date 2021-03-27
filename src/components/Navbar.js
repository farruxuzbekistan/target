import React , {useState , useEffect} from 'react'
import {Navbar , Nav , Image , Container} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { navbarDB , navbarImg } from './../data/navbarDB';

const NavbarComponent = () => {
   
    const [navbarWord , setNavbarWord] = useState([])

    useEffect(() => {
        setNavbarWord(navbarDB)
    }, [])

  
 
 return (
<Navbar  expand="lg" className="py-3">
        <Container>
        <Navbar.Brand href="#home"><Image fluid style={{width: 180}} src={navbarImg.src} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {navbarWord.map(word=><LinkContainer key={word.id} to={word.to}>
                    <Nav.Link>{word.title}</Nav.Link></LinkContainer>)}
                    
             </Nav>
  </Navbar.Collapse>
        </Container>
</Navbar>
    )
}

export default NavbarComponent
