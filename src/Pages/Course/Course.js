import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { FaFilePdf } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";

const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [12, 10]
};

const Course = () => {
    const course = useLoaderData();
    const { _id, title, details, enrolled, image_url, rating, teacher } = course;
    return (
        <div>
            <Container className='text-end mb-3'>
            <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} x={.5} y={.5} scale={0.8}>
                {({ toPdf }) => (
                        <Button onClick={toPdf} variant="primary"><FaFilePdf className='me-2'></FaFilePdf>Download PDF</Button>
                )}
            </ReactToPdf>
            </Container>
            <Container ref={ref}>
                <Card className="text-center">
                    {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body>
                        <Card.Img variant='top' src={image_url} />
                        <Card.Title className='mt-3 mb-3 fs-2'>{title}</Card.Title>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/details/${_id}`}><Button variant="primary">Get Premiun Access</Button></Link>
                    </Card.Body>
                    <Card.Footer className="">
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex'>
                                <div>
                                    <Image
                                        roundedCircle
                                        className='me-3'
                                        src={teacher?.img}
                                        style={{ height: '60px' }}
                                    ></Image>
                                </div>
                                <div>
                                    <p className='m-0 text-start'><small>Teacher</small></p>
                                    <p className='fw-bold'>{teacher?.name}</p>
                                </div>
                            </div>
                            <div>
                                <p className='m-0 text-start'><small>Last Update:</small></p>
                                <p className='fw-bold'>{teacher?.last_update}</p>
                            </div>
                            <div>
                                <p className='m-0 text-start'><small>Review:</small></p>
                                <p className='fw-bold text-start'>{rating?.number}</p>
                            </div>
                            <div>
                                <p className='m-0 text-start'><small>Enrolled:</small></p>
                                <p className='fw-bold'>{enrolled} Students</p>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );
};

export default Course;