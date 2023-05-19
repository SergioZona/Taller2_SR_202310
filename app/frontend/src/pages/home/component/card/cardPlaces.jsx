import React from 'react'
import "./cardPlaces.css"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from 'react-router-dom';


function CardPlaces(props) {
    const navigate = useNavigate();
    return (
        <div className="cardPlaces">

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Vue_de_nuit_de_la_Place_Stanislas_%C3%A0_Nancy.jpg" />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Este lugar se encuentra en {props.address}, en la ciudad de {props.city} del estado de {props.state}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Calificación: {props.stars}</ListGroup.Item>
                    <ListGroup.Item>Calificado por {props.review_count} personas</ListGroup.Item>
                    <ListGroup.Item>Propabilidad de que te guste {props.percentage} </ListGroup.Item>

                </ListGroup>
                <Card.Body>
                    {/* <HoverRating /> */}
                    <Card.Link onClick={() => navigate(`/${props.id}/${props.idBussiness}/calificacion`)}>Calificar</Card.Link>
                    <Card.Link onClick={() => navigate(`/${props.id}/${props.idBussiness}/comentarios`)}>Ver Comentarios</Card.Link>
                </Card.Body>
            </Card>

        </div>


    )
}

export default CardPlaces