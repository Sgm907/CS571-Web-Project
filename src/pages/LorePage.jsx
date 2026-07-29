import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";
import LoreCard from "../components/cards/LoreCard";

function LorePage() {
    return <Container fluid>
        <Row id='students'>
            <Col>
                <LoreCard title="Enemy 1" text="This guy walks through ." imageSrc="src\assets\card1.png" />
                <LoreCard title="Enemy 2" text="This guy is really strong." imageSrc="src\assets\card2.png" />
            </Col>
            <Col>
                <LoreCard title="Enemy 3" text="This guy has a special ability." imageSrc="src\assets\card3.png" />
                <LoreCard title="Enemy 4" text="This guy is very fast." imageSrc="src\assets\card4.png" />
            </Col>
            <Col>
                <LoreCard title="World 1" text="This is the starting kingdom." imageSrc="src\assets\card5.png" />
                <LoreCard title="World 2" text="This is the second world." imageSrc="src\assets\card6.png" />
            </Col>
            <Col>
                <LoreCard title="World 3" text="This is the third world." imageSrc="src\assets\card7.png" />
                <LoreCard title="World 4" text="This is the fourth world." imageSrc="src\assets\card8.png" />
            </Col>
        </Row>
    </Container>

}


export default LorePage;