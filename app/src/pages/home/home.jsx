import React from 'react'
import CardPlaces from './component/card/cardPlaces'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./home.css"
import { Link, useParams } from 'react-router-dom';


function Home() {
    const list = [1, 2, 3, 4]
    const recomendations = [];
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
                {list ? list.map((l, index) => {
                    return (<Col key={index}>
                        <CardPlaces />
                    </Col>)
                }) : null}
            </Row>
            <h1 className="text-center">Mis recomendaciones</h1>
            {recomendations.length !== 0 ? recomendations.map((l, index) => {
                return (<Col key={index}>
                    <CardPlaces />
                </Col>)
            }) : <div className='no-recomendations'>Aún no tienes recomendaciones. Primero comenta y/o califica lugares :D</div>}
        </div >
    )
}

export default Home