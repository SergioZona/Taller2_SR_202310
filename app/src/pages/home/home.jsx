import React from 'react'
import CardPlaces from './component/card/cardPlaces'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./home.css"
import { Link, useParams } from 'react-router-dom';


function Home() {
    const { id } = useParams();
    return (
        <div>
            <Row className="d-flex justify-content-between align-items-center encabezado">
                <Col>
                    <h1 className="text-center">Lugares</h1>

                </Col>
                <Col md={{ span: 2 }}>
                    <Link to="/" className="custom-btn btn-10" > Log out</Link>

                </Col>


            </Row>

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
            </Row>
            <h1 className="text-center">Mis recomendaciones</h1>
        </div >
    )
}

export default Home