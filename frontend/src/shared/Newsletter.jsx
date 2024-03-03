import React from 'react'

import './newsletter.css'
import maleTourist from '../assets/images/male-tourist.png'
import { Col, Container, Row } from 'reactstrap'

const Newsletter = () => {
  return (<>
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter__content">
              <h2>Subscribe now to get useful traveling information.</h2>

              <div className="newsletter__input">
                <input type="mail" placeholder='Enter your email' />
                <button className="btn newsletter__btn">Subcribe</button>
              </div>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipiscing elit.
                Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
              </p>
            </div>
          </Col>
          <Col lg='6'>
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </>)
}

export default Newsletter