import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const course = useLoaderData();
    return (
        <div>
            {course.title}
        </div>
    );
};

export default Course;