import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import Style from '../../SiteThemes';

const IdeaForm = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            alert("Thank you for your submission! We will review your idea and get back to you as soon as possible.");
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
                </Row>

                <Form.Group className="mb-3" controlId="ideaDescriptionGroup">
                    <Form.Label>Idea Description</Form.Label>
                    <Form.Control required as="textarea" rows={3} placeholder="Describe your idea" />
                    <Form.Control.Feedback type="invalid">Please add as much information as possible.</Form.Control.Feedback>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );

}


export default IdeaForm;