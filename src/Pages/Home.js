import React, { useState } from 'react';
import { Button, Container, Row, Col , Image } from 'react-bootstrap';
import Video from "../Media/video.mp4";
import HomePageTitle from "../Components/HomePageTitle.js";
import Back from "../Media/back.jpg";
import MBack from "../Mobilemedia/back.jpg";
import Logo from "../Media/logo.png";
import Navbar from "../Components/myNavbar.js";
import Products from '../Components/Products.js';
import Categories from '../Components/Categories.js';

function Home(){

  const [width, setwidth] = useState(window.innerWidth*0.90) ;
  const [height, setheight] = useState(window.innerHeight*0.30) ;
  
  function resizeC(){
 
     setwidth(window.innerWidth < 800 ? window.innerWidth : window.innerWidth*0.90);
     

 }
 window.addEventListener('resize' , resizeC);
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
 <Container fluid>

    <Container>
      <Products />
      <Categories />
   
    </Container>
 
 {/* <Container  style={{width : width  , display:  "flex" , alignItems : "center" , justifyContent : "center"}}  >
   <video   width={window.innerWidth > 1100 ? "100%" : "90%"} controls autoplay loop>
       <source src={Video} type="video/mp4" />
   </video>    
   <br /> 
 </Container> */}
  {/* <HomePageTitle /> */}

 </Container>
);

}

export default Home;
