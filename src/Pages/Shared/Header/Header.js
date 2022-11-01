import React, { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Login from '../../Login/Login';
import LeftSideNav from '../LeftSideNav/LeftSideNav';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/' className='text-decoration-none'>DevTech</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link><Link to='/' className='text-decoration-none'>Home</Link></Nav.Link> */}
                        <Nav.Link><Link to='/' className='text-decoration-none'>Courses</Link></Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button onClick={handleLogOut} className='ms-3' variant='outline-primary'>LogOut</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button className='me-3' variant='outline-primary'>Login</Button></Link>
                                        <Link to='/register'><Button variant='outline-primary'>Register</Button></Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link href="#deets">
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user.photoURL}>
                                    </Image>
                                    : <FaUser></FaUser>
                                }
                        </Nav.Link>
                        {/* <Nav.Link><Link to='/login' className='text-decoration-none'>Login</Link></Nav.Link>
                        <Nav.Link><Link to='/register' className='text-decoration-none'>Register</Link></Nav.Link> */}

                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;