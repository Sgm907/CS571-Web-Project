import { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import FeedbackForm from "../components/forms/FeedbackForm";
import BugForm from "../components/forms/BugForm";
import IdeaForm from "../components/forms/IdeaForm";

const FeedbackPage = () => {
    const [form, setForm] = useState(1);
    function getForm() {
        if (form === 1) return <FeedbackForm />;
        if (form === 2) return <BugForm />;
        if (form === 3) return <IdeaForm />;
    };

    return (
        <div style={{ backgroundColor: "darkgrey", padding: "2rem", borderRadius: "0.5rem", "textAlign": "left" }}>
            <Button variant={form === 1 ? "primary" : "secondary"} onClick={() => setForm(1)} style={{ marginRight: "1rem" }}>Feedback</Button>
            <Button variant={form === 2 ? "primary" : "secondary"} onClick={() => setForm(2)} style={{ marginRight: "1rem" }}>Bug Report</Button>
            <Button variant={form === 3 ? "primary" : "secondary"} onClick={() => setForm(3)}>Idea Submission</Button>
            <hr />
            {getForm()}
        </div >
    );

}


export default FeedbackPage;