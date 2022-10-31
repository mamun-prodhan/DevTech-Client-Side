import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const AllCourses = ({ course }) => {
    const {course_id ,title, rating, enrolled, details, image_url} = course;
    console.log(course);
    return (
        <Col>
          <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                {details.length > 60 ?
                <p>{details.slice(0, 60) + '...'}</p>
                :
                <p>{details}</p>
                }
              </Card.Text>
              <Link to={`/course/${course.course_id}`}><Button variant="outline-primary fw-bold">Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
    );
};

export default AllCourses;