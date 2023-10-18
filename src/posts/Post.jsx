import React from 'react';
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

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
                <Button variant='primary' size="sm">
                    <Link style={{textDecoration: 'inherit', color: 'inherit', cursor: 'inherit'}} to={`/Picasso-Test/posts/${post.id}`}>See post</Link>
                </Button>
            </Card.Body>
        </Card>
    );
};

export default Post;
