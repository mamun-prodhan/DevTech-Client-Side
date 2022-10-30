import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCourses from '../Shared/AllCourses/AllCourses';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col className='bg-danger' lg="3">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col className='bg-primary' lg="9">
                    <AllCourses></AllCourses>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;