import React from 'react'
import '../css/About.css'
import { Card, Col, Container, Row } from 'react-bootstrap'


const About = () => {
    return (
        <div className='about'>
            <Container>
                  <Row>
                      <Col>
                         <Card>
                             <Card.Body>
                             <h1>Biz haqimizda</h1>  
                          <p>
                          "Target" kompaniyasi o'z faoliyatini 2015-yil may oyida O'quv Markaz ko'rinishida boshlagan. Hozirga kelib 6 ta yirik filiallariga ega bo'lib , bular: Sebzor ,  Chilonzor, Uchtepa , Yunusobod, Jangoh ,Sergeli tumanlarida joylashgan. 2018-yildan Target Consulting (chet elga o'qishga jo'natish), 2019-yildan Target Recruiting (chet elga ishga jo'natish) bo'limlari ochilgan.2020-yilda "Target Kids" brendi ostida hususiy bog'chasini ochgan.
                          </p>
                          <p>
                            Bugungi kunga qadar Target o'z faoliyati davomida muaffaqiyatli natijalarga erishmoqda , jumladan
                            Targetda yurtimizdagi chet El OTM filiallaridan tashqari Chet El universitetlariga ham tayyorlov kurslari mavjud bo'lib ,"Target Consulting" yo'nalishi orqali xorijdagi Universitetlarga o'qishga kirish imkoniyatini ham beradi va viza olishda amaliy yordam ko'rsatadi !
                          </p>
                        
                             </Card.Body>
                         </Card>
                      </Col>
                  </Row>
            </Container>
        
        </div>
    )
}

export default About
