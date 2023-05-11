import React from 'react'
import CardPlaces from './component/card/cardPlaces'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./home.css"
import { useParams } from 'react-router-dom';
import NavBar from '../navbar/navbar';


function Home(props) {
    const listExample = [
        { "business_id": "Pns2l4eNsfO8kk83dixA6A", "name": "Abby Rappoport, LAC, CMQ", "address": "1616 Chapala St, Ste 2", "city": "Santa Barbara", "state": "CA", "postal_code": "93101", "latitude": 34.4266787, "longitude": -119.7111968, "stars": 5.0, "review_count": 7, "is_open": 0, "attributes": { "ByAppointmentOnly": "True" }, "categories": "Doctors, Traditional Chinese Medicine, Naturopathic\/Holistic, Acupuncture, Health & Medical, Nutritionists", "hours": null },
        {
            'business_id': 1,
            'name': "jeje",
            'address': "direccion aca",
            'city': "Bogota",
            'state': "sapo",
            'postal_code': 11000,
            'latitude': 142,
            'longitude': 123,
            'stars': 5,
            'review_count': 1500,
            'is_open': true,
            'attributes': "letras, cafe y aroma",
            'categories': "XD",
            'hours': 13
        },
        {
            'business_id': 1,
            'name': "jeje",
            'address': "direccion aca",
            'city': "Bogota",
            'state': "sapo",
            'postal_code': 11000,
            'latitude': 142,
            'longitude': 123,
            'stars': 5,
            'review_count': 1500,
            'is_open': true,
            'attributes': "letras, cafe y aroma",
            'categories': "XD",
            'hours': 13
        },
    ]
    const list = props.title == "Mis recomendaciones" ? [] : listExample;
    const isRecomendacion = props.title == "Mis recomendaciones" ? true : false;
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
                {list.length > 0 ? list.map((l, index) => {
                    return (<Col key={index}>
                        <CardPlaces name={l.name} address={l.address} city={l.city} state={l.state} stars={l.stars} review_count={l.review_count} id={id} idBussiness={l.id} />
                    </Col>)
                }) : <div className='no-recomendations'>Aún no tienes recomendaciones. Primero comenta y/o califica lugares :D</div>}
            </Row>

        </div >
    )
}

export default Home