import React from 'react';
import {Button, Card} from "react-bootstrap";

const Post = (props) => {
    const { post } = props

    return (
        <Card className='mb-2 text-start bg-light'>
            <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">#id-{post.id}</Card.Subtitle>
                <Card.Text>
                    {post.body.length > 150 ? post.body.slice(0,150) + '...' : post.body}
                </Card.Text>
                <Button href='#' variant='primary' size="sm">See post</Button>
            </Card.Body>
        </Card>
    );
};

export default Post;
