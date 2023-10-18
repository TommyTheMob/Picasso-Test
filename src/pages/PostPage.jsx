import React from 'react';
import PageBreadCrumbs from "../shared/PageBreadCrumbs.jsx";
import {Link, useParams} from "react-router-dom";
import Container from "react-bootstrap/Container";
import PageNavbar from "../shared/PageNavbar.jsx";
import {Button, Card} from "react-bootstrap";
import {useGetPostByIdQuery} from "../store/posts/postsApi.js";
import PostDetailsPlaceholder from "../posts/PostDetailsPlaceholder.jsx";

const PostPage = () => {
    const {postId} = useParams()
    const {data, isFetching} = useGetPostByIdQuery(postId)

    return (
        <>
            <PageNavbar page='post'/>
            <PageBreadCrumbs page='post'/>
            <Container className='text-center'>
                {isFetching
                    ?
                    <PostDetailsPlaceholder />
                    :
                    <Card className="text-center">
                        <Card.Header>User #{data.userId}</Card.Header>
                        <Card.Body>
                            <Card.Title>{data.title}</Card.Title>
                            <Card.Text>
                                {data.body}
                            </Card.Text>
                            <Button variant="primary">
                                <Link style={{textDecoration: 'inherit', color: 'inherit', cursor: 'inherit'}} to='/Picasso-Test'>Back
                                    to posts</Link>
                            </Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Post #{postId}</Card.Footer>
                    </Card>
                }
            </Container>
        </>
    );
};

export default PostPage;
