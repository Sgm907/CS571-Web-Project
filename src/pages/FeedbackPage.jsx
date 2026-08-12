import { useEffect, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import FeedbackForm from "../components/forms/FeedbackForm";
import BugForm from "../components/forms/BugForm";
import IdeaForm from "../components/forms/IdeaForm";
import Style from "../SiteThemes";

const FeedbackPage = () => {
    const [form, setForm] = useState(1);
    function getForm() {
        if (form === 1) return <FeedbackForm />;
        if (form === 2) return <BugForm />;
        if (form === 3) return <IdeaForm />;
    };

    return (
        <div style={Style.Form}>
            <Button variant={form === 1 ? "selected" : "tab"} onClick={() => setForm(1)} style={Style.Button}>Feedback</Button>
            <Button variant={form === 2 ? "selected" : "tab"} onClick={() => setForm(2)} style={Style.Button}>Bug Report</Button>
            <Button variant={form === 3 ? "selected" : "tab"} onClick={() => setForm(3)} style={Style.Button}>Idea Submission</Button>
            <hr />
            {getForm()}
        </div >
    );

}


export default FeedbackPage;