import React, { useEffect, useState } from 'react'
import CommonSection from '../shared/CommonSection'

import '../styles/tour.css'
import { Col, Container, Row } from 'reactstrap'
import SearchBar from '../shared/SearchBar'
import tourData from '../assets/data/tours'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter'

const Tours = () => {

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const pages = Math.ceil(5 / 4);
        setPageCount(pages);

    }, [page]);

    return (<>
        <CommonSection tittle={'All Tours'} />
        <section>
            <Container>
                <Row>
                    <SearchBar />
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    {
                        tourData.map(tour => <Col lg='3' className='mb-4' key={tour.id}> <TourCard tour={tour} /></Col>)
                    }
                    <Col lg='12'>
                        <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                            {[...Array(pageCount).keys()].map(number => (
                                <span key={number}
                                    onClick={() => setPage(number)}
                                    className={page === number ? 'active__page' : ''}
                                >
                                    {number + 1}
                                </span>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <Newsletter />
    </>)
}

export default Tours