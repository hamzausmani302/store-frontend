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

            <Container style={{ width : "100%", padding : 0 , margin : 0, height : 40, backgroundColor: "Red" }} fluid>
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img style={{resize : "cover", height : window.innerHeight*0.70}} class="d-block w-100" src={Car1} alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img style={{resize : "cover" ,height : window.innerHeight*0.70}} class="d-block w-100" src={Car2} alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img style={{resize : "cover" ,height : window.innerHeight*0.70}} class="d-block w-100" src={Car3} alt="Third slide" />
                        </div>
                    </div>
                </div>
            </Container>

            <Container style={styles.contentbox}>
            <div style={styles.title} class="display-2">WELCOME TO PHEONIX STORE</div>
           
            <div class="display-5">{desc}</div>
            <Button href="#home" className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>      <span>About Us</span></Button>

      </Container>  
        </Container>



    );
}

export default HomePageTitle;
