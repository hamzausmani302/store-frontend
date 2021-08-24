import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import Car1 from "../Media/carousal1.jpg";
import Car2 from "../Media/carousal2.jpg";
import Car3 from "../Media/carousal3.jpg";
import "../More.css";
function HomePageTitle() {
    const [desc, setdesc] = useState("Welcome to “Burney Store”, the place to find the best general items and home décor for every taste and occasion. We thoroughly check the quality of our goods, working only with reliable suppliers so that you only receive the best quality product. We at Burney Store believe in high quality and exceptional customer service. But most importantly, we believe shopping is a right, not a luxury, so we strive to deliver the best products at the most affordable prices and ship them to you regardless of where you are located.   ")
    const [styles, setstyles] = useState({
        "container": {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor : "Red",
            minHeight: window.innerHeight * 0.80,
            padding : 0,
            margin : 0,
            // background : 

        },
        "contentbox": {
            textAlign: "center",
            // backgroundColor  : "yellow",
            textAlign: "center",
            zIndex : 1,
        },
        "title": {
            padding: 10
        },
        "subtitle": {

        },
        "contactusbutton": {

        },
        "lines": {
            width: "30%",

        }
    })

    useEffect(() => {

    })
    return (
        <Container style={styles.container} fluid>

         
        </Container>



    );
}

export default HomePageTitle;
