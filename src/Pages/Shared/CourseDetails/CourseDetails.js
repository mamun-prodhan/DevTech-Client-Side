import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const { title, thumbnail_url, details } = courseDetails;
    return (
        <Container>
            <Card className="text-center">
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                    <Card.Img variant='top' src={thumbnail_url} />
                    <Card.Title className='mt-3 mb-3 fs-2'>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                </Card.Body>

            </Card>
        </Container>
    );
};

export default CourseDetails;