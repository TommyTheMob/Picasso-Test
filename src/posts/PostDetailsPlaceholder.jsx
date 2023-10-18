import React from 'react';
import {Card, Placeholder} from "react-bootstrap";

const PostDetailsPlaceholder = () => {
    return (
        <Card className="text-center">
                <Placeholder as={Card.Header} animation="glow">
                    <Placeholder style={{width: '70px'}} />
                </Placeholder>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder className='w-50' />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder style={{ width: '85%' }} />
                </Placeholder>
                <Placeholder.Button variant="primary" style={{ width: '70px', height: '30px' }}/>
            </Card.Body>
            <Placeholder as={Card.Footer} animation="glow">
                <Placeholder style={{width: '70px'}} />
            </Placeholder>
        </Card>
    );
};

export default PostDetailsPlaceholder;
