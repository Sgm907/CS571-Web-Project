import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";
import RoadmapCard from "../components/cards/RoadmapCard";
import StatusEnum from "../enums/StatusEnum";
import FeedbackEnum from "../enums/FeedbackEnum";
import Style from "../SiteThemes";

const RoadmapPage = () => {
    let [suggestions, setSuggestions] = useState([{
        type: FeedbackEnum.BUG,
        title: "Begin Game",
        description: "This is where tasks that are complete are displayed."
    },
    {
        type: FeedbackEnum.FEEDBACK,
        title: "Complete Website",
        description: "This is where ideas that are in progress are displayed."
    },
    {
        type: FeedbackEnum.FEEDBACK,
        title: "Add More Cards",
        description: "When you submit a new idea, it will appear here."
    },
    {
        type: FeedbackEnum.IDEA,
        title: "Complete Game",
        description: "This is the first roadmap card."
    }
    ]);

    function loadGoodIdeas() {
        let ideaList = JSON.parse(localStorage.getItem(FeedbackEnum.SUGGESTION));
        if (ideaList == null) return;
        setSuggestions(suggestions.concat(ideaList));
    }

    useEffect(loadGoodIdeas, []);

    return <Container style={Style.Background}>
        <Row>
            <Col className="border-end border-secondary">
                {
                    suggestions.filter((suggestion) => suggestion.type === FeedbackEnum.BUG).map((suggestion) => {
                        return <RoadmapCard title={suggestion.title} description={suggestion.description} progress="100" type={StatusEnum.COMPLETE} key={suggestion.title} />
                    })
                }
            </Col>
            <Col className="border-end border-secondary">
                {
                    suggestions.filter((suggestion) => suggestion.type === FeedbackEnum.FEEDBACK).map((suggestion) => {
                        return <RoadmapCard title={suggestion.title} description={suggestion.description} progress="0" type={StatusEnum.IN_PROGRESS} key={suggestion.title} />
                    })
                }
            </Col>
            <Col className="border-end border-secondary">
                {
                    suggestions.filter((suggestion) => suggestion.type === FeedbackEnum.IDEA).map((suggestion) => {
                        return <RoadmapCard title={suggestion.title} description={suggestion.description} progress="0" type={StatusEnum.NOT_STARTED} key={suggestion.title} />
                    })
                }
            </Col>
        </Row>
    </Container>

}


export default RoadmapPage;