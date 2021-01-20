import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../axios';
import * as stripActions from '../store/actions';
import {Container,Card, Row, ListGroup} from 'react-bootstrap';

export class StripsContainer extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.fetchAllStrips();
    }
    expandStrip(id){
        this.props.history.push(`/stripInfo/${id}`)
    }
    render(){
        return(
            <Container fluid>
                <h4>List of Strips</h4>
                <div style={{fontSize:'13px'}}>Please click on a strip to see it's details</div>
                <Card style={{marginTop:'10px'}}>
                    <ListGroup variant="flush">
                    {this.props.strips.map((strip, i) => (
                        <ListGroup.Item key={i} style={{cursor:'pointer'}} onClick={()=>this.expandStrip(strip.id)}> {strip.title} </ListGroup.Item>
                    ))} 
                    </ListGroup>
                </Card>            
            </Container>
        )
    }
}
const mapStateToProps = state => {
    return {
        strips: state.strips
    };
}

const mapDispatchToProps = dispatch => {
    return {
        fetchAllStrips: () => dispatch(stripActions.fetchAllStrips()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StripsContainer, axios );