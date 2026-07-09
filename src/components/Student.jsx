import { Card, ListGroup } from "react-bootstrap";

const Student = (props) => {
    return <div>
        <Card bg="light" text="white" border="dark">
            {/* <Card.Title>{props.name.first} {props.name.last}</Card.Title> */}
            <div class="bg-danger" >
                <h2 class="bg-danger">{props.name.first} {props.name.last}</h2>
                <Card.Subtitle class="bg-danger">{props.major}</Card.Subtitle>
            </div>
            <div class="text-dark">
                <Card.Text>{props.name.first} is taking {props.numCredits} credits and is {!props.fromWisconsin ? "Not" : ""} from Wisconsin </Card.Text>
                <Card.Text>They have {props.interests.length} interests:</Card.Text>
            </div>
            <ListGroup variant="flush" as="ul">
                {props.interests.map((interest, i) =>
                    <ListGroup.Item
                        action variant={i % 2 == 1 ? "light" : "dark"}
                        as="li"
                        onClick={() => props.setFilter("interests", interest)}
                        key={interest}>
                        {interest}
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Card>
    </div>
}

export default Student;