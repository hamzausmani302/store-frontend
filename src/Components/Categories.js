import React , {useState , useEffect} from 'react';
import {Container , Accordion} from 'react-bootstrap';
import axios from 'axios';

const Groupfy = (props)=>{
    let store = [];
    if(props.category.childrens == undefined){return null}
    for(let i= 0 ; i < props.category.childrens.length ; i++){
        store.push(props.category.childrens[i]);
    }
    console.log(store)
    return (
       <Container>
           <h1><a>{props.category.name}</a></h1>
           <ul>
               {props.category.childrens.map(el=>{return <h2><a href={`http://localhost:6090/category/media/${el.image}`}>{el.name}</a></h2>})}
           </ul>
        </Container>
        )
}



export default function Categories() {
    let [categories, setcategories] = useState([{}]);
    let [groupedcategories, setgroupedcategories] = useState([{}]);
    
    const [done , setdone ] = useState(false);
    const [imageloaded , setimageloaded] = useState(false);
    
    useEffect(async () =>{
        if(!done){
            axios.get(`http://127.0.0.1:6090/category`)
            .then(res => {
             
              console.log(JSON.stringify(res.data));
              setdone(true);
              

              
              setcategories(res.data);
            })
          
        }

      })
    
    
    return (
       <Container>
            {/* <Groupfy Categories={categories} /> */}
            {categories.map(el=>{return (<Container> <a target="_blank"  href={`http://localhost:6090/category/media/${el.image}`}  > <Groupfy category={el} /> </a> </Container>)})}
       </Container> 
    );
}
