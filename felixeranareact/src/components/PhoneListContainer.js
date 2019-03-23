import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../Redux';
import PhoneCard from './PhoneCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import {PacmanLoader} from 'react-spinners';

class PhoneListContainer extends Component{
    render(){
        const phones = this.props.data;
        const loading = this.props.loading;
        var content = <PacmanLoader
        sizeUnit={"px"}
        size={100}
        color={'#36D7B7'}
      />;

        if(!loading){
            content = <CardDeck>
                        {phones.map(phone => (
                            <PhoneCard key={phone.idPhone} phone = {phone}/>
                        ))}
                    </CardDeck>
        }
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
                    {content}
                </Container>
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps) (PhoneListContainer);