import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../Redux';
import PhoneCard from './PhoneCard';
import CardDeck from 'react-bootstrap/CardDeck';

class PhoneListContainer extends Component{
    render(){
        const phones = this.props.phones;
        return(
            <CardDeck>
            {phones.map(phone => (
                <PhoneCard key={phone.idPhone} phone = {phone}/>
            ))}
            </CardDeck>
        );
    }
}

export default connect(mapStateToProps) (PhoneListContainer);