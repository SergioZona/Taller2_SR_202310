import { Button, Modal } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom';
import Comentarios from './components/comentarios/comentarios';
import Calificaciones from './components/calificaciones/calificaciones';

function DetailCard(props) {
    const navigate = useNavigate();
    const { id } = useParams();

    return (
        <div><Modal show={true} onHide={() => navigate(-1)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    {props.comentarios ? "Comentarios" : "Calificaciones"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.comentarios ? <Comentarios /> : <Calificaciones />}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => navigate(-1)}>
                    Cerrar
                </Button>
                {!props.comentarios ?
                    <Button variant="primary" onClick={() => navigate(-1)}>
                        Guardar
                    </Button> : <div></div>}
            </Modal.Footer>
        </Modal></div>
    )
}

export default DetailCard