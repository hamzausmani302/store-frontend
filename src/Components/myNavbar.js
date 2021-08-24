
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import React , {useState , useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";

function NNavbar() {
     const [done, setdone] = useState(false)
    const [navbarClasses, setscroll] = useState("navbar");
    const [styles, setstate] = useState({
        "nav" : {backgroundColor : "white",fontSize : "15px" , flex: 1 , justifyContent : "space-evenly"},
        "itemdropdown" : {width : "300px", backgroundColor : "red"}
    })
    const [scrolled,setScrolled]= useState(false);
const handleScroll=() => {
    //console.log(navbarClasses);
    const offset=window.scrollY;
    if(offset > 500 ){
        if(scrolled==false){
            setScrolled(true);
      
        }
       
    }
    else{
      if(scrolled == true){
        setScrolled(false);
        setdone(false);
        let data = navbarClasses;
        data.replace("/ scrolled/g" , "");
        setscroll(data);
      
      }
        
    }
    if(scrolled==true && done ==false){
        setscroll(navbarClasses + " scrolled");
        setdone(true);
    }
}
  
    if(window.innerWidth >1000){
        // window.addEventListener('scroll',handleScroll)       //uuncomment it to mkae event on scroll
  
    }
  useEffect(() => {
      
    
    
  })


    return (
        <Container  fluid>
            <Container className="ms-4 me-2 ms-2">
            <Navbar className={navbarClasses}  bg="light" expand="sm" >
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav collapse navbar-collapse">
                    <Nav style={styles.nav} className=" navbar navbar-expand-lg navbar-light bg-light mr-auto " >
                        <Nav.Link  href="#home">Home</Nav.Link>
                        <NavDropdown styles={styles.itemdropdown}   id="dropdown show" title="Products and Services" >
                            
                            <NavDropdown  styles={styles.itemdropdown}   title="Automobiles" id="dropdown show" href="#action/3.1">
                                <NavDropdown.Item >Sidemirror</NavDropdown.Item>
                                </NavDropdown>
                            <NavDropdown.Item  styles={styles.itemdropdown} href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item  href="#action/3.3">Something</NavDropdown.Item>
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
        </Container>
    )

}

export default NNavbar;