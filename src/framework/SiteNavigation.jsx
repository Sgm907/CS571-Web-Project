import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";

function SiteNavigation(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/CS571-Web-Project/">
                        SplitScreen
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/CS571-Web-Project/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/CS571-Web-Project/lore">Lore</Nav.Link>
                        <Nav.Link as={Link} to="/CS571-Web-Project/roadmap">Roadmap</Nav.Link>
                        <Nav.Link as={Link} to="/CS571-Web-Project/feedback">Submit Feedback</Nav.Link>
                        <Nav.Link as={Link} to="/CS571-Web-Project/about">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <Outlet />
            </div>
        </div >
    );
}

export default SiteNavigation;