import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Style from '../../SiteThemes';
import FeedbackEnum from "../../enums/FeedbackEnum";

const IdeaForm = () => {
    const [validated, setValidated] = useState(false);
    let title = useRef(null);
    let desc = useRef(null);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            let ideaList;
            if (localStorage.getItem(FeedbackEnum.SUGGESTION) !== null) {
                ideaList = JSON.parse(localStorage.getItem(FeedbackEnum.SUGGESTION));
            }
            else {
                ideaList = [];
            }
            let idea = {
                type: FeedbackEnum.IDEA,
                title: title.current.value,
                description: desc.current.value
            }
            ideaList.push(idea);
            localStorage.setItem(FeedbackEnum.SUGGESTION, JSON.stringify(ideaList));
            alert("Thank you for your submission! We will review your idea and get back to you as soon as possible.");
        }
        setValidated(true);

    };
    return (
        <div class="submit-form" style={Style.Form}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="titleFormGroup">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required placeholder="Enter title" ref={title} />
                        <Form.Control.Feedback type="invalid">Please enter a title.</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="ideaDescriptionGroup">
                    <Form.Label>Idea Description</Form.Label>
                    <Form.Control required as="textarea" rows={3} placeholder="Describe your idea" ref={desc} />
                    <Form.Control.Feedback type="invalid">Please add as much information as possible.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="selected" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );

}


export default IdeaForm;