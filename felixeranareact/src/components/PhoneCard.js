import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class PhoneCard extends Component{
    render(){
        const phone = this.props.phone;
        return(
            <Card>
                <Card.Img variant="top" src="{phone.urlImg}" />
                <Card.Body>
                <Card.Title>{phone.brand}</Card.Title>
                <Card.Text>
                    {phone.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        );
    }
}

export default PhoneCard;