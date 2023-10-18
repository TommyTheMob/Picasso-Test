import React from 'react';
import {Breadcrumb} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";

const PageBreadCrumbs = (props) => {
    const { page } = props

    return (
        <Container fluid className='mt-2'>
            <Breadcrumb>
                <Breadcrumb.Item active={page === 'posts'}>
                    <Link style={{textDecoration: 'inherit', color: 'inherit', cursor: 'inherit'}} to='/'>
                        Posts
                    </Link>
                </Breadcrumb.Item>
                {page === 'posts' ? <></> : <Breadcrumb.Item active={page === 'post'}>Post Details</Breadcrumb.Item>}
            </Breadcrumb>
        </Container>
    );
};

export default PageBreadCrumbs;
