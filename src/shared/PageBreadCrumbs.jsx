import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const PageBreadCrumbs = (props) => {
    const { page } = props

    return (
        <Container fluid className='mt-2'>
            <Breadcrumb>
                <Breadcrumb.Item active={page === 'posts'} href="#">Posts</Breadcrumb.Item>
                {page === 'posts' ? <></> : <Breadcrumb.Item>Post #1</Breadcrumb.Item>}
            </Breadcrumb>
        </Container>
    );
};

export default PageBreadCrumbs;
