import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Style from '../../SiteThemes';
import FeedbackEnum from "../../enums/FeedbackEnum";

const FeedbackForm = () => {
    const [validated, setValidated] = useState(false);

    //Only adding title/desc since that's all I need for the roadmap
    let title = useRef(null);
    let desc = useRef(null);

    const handleSubmit = (event) => {
        console.log(title.current.value);
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            let feedbackList;
            if (localStorage.getItem(FeedbackEnum.SUGGESTION) !== null) {
                feedbackList = JSON.parse(localStorage.getItem(FeedbackEnum.SUGGESTION));
            }
            else feedbackList = [];
            let feedback = {
                type: FeedbackEnum.FEEDBACK,
                title: title.current.value,
                description: desc.current.value
            }
            feedbackList.push(feedback);
            localStorage.setItem(FeedbackEnum.SUGGESTION, JSON.stringify(feedbackList));
            alert("Thank you for your submission! We will review your feedback and get back to you as soon as possible.");
        }
        setValidated(true);

    };
    return (
        <div className="submit-form" style={Style.Form}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="titleFormGroup">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required placeholder="Enter title" ref={title} />
                        <Form.Control.Feedback type="invalid">Please enter a title.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="aboutUserGroup">
                        <Form.Group as={Col} controlId="usernameForm">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Username" />
                            <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group required as={Col} controlId="versionForm">
                            <div style={{ padding: "1rem" }}>
                                <Form.Check
                                    defaultChecked
                                    type="radio"
                                    id="current-radio"
                                    label="Current Version"
                                    name="version-group"
                                />

                                <Form.Check
                                    type="radio"
                                    id="beta-radio"
                                    label="Beta Version"
                                    name="version-group"
                                />
                            </div>
                        </Form.Group>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="typeFormGroup">
                        <Form.Label>Type</Form.Label>
                        <Form.Control required placeholder="Enter type" />
                        <Form.Control.Feedback type="invalid">Please enter a type.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="levelFormGroup">
                        <Form.Label>Level</Form.Label>
                        <Form.Control required placeholder="Enter level" />
                        <Form.Control.Feedback type="invalid">Please enter a level.</Form.Control.Feedback>
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="issueDescriptionGroup">
                    <Form.Label>Issue Description</Form.Label>
                    <Form.Control required as="textarea" rows={3} placeholder="Describe the issue you encountered" ref={desc} />
                    <Form.Control.Feedback type="invalid">Please add as much information as possible.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="selected" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );

}


export default FeedbackForm;