import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {mapStateToProps} from '../Redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

class PhoneDetailComponent extends Component{
    render(){
        const idPhone = this.props.match.params.id;
        const phone = this.props.data[idPhone];
        if(phone){
            return(
                <Container>
                    <h1>Detail of smartphone</h1>
                    <Card>
                        <Row>
                            <Col md={4}>
                                <Card.Img className="img-fluid" id="imgCard" variant="top" src={phone.urlImg} title={phone.brand}/>
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>{phone.brand}-{phone.name}</Card.Title>
                                    <Card.Text>
                                        {phone.description}
                                    </Card.Text>
                                    <Card.Text>
                                        This smartphone comes in: {phone.color}.
                                    </Card.Text>
                                    <Card.Text>
                                        It has a price of: {phone.price}
                                    </Card.Text>
                                    <Link className="btn btn-primary" to="/">Go Back</Link>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            );
        }
        return(
            <Container>
            <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              This device doesn´t exist. Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
              consectetur purus sit amet fermentum.
            </p>
            <div className="d-flex justify-content-end">
            <Link className="btn btn-outline-secondary" to="/">
              Take me back!
            </Link>
          </div>
          </Alert>
          </Container>
        )
    }
}

export default connect(mapStateToProps) (PhoneDetailComponent);