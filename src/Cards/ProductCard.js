import React from 'react'
import {Container , Row,Col,Image} from 'react-bootstrap';
export default function ProductCard(props) {
    return (
        <Container  className="bg-primary">
          
            <Row className="w-100 container-fluid justify-content-center" >
                <img className ="text-center rounded-circle" style={{width : "30rem" , height : "20rem" , resize : "cover"}} src={props.image}/>
                
            </Row>
            <Row className="mt-4">
                <Col className="text-center col-xs-6">{props.title} </Col> 
                <Col className="text-center col-xs-6">{props.price} </Col> 
                               
            </Row>
          {/* //  </a> */}
        </Container>
    )
}
