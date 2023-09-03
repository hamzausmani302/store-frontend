import React, { useState } from 'react';
import { Button, Container, Row, Col , Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import logo from './logo.svg';

import Back from "./Media/back.jpg";
import MBack from "./Mobilemedia/back.jpg";
import Logo from "./Media/logo.png";
import Navbar from "./Components/myNavbar.js";
import Home from "./Pages/Home.js";
import ContactUs from './Pages/ContactUs';
import AboutUs from "./Pages/AboutUs.js";
import ProductsandServices from './Pages/ProductsandServices';
import CheckOut  from './Pages/CheckOut';
import Adminstration from './Pages/Adminstration'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const getprop = function (width, o1, o2, o3 = null) {
  if (width > 800) {
    return o1;
  } else if (width >= 500) {
    return o2;
  } else if (width < 500) {
    if (o3 == null) {
      return o2;
    }
    return o3;
  }

}

function App() {
  const [styles , setstyles] = useState({
    "container1": {
     
      backgroundImage: (window.innerWidth > 600) ? `url(${Back})` : `url(${MBack})`,
      backgroundSize :"cover" ,
     flex : 1,
     minHeight : (window.innerWidth > 500) ? window.innerHeight *0.75 : window.innerHeight * 0.50 ,
      
      
    },
    "logoparent" : {
      width : "25%",
      flex : 1,
      float : "left",
      display : "inline",
      justifyContent : "end",
      
      // backgroundColor : "purple",
  
    },
    "logo": {
      width: (window.innerWidth > 800) ? "90px" : "70px",
      height: (window.innerWidth > 800) ? "90px" : "70px",
      marginRight: "2%",
      display : "inline",
      float : (window.innerWidth > 500) ? "right" : "left",
    }
    ,
    "inline": {
      display: "inline",
    }
    ,
    "back": {
      //  position : "absolute"
  
    },
    "logocontainer": {
      position: "relative",
      flex :1,
      display : "flex",
      
      //width : window.innerWidth > 500 ? 500:window.innerWidth*0.90 ,
      //  minWidth : window.innerWidth > 800 ? window.innerWidth*0.40  : window.innerWidth-100,
      // backgroundColor : "yellow",
       top: window.innerWidth > 500 ? window.innerHeight * 0.55 : window.innerHeight * 0.35,
      // left: window.innerWidth > 600 ? window.innerWidth * 0.2 : 0,
      margin: 0,
      padding: 0,
      justifyContent : "center",
     
     
      alignItems : "center",
      // flexDirection : "row"
    },
    "brandname": {
      display: "inline",
      // float : "left",
      width : "75%",
      // backgroundColor : "green",
      flex: 1,
      
      justifyContent :"center",
    
      alignContent : "center",
      display: "inline-block",
      // height: (window.innerWidth > 800) ? "100px" : "80px",
  
  
    },
    "title": {
      flex  : 1,
      // backgroundColor : "blue",
      fontSize: "20px",
    
      margin: 0,
      color : "red",
      
      
    },
    "subtitle": {
      
      flex  : 1,
      // width: window.innerWidth * 0.40,
      // backgroundColor : "green",
      fontSize: "12px",
      
    }
  })
  
  return (
    <Container  fluid>
  <Container style={styles.container1} fluid>
    <Container style={styles.logocontainer} fluid>
      <div style={styles.logoparent}>
      <Image style={styles.logo}  src={Logo}  fluid/>
   </div>
      <div style={styles.brandname}>

      <Row style={styles.title}><p > PHEONIX STORE<br /><span style={styles.subtitle}>Where you get everything</span> </p></Row>
      </div>
  </Container>
  </Container>
  
    <Container style={{margin : 0 , padding : 0}    } fluid>  
        
         <Router>
     

        <Switch>
        <Route path="/administration">
            <Adminstration />
          </Route>
          <Route path="/about">
          <Navbar />
            <AboutUs />
          </Route>
          <Route path="/contactus">
          <Navbar />
            <ContactUs />
          </Route>
          <Route path="/products">
          <Navbar />
            <ProductsandServices />
          </Route>
          <Route path="/checkout">
          <Navbar />
            <CheckOut />    
          </Route>
          <Route path="/">
          <Navbar />
            <Home />
          </Route>
        </Switch>
      
    </Router>
   
    
    </Container>

    </Container>
  
  
      

   

  );
}

export default App;
