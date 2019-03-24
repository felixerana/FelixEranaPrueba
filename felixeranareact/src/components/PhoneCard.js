import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types'

class PhoneCard extends Component{
    render(){
        const phone = this.props.phone;
        return(
            <Card>
                <Card.Img className="img-fluid" id="imgCard" variant="top" src={phone.urlImg} title={phone.brand}/>
                <Card.Body>
                <Card.Title>{phone.brand}-{phone.name}</Card.Title>
                <Card.Text>
                    {phone.description}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Link className="btn btn-primary" to={`/phonedetail/${phone.idPhone}`}>More Info</Link>
                </Card.Footer>
            </Card>
        );
    }
}

PhoneCard.propTypes = {phone : PropTypes.object.isRequired};

export default PhoneCard;