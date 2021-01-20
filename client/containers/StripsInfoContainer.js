import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../axios';
import * as stripActions from '../store/actions';
import {Container,Button, Row, Col, Toast} from 'react-bootstrap';
import DetailsComponent from '../components/Details';

export class StripsInfoContainer extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchStripInfo(this.props.id);
    }
    render(){
        return(
            <Container fluid>
                <Row>
                    {this.props.stripInfo && <DetailsComponent info={this.props.stripInfo}></DetailsComponent>}
                </Row>  

                <Button variant="primary" id="go-back" onClick={()=>this.props.history.push('/')}>
                    Back
                </Button>    
            </Container>
            
        )
    }
}
const mapStateToProps = state => {
    return {
        stripInfo: state.stripInfo
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchStripInfo: (id) => dispatch(stripActions.fetchStripInfo(id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StripsInfoContainer, axios );