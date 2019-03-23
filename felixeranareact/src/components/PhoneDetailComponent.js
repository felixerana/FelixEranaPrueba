import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {mapStateToProps} from '../Redux';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
        return(<p>Error</p>)
    }
}

export default connect(mapStateToProps) (PhoneDetailComponent);