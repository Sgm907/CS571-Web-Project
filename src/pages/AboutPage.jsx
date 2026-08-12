import { useEffect, useState, useRef } from "react";
import { Button, Container, Form, Row, Col, Pagination } from "react-bootstrap";

const AboutPage = () => {
    return <div id="aboutPage">
        <h1>About Us</h1>
        <p>
            SplitScreen is a single player puzzle platformer about trying to stitch back together a broken world.
            You play during the time of the Great Split, a disaster you failed to prevent where the world was fractured and thrown into the void.
            Using your stolen powers, you can drag the remains of the world and build bridges across the void to fight your way through the forces of the Void King.
            Rescue your allies and retrieve your lost weapons to put an end to the Void King once and for all.
        </p>
        <p>
            SplitScreen is developed by a single person and is a work in progress.  Take a look at the roadmap to see where we're at!
        </p>
    </div>

}


export default AboutPage;