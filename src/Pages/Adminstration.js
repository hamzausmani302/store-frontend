import React , {useState} from 'react'
import {Container , Row , Col, Button} from 'react-bootstrap';


export default function Adminstration() {
    const [open,setopen] = useState(true);
    return (
        <Container fluid> 
            <Row>
            <Button className="btn btn-primary w-25" onClick={()=>{setopen(!open);}}>CLICK ME</Button>
            
            </Row>
            <Row>  
                {open ? <Col className="animate col-lg-2 ">
                        <h1>MENU</h1>
                        <ul>
                            <li>Products</li>
                            <li>Categories</li>
                            <li>Orders</li>
                        </ul>
                        

                </Col> : null  } 
                {!open ? <Col className="col-lg-12 bg-secondary">hello</Col> :<Col className="col-lg-10 bg-secondary">hello</Col> }
                
            </Row>
        </Container>
    )
}
