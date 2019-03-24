import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStateToProps} from '../Redux';
import PhoneCard from './PhoneCard';
import CardDeck from 'react-bootstrap/CardDeck';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import {PacmanLoader} from 'react-spinners';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

class PhoneListContainer extends Component{
    render(){
        const phones = this.props.data;
        const {loading, error} = this.props;
        var content = <Row><Col md={{ span: 6, offset: 3 }}><PacmanLoader
                    sizeUnit={"px"}
                    size={100}
                    color={'#36D7B7'}
                /></Col></Row>;

        if(!loading){
            content = <CardDeck>
                        {phones.map(phone => (
                            <PhoneCard key={phone.idPhone} phone = {phone}/>
                        ))}
                    </CardDeck>
        }
        if(error){
            content = <Alert variant="danger">
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo luctus,
              nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
              consectetur purus sit amet fermentum.
            </p>
          </Alert>
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