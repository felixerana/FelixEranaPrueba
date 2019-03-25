import React, { Component } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Error404 extends Component{
    render(){
        return(
            <Container>
                <Alert variant="danger">
                    <Alert.Heading>Hey, nice to see you but not here</Alert.Heading>
                    <p>
                        Aww yeah, you successfully read this important alert message. This is not the webpage you are looking for, please go back, take a few steps back and rethink what you have done.
                    </p>
                    <hr />
                    <Row>
                        <Col md={9}>
                            <p>
                                Whenever you need to, be sure to do only what you have to do.
                            </p>
                        </Col>    
                        <Col md={3}> 
                            <Link className="btn btn-outline-secondary" to="/">Home Page
                            </Link>
                        </Col>
                    </Row>
                </Alert>
            </Container>
        )
    }

}

export default Error404;