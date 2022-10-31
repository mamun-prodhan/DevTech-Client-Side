import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../Shared/AllCourses/AllCourses';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';

const Courses = () => {
    const allCourse = useLoaderData();
    return (
        <Container>
            <Row>
                <Col className='d-none d-lg-block' lg="3">
                    <LeftSideNav></LeftSideNav>
                </Col>
                <Col className='' lg="9">
                    <Row xs={1} lg={3} className="g-4">
                        {
                            allCourse.map(course => <AllCourses
                                key={course.course_id}
                                course={course}
                            ></AllCourses>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;