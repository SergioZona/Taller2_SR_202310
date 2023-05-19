import React from 'react'
import CardPlaces from './component/card/cardPlaces'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./home.css"
import { useParams } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import { useState, useEffect } from 'react';

function Home(props) {
    const [data, setData] = useState([]);
    const { id } = useParams();

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/business/recommendation/${id}/10')
    .then(response => response.json())
    .then(data => {
        setData(data.data);
    })
      .catch(error => console.error('Error:', error));
  }, []);

  const isRecomendacion = props.title === "Mis recomendaciones";
  

  return (
    <div>
      <NavBar id={id} />
      <Row className="d-flex justify-content-between align-items-center encabezado">
        <Col>
          <h1 className="text-center">{props.title}</h1>
        </Col>
      </Row>
      <Row className="body">
        {data.length > 0 ? (
          data.map((item, index) => (
            <Col key={index}>
              <CardPlaces
                name={item.name}
                address={item.address}
                city={item.city}
                state={item.state}
                stars={item.stars}
                review_count={item.review_count}
                id={id}
                idBussiness={item.business_id}
                percentage={item.percentage}
              />
            </Col>
          ))
        ) : (
          <div className='no-recomendations'>
            Aún no tienes recomendaciones. Primero comenta y/o califica lugares :D
          </div>
        )}
      </Row>
    </div>
  );
}

export default Home