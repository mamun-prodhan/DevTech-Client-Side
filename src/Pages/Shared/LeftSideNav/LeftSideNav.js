import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/courses')
        .then(res => res.json())
        .then(data => setCourses(data));
    })

    return (
        <div  className='text-start'>
            <h4>All Courses : {courses.length}</h4>
            <div>
                {
                    courses.map(course =><p 
                        key={course.course_id}>
                        <Link to={`/course/${course.course_id}`}>{course.title}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;