import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import LoreCardExpanded from './LoreCardExpanded';
import Style from '../../SiteThemes';

function LoreCard(props) {
    const [expand, setExpand] = useState(false);

    return (
        <>
            <Button variant={"outline-secondary"} className={props.type} onClick={() => setExpand(true)} style={Style.LoreCard}>
                <Card className="border-0" >
                    <Card.Img variant="top" src={props.imageSrc || "../../images/placeholder.png"} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>{props.text}</Card.Text>
                    </Card.Body>
                </Card>
            </Button>

            <LoreCardExpanded
                show={expand}
                onHide={() => setExpand(false)}
                charKey={props.charKey}
                {...props}
            />
        </>
    );
}

export default LoreCard;