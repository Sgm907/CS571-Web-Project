import { useState, useRef } from 'react';
import { Button, Card, Container, OverlayTrigger } from 'react-bootstrap';
import LoreCardExpanded from './LoreCardExpanded';

function LoreCard(props) {
    const [expand, setExpand] = useState(false);
    const target = useRef(null);

    return (
        <OverlayTrigger trigger="click" placement="right" overlay={LoreCardExpanded({ ...props, target, setExpand, expand })}>
            <Button variant="outline-secondary" ref={target}>
                <Card className="bg-transparent border-0">
                    <Card.Img variant="top" src={props.imageSrc || "../../images/placeholder.png"} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.text}</Card.Text>
                    </Card.Body>
                </Card>
            </Button>
        </OverlayTrigger>
    );
}

export default LoreCard;