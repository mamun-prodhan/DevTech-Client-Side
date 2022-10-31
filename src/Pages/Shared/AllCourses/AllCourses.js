import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const AllCourses = ({ course }) => {
    console.log(course);
    return (
        <Col>
          <Card>
            <Card.Img variant="top" src={course.image_url} />
            <Card.Body>
              <Card.Title>{course.title}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="outline-primary">Primary</Button>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default AllCourses;