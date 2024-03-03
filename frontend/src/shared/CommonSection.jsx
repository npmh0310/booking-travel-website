import React from 'react'
import './common-section.css'
import { Col, Container, Row } from 'reactstrap'

const CommonSection = ({ tittle }) => {
    return (<>
        <section className="common__section">
            <Container>
                <Row>
                    <Col lg='12'>
                        <h1>{tittle}</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    </>)
}

export default CommonSection