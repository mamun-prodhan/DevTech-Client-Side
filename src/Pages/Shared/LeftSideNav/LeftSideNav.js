import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-rust.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    })

    return (
        <div className='text-start'>
            <h4>All Courses : {courses.length}</h4>
            <div>
                {
                    courses.map(course => <p
                        className='m-0'
                        key={course.course_id}>
                        <Link className='text-none text-decoration-none' to={`/course/${course.course_id}`}><Button className='w-100 fw-bold mb-3' variant='outline-primary'>{course.title}</Button></Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;