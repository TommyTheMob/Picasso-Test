import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const PageNavbar = (props) => {
    const { page } = props

    return (
        <>
            <Navbar sticky='top' expand="lg" className="bg-primary-subtle">
                <Container>
                    <Navbar.Brand className='text-primary-emphasis' href="#home">Picasso Test</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link disabled={page === 'posts'} href="#home">Posts</Nav.Link>
                            {page === 'posts' ? <></> : <Nav.Link href="#link">Link</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default PageNavbar;
