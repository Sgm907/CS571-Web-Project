import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";

function SiteNavigation(props) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        BadgerChat
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/lore">Lore</Nav.Link>
                        <Nav.Link as={Link} to="/roadmap">Roadmap</Nav.Link>
                        <Nav.Link as={Link} to="/feedback">Submit Feedback</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>\
                <Outlet />
            </div>
        </div >
    );
}

export default SiteNavigation;