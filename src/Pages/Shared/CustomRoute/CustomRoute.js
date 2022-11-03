import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import errorImage from '../../../../src/assets/notfound.png'

const CustomRoute = () => {
    return (
        <div>
            <h3 className='fw-bold'>Page Not Found</h3>
            <div className='mt-3 mb-3'>
                <Link to='/'><Button className='fw-bold' variant='outline-primary'>Back To Home</Button></Link>
            </div>
            <img src={errorImage} alt="" />
        </div>
    );
};

export default CustomRoute;