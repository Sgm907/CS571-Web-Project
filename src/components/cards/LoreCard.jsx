import { Button, Card } from 'react-bootstrap';

function LoreCard(props) {
    return (
        <Button variant="outline-secondary">
            <Card className="bg-transparent border-0">
                <Card.Img variant="top" src={props.imageSrc || "../../images/placeholder.png"} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
            </Card>
        </Button>
    );
}

export default LoreCard;