import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";
import RoadmapCard from "../components/cards/RoadmapCard";
import StatusEnum from "../enums/StatusEnum";

const RoadmapPage = () => {
    return <Container style={{ backgroundColor: "darkgrey", padding: "2rem", borderRadius: "0.5rem", "textAlign": "left" }}>
        <Row>
            <Col className="border-end border-secondary">
                <RoadmapCard title="Begin Game" description="This is where tasks that are complete are displayed." progress="100" type={StatusEnum.COMPLETE} />
            </Col>
            <Col className="border-end border-secondary">
                <RoadmapCard title="Complete Website" description="This is where ideas that are in progress are displayed." progress={Math.floor(Math.random() * 100)} type={StatusEnum.IN_PROGRESS} />
                <RoadmapCard title="Add More Cards" description="When you submit a new idea, it will appear here." progress={Math.floor(Math.random() * 100)} type={StatusEnum.IN_PROGRESS} />
            </Col>
            <Col className="border-end border-secondary">
                <RoadmapCard title="Complete Game" description="This is the first roadmap card." progress="0" type={StatusEnum.NOT_STARTED} />
            </Col>
        </Row>
    </Container>

}


export default RoadmapPage;