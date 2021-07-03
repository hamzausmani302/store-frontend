
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import React , {useState , useEffect} from "react";

function NNavbar() {
    const [styles, setstate] = useState({
        "nav" : {fontSize : "15px" , padding : 10, flex: 1 , justifyContent : "space-evenly"},

    })
    useEffect(()=>{
        console.log("hello")
    })

    return (
        <Container fluid>
            <Navbar sticky="top" bg="light" expand="sm" >
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav style={styles.nav} className="mr-auto"  navbarScroll >
                        <Nav.Link  href="#home">Home</Nav.Link>
                        <NavDropdown title="Products and Services" id="basic-nav-dropdown" >
                            
                            <NavDropdown title="automobiles" id="basic-nav-dropdown" href="#action/3.1">
                                <NavDropdown.Item>Sidemirror</NavDropdown.Item>
                                </NavDropdown>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contact Us</Nav.Link>
                        <Nav.Link href="#link">About Us</Nav.Link>
                        
                        <Nav.Link href="#link">Checkout</Nav.Link>
                        

                    </Nav>
                   
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )

}

export default NNavbar;