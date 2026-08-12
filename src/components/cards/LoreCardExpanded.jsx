import { React } from 'react';
import { Card, Row, Col, Image, Button, Modal } from 'react-bootstrap';

function LoreCardExpanded(props) {
    return (
        <Modal show={props.show} onHide={props.onHide} fullscreen>
            <Modal.Header closeButton>
                <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                < Row className="g-0">
                    <Col md={4}>
                        <Image
                            src={props.imageSrc}
                            alt={props.title}
                        />
                    </Col>
                    <Col md={8}>
                        <div>
                            {props.title}
                        </div>
                        <div>Currently this just displays the information from the LoreCard component.  I will also update this display to have more info when I create real values</div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}


export default LoreCardExpanded;