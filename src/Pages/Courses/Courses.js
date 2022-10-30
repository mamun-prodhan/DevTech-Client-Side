import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AllCourses from '../Shared/AllCourses/AllCourses';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    return (
        <Container>
            <Row>
                <Col className='d-none d-lg-block' lg="3">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col className='' lg="9">
                    <AllCourses></AllCourses>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;