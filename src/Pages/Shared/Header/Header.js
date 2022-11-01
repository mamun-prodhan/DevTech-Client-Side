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
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import logo from '../../../../src/assets/logo.ico'


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // tooltips
    const renderTooltip = props => (
        <Tooltip {...props}>{user?.displayName}</Tooltip>
    );
    //end tooltips

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='mb-4' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <img className='me-3' style={{height:'35px'}} src={logo} alt="" />
                <Navbar.Brand><Link to='/' className='text-decoration-none fs-4 fw-bold text-white'>DevTech</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link><Link to='/' className='text-decoration-none'>Home</Link></Nav.Link> */}
                        <Link to='/'><Button className='me-3 fw-bold text-white' variant='outline-primary'>Courses</Button></Link>
                        <Link to='/blog'><Button className='me-3 fw-bold text-white' variant='outline-primary'>Blog</Button></Link>
                        <Link to='/faq'><Button className='me-3 fw-bold text-white' variant='outline-primary'>FAQ</Button></Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {
                                user?.uid ?
                                    <>
                                        {/* <span>{user?.displayName}</span> */}
                                        <Button onClick={handleLogOut} className='ms-3 fw-bold text-white' variant='outline-primary'>LogOut</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button className='me-3 fw-bold text-white' variant='outline-primary'>Login</Button></Link>
                                        <Link to='/register'><Button className='fw-bold text-white' variant='outline-primary'>Register</Button></Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link href="#deets">
                            <OverlayTrigger placement="bottom" overlay={renderTooltip}>
                                {user?.photoURL ?
                                    <Image
                                        style={{ height: '30px' }}
                                        roundedCircle
                                        src={user.photoURL}>
                                    </Image>
                                    : <FaUser className='text-white'></FaUser>
                                }
                            </OverlayTrigger>
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