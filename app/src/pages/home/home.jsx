import React from 'react'
import CardPlaces from './component/cardPlaces'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Home() {
    return (
        <div>
            <Row>
                <Col >
                    <CardPlaces />
                </Col>
                <Col>
                    <CardPlaces />
                </Col>
                <Col >
                    <CardPlaces />
                </Col>
                <Col>
                    <CardPlaces />
                </Col>
                <Col >
                    <CardPlaces />
                </Col>
                <Col>
                    <CardPlaces />
                </Col>
                <Col >
                    <CardPlaces />
                </Col>
                <Col>
                    <CardPlaces />
                </Col>

            </Row>

        </div>
    )
}

export default Home