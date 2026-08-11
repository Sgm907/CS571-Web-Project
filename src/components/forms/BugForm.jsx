import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Style from '../../SiteThemes';

const BugForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            alert("Thank you for your submission! We will review your bug report and get back to you as soon as possible.");
        }
        setValidated(true);

    };
    return (
        <div style={Style.DefaultForm}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="titleFormGroup">
                        <Form.Label>Title</Form.Label>
                        <Form.Control required placeholder="Enter title" />
                        <Form.Control.Feedback type="invalid">Please enter a title.</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="aboutUserGroup">
                        <Form.Group as={Col} controlId="usernameForm">
                            <Form.Label>Username</Form.Label>
                            <Form.Control required type="text" placeholder="Enter Username" />
                            <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group required as={Col} controlId="versionForm">
                            <div style={{ backgroundColor: "darkgrey", padding: "2rem", borderRadius: "0.5rem" }}>
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

                <Form.Group className="mb-3" controlId="computerSpecsGroup">
                    <Form.Label>PC Information</Form.Label>
                    <Form.Control placeholder="Add your GPU, OS, and any other information about your PC that you know" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="issueDescriptionGroup">
                    <Form.Label>Issue Description</Form.Label>
                    <Form.Control required as="textarea" rows={3} placeholder="Describe the issue you encountered" />
                    <Form.Control.Feedback type="invalid">Please add as much information as possible.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </div >
    );

}


export default BugForm;