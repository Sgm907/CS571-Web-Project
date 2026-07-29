import { Card, Container, ProgressBar } from "react-bootstrap";
import StatusEnum from "../../enums/StatusEnum";

function RoadmapCard(props) {
    let variant;

    //Get the theme for the kind of card being displayed. This will be used to set the color of the card
    if (props.type === StatusEnum.COMPLETE) {
        variant = "success";
    }
    else if (props.type === StatusEnum.NOT_STARTED) {
        variant = "danger";
    }
    else {
        variant = "warning";
    }
    return (
        <Container>
            <Card
                bg={variant.toLowerCase()}
                key={props.title}
                text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                className="mb-2"
            >
                <Card.Header>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer >
                    <small>Progress: {props.progress}%</small>
                    <ProgressBar now={props.progress} variant="primary" />
                </Card.Footer>
            </Card>
        </Container>
    );

}


export default RoadmapCard;