import { Card, Container, ProgressBar } from "react-bootstrap";
import StatusEnum from "../../enums/StatusEnum";
import style from "../../SiteThemes";

function RoadmapCard(props) {

    const progressVariant =
        props.type === StatusEnum.COMPLETE ? "success" :
            props.type === StatusEnum.NOT_STARTED ? "info" :
                "warning";

    return (
        <Container className="p-0" >
            <Card className={`mb-2 ${props.type}`} text="white" key={props.title}>
                <Card.Header>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small>Progress: {props.progress}%</small>
                    <ProgressBar now={props.progress} variant={progressVariant} />
                </Card.Footer>
            </Card>
        </Container>
    );

}

export default RoadmapCard;