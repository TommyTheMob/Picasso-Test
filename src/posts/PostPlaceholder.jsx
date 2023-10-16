import React from 'react';
import {Card, Placeholder} from "react-bootstrap";

const PostPlaceholder = () => {
    return (
        <Card className='mb-2 text-start bg-light'>
            <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                    <Placeholder className='w-50' />
                </Placeholder>
                <Placeholder as={Card.Subtitle} animation="glow">
                    <Placeholder style={{ width: '5%' }} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                    <Placeholder style={{ width: '85%' }} />
                </Placeholder>
                <Placeholder.Button variant="primary" style={{ width: '70px', height: '30px' }}/>
            </Card.Body>
        </Card>
    );
};

export default PostPlaceholder;
