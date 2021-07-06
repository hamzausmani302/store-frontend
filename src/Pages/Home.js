import React, { useState } from 'react';
import { Button, Container, Row, Col , Image } from 'react-bootstrap';
import Video from "../Media/video.mp4";
import HomePageTitle from "../Components/HomePageTitle.js";
function Home(){

  const [width, setwidth] = useState(window.innerWidth*0.90) ;
  const [height, setheight] = useState(window.innerHeight*0.30) ;
 
  function resizeC(){
 
     setwidth(window.innerWidth < 800 ? window.innerWidth : window.innerWidth*0.90);
     

 }
 window.addEventListener('resize' , resizeC);

 return (
 <Container fluid>
 <Container  style={{width : width  , display:  "flex" , alignItems : "center" , justifyContent : "center"}}  >
   <video   width={window.innerWidth > 1100 ? "100%" : "90%"} controls autoplay loop>
       <source src={Video} type="video/mp4" />
   </video>    
   <br /> 
 </Container>
  <HomePageTitle />
 </Container>
);

}

export default Home;
