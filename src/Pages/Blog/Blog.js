import React from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <Container className='text-start'>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What is Cors ?</Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>CORS stands for</span> Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy.
                    Cross-Origin Resource Sharing, CORS is an HTTP-header based mechanism that allows a server to indicate any origins like domain, scheme, or port other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are we using firebase? What other options do we have to implement Authentication</Accordion.Header>
                    <Accordion.Body>
                    <p className='fw-bold'>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. <br />Here's why we should use it:</p>
                    <ul>
                        <li>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</li>

                        <li>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.</li>

                        <li>We might also want to consider leveraging this tool if we eventually wish to host and manage our app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.</li>

                        <li>As a Google Cloud service, it also gives us access to other Google products and features, like Google Drive and Sheets. For instance, we can import dummy data from Google Sheets and use it temporarily to serve our app.</li>

                        <li>With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if we want to use a pre-built authentication UI, we have it at our disposal as well.</li>

                        <li>Firebase is a good choice if we want to deploy a working product on the cloud rapidly. Plus, as mentioned, we might want to try it out if we need a backend but don't have a backend development background.</li>
                    </ul><br />
                    <p className='fw-bold'>Other options we have to implement authentication instead of Firebase:</p> 
                    <ul>
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Passport</li>
                        <li>Okta</li>
                        <li>Authress, etc.</li>
                    </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>How does the Private Route work?</Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>The react private route</span> component renders child components if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property. <br />
                    The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated or Logged in.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body>
                    <span className='fw-bold'>Node</span> is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications. Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a non-blocking approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;