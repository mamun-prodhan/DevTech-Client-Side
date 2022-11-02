import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import "bootstrap/dist/css/bootstrap.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import logo from '../../../../src/assets/logo.ico'
import { FaSun, FaMoon } from "react-icons/fa";


const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");
    const toggleTheme = () =>{
        setTheme((curr)=>(curr === "light" ? "dark" : "light"));
    }

    const renderTooltip = props => (
        <Tooltip {...props}>{user?.displayName}</Tooltip>
    );

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
                        <Link to='/'><Button className='me-3 fw-bold text-white' variant='outline-primary'>Courses</Button></Link>
                        <Link to='/blog'><Button className='me-3 fw-bold text-white' variant='outline-primary'>Blog</Button></Link>
                        <Link to='/faq'><Button className='me-3 fw-bold text-white' variant='outline-primary'>FAQ</Button></Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <label className='fw-bold text-white me-2'>{theme === "light" ? "Light Mode" : "Dark Mode"}</label>
                            <Button className='text-white' onClick={toggleTheme} variant='outline-primary'>{theme === "light" ? <FaSun className='text-warning'></FaSun> : <FaMoon></FaMoon>} </Button>
                        </Nav.Link>
                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <Button onClick={handleLogOut} className='ms-3 fw-bold text-white' variant='outline-primary'>LogOut</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'><Button className='me-3 fw-bold text-white' variant='outline-primary'>Login</Button></Link>
                                        <Link to='/register'><Button className='fw-bold text-white' variant='outline-primary'>Register</Button></Link>
                                    </>
                            }
                        </Nav.Link>
                        <Nav.Link>
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