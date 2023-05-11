import React from 'react'
import CardPlaces from './component/card/cardPlaces'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./home.css"
import { useParams } from 'react-router-dom';
import NavBar from '../navbar/navbar';


function Home(props) {
    const list = props.title == "Mis recomendaciones" ? [] : [1, 2, 3, 4]
    const { id } = useParams();
    return (
        <div>
            <NavBar id={id} />
            <Row className="d-flex justify-content-between align-items-center encabezado">
                <Col>
                    <h1 className="text-center">{props.title}</h1>
                </Col>
            </Row>
            <Row className="body">
                {list ? list.map((l, index) => {
                    return (<Col key={index}>
                        <CardPlaces />
                    </Col>)
                }) : <div className='no-recomendations'>Aún no tienes recomendaciones. Primero comenta y/o califica lugares :D</div>}
            </Row>

        </div >
    )
}

export default Home