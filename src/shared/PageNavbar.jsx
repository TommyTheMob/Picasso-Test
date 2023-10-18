import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

const PageNavbar = (props) => {
    const { page } = props

    return (
        <>
            <Navbar sticky='top' expand="lg" className="bg-primary-subtle">
                <Container>
                    <Navbar.Brand className='text-primary-emphasis'>
                        <Link style={{textDecoration: 'inherit', color: 'inherit', cursor: 'inherit'}} to='/'>Picasso Test</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link disabled={page === 'posts'}>
                                <Link style={{textDecoration: 'inherit', color: 'inherit', cursor: 'inherit'}} to='/'>Posts</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default PageNavbar;
