import React from 'react'
import {galleryDB} from  '../data/galleryDB'
import '../css/Gallery.css'
import { Container } from 'react-bootstrap'

const Gallery = () => {
    return (
       <div className="py-4">
            <Container>
           <div className="gallery mb-12">
              {galleryDB.map(g=> <figure className={g.className}>
                <img src={g.src} alt={g.src} className="gallery__img rounded-lg" />
              </figure>)}
            </div>
     </Container>
       </div>
        
    )
}

export default Gallery
