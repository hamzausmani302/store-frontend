
import { Button, Container, Navbar, NavDropdown, Nav } from 'react-bootstrap';
import React , {useState , useEffect} from "react";
import "../App.css";
function NNavbar() {
     const [done, setdone] = useState(false)
    const [navbarClasses, setscroll] = useState("navbar");
    const [styles, setstate] = useState({
        "nav" : {backgroundColor : "white",fontSize : "15px" , flex: 1 , width : "100%" , justifyContent : "space-evenly"},

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
        <Container style={{backgroundColor : "yellow" , alignContent : "center"}}  fluid>
            <Navbar className={navbarClasses}  bg="light" expand="lg" >
               
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav collapse navbar-collapse">
                    <Nav style={styles.nav} className=" navbar navbar-expand-lg navbar-light bg-light mr-auto " >
                        <Nav.Link  href="#home">Home</Nav.Link>
                        <NavDropdown   id="basic-nav-dropdown" title="Products and Services" >
                            
                            <NavDropdown className="drop"  title="Automobiles" id="basic-nav-dropdown" href="#action/3.1">
                                <NavDropdown.Item>Sidemirror</NavDropdown.Item>
                                </NavDropdown>
                            <NavDropdown.Item  href="#action/3.2">Another action</NavDropdown.Item>
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
    )

}

export default NNavbar;