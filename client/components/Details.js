
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const columnNames = ['ID', 'Title','Description', 'Day', ,'Month','Year']
const DetailsComponent = ({info}) => {

    return (
      <Container fluid className="table">
      <h6>Information about {info.title}</h6>
      <Row className="table_row header">
      {columnNames.map((col, i) => (
          <Col key={i}> {col} </Col>
      ))}   
      </Row> 
      <div className="rows-container">
        <Row className="table_row">
            <Col> {info.number} </Col>
            <Col> {info.title} </Col>
            <Col> {info.description} </Col>
            <Col> {info.day} </Col>
            <Col> {info.month} </Col>
            <Col> {info.year} </Col>
        </Row>        
      </div>
    </Container>
    )
  
}


export default DetailsComponent;