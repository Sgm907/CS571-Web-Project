import { React } from 'react';
import { Row, Col, Image, Modal } from 'react-bootstrap';
import Style from '../../SiteThemes';
import LoreData from '../misc/LoreData';

function LoreCardExpanded(props) {
    const selectedCharacter = LoreData.find((char) => char.key === props.charKey) ?? LoreData[0];
    const imageSource = selectedCharacter.imgSrc || props.imageSrc;

    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            centered
            style={Style.LoreModalDialog}
            contentClassName="border-0"
            dialogClassName="rounded-4"
        >
            <Modal.Header
                closeButton
                closeVariant="white"
                style={Style.LoreModal}
            >
                <Modal.Title style={Style.LoreModalTitle}>{selectedCharacter.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={Style.LoreModalBody}>
                <Row className="g-4 align-items-center">
                    <Col md={4}>
                        <Image
                            src={imageSource}
                            alt={selectedCharacter.title}
                            fluid
                            rounded
                            style={Style.LoreModalImage}
                        />
                    </Col>
                    <Col md={8}>
                        <div style={Style.LoreModalText}>
                            {selectedCharacter.desc}
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default LoreCardExpanded;