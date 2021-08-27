import React from 'react'
import {Container , Row,Col,Image} from 'react-bootstrap';
export default function ProductCard(props) {
    return (
        <Container  className="">
          
            <Row className="w-100 container-fluid justify-content-center" >
                <img className ="text-center rounded-circle" style={{width : "30rem" , height : "20rem" , resize : "cover"}} src={props.image}/>
                
            </Row>
            <Row className="mt-4">
                <Col className="text-center col-xs-12">{props.title} </Col> 
                
                               
            </Row>
          {/* //  </a> */}
        </Container>
    )
}
