import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const courseDetails = useLoaderData();
    const {title} = courseDetails;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default CourseDetails;