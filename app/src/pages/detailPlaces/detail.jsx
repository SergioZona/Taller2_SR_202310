import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import Comentarios from './components/comentarios';
import Calificaciones from './components/calificaciones';

function DetailCard(comentarios) {
    const [show, setShow] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleClose = () => setShow(false);
    return (
        <div><Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Calificacion</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                {comentarios ? <Calificaciones /> : <Calificaciones
                />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => navigate(`/${id}/recomendaciones`)}>
                    Close
                </Button>
                {comentarios ?
                    <Button variant="primary" onClick={() => navigate(`/${id}/recomendaciones`)}>
                        Save Changes
                    </Button> : <div></div>}
            </Modal.Footer>
        </Modal></div>
    )
}

export default DetailCard