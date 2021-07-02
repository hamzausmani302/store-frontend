import React, { useState } from 'react';
import { Button, Container, Row, Col  , Nav , NavDropdown } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import logo from './logo.svg';
import './App.css';
import Back from "./Media/back.jpg";
import MBack from "./Mobilemedia/back.jpg";
import Logo from "./Media/logo.png";
import myNavBar from './Components/Navbar.js';

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
  const [styles] = useState({
    "container1": {
      backgroundImage: (window.innerWidth > 1000) ? `url(${Back})` : `url(${MBack})`,
      width: "100%",
      color: "red",
      padding: 0,
      margin: 0,

      minHeight: getprop(window.innerHeight, window.innerHeight * 0.80, window.innerHeight * 0.80, window.innerHeight * 0.80),
      marginTop: "-30px",
   
      
    },

    "logo": {
      width: (window.innerWidth > 1400) ? "80px" : "70px",
      height: (window.innerWidth > 1400) ? "80px" : "70px",
      marginRight: 10
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
      width : window.innerWidth > 800 ? window.innerWidth*0.40  : window.innerWidth ,
      backgroundColor : "yellow",
      top: window.innerWidth > 500 ? window.innerHeight * 0.6 : window.innerHeight * 0.5,
      left: window.innerWidth > 800 ? window.innerWidth * 0.2 : 0,
      margin: 0,
      padding: 0,

    },
    "brandname": {
      display: "inline",

      flex: 1,
      display: "inline-block",
      height: (window.innerWidth > 800) ? "100px" : "80px",


    },
    "title": {

      backgroundColor : "blue",
      fontSize: "20px",
      width: window.innerWidth > 800 ? window.innerWidth * 0.30 :window.innerWidth -100,
      margin: 0,


    },
    "subtitle": {
      width: window.innerWidth * 0.40,
      backgroundColor : "green",
      fontSize: "12px"
    }
  })
  return (

    

    <Container style={styles.container1} >
      <Container style={styles.logocontainer}>
        <img style={styles.logo} src={Logo} />
        <div style={styles.brandname}>

          <Row style={styles.title}><p > PHEONIX STORE<br /><span style={styles.subtitle}>Where you get everything</span> </p></Row>
        </div>
        </Container>
    


    </Container>
      

      

   

  );
}

export default App;
