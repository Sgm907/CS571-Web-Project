import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Outlet } from "react-router";

function SiteNavigation(props) {
    return (
        <div>
            <Navbar expand="lg" className="site-navbar navbar-dark">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="site-navbar-brand">
                        SplitScreen
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="site-navbar-nav" />
                    <Navbar.Collapse id="site-navbar-nav">
                        <Nav className="me-auto site-navbar-links">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/lore">Lore</Nav.Link>
                            <Nav.Link as={Link} to="/roadmap">Roadmap</Nav.Link>
                            <Nav.Link as={Link} to="/feedback">Submit Feedback</Nav.Link>
                            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div style={{ margin: "1rem" }}>
                <Outlet />
            </div>
        </div >
    );
}

export default SiteNavigation;