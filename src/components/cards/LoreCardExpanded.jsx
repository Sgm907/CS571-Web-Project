import React from 'react';
import { Card, Row, Col, Popover, Image, Button } from 'react-bootstrap';

function LoreCardExpanded(props) {
    function handleClick() {
        console.log(props);
        props.setExpand(false);
    }

    return (
        < Popover target={props.target.current} show={props.expand} location="auto" style={{ minWidth: '85%', minHeight: '85%' }} >
            < Row className="g-0">
                <Col md={4}>
                    <Image
                        src={props.imageSrc}
                        alt={props.title}
                    />
                </Col>
                <Col md={8}>
                    <Popover.Header>
                        {props.title}
                        <Button variant="Danger" onClick={() => handleClick()}>X</Button>
                    </Popover.Header>
                    <Popover.Body>Currently this just displays the information from the LoreCard component.  I will also update this display to have more info when I create real values</Popover.Body>
                </Col>
            </Row>
        </Popover >
    );
}

export default LoreCardExpanded;