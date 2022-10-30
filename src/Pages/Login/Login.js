import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant='outline-primary'><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default Login;