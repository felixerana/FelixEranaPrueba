import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../Redux';
import PhoneCard from './PhoneCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

class PhoneListContainer extends Component{
    render(){
        const phones = this.props.data;
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container>
                        <h1>Phones in the store!</h1>
                        <p>
                            This is a simple hero unit, a simple jumbotron-style component for calling
                            extra attention to featured content or information.
                        </p>
                    </Container>
                </Jumbotron>
                <Container>
                    <CardDeck>
                        {phones.map(phone => (
                            <PhoneCard key={phone.idPhone} phone = {phone}/>
                        ))}
                    </CardDeck>
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps) (PhoneListContainer);