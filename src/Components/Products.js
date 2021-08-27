import React , {useState , useEffect} from 'react'
import { Button, Container, Row, Col , Image } from 'react-bootstrap';
import ProductCard from '../Cards/ProductCard';
import axios from 'axios';
import SubImage from '../logo.svg';
const Product1 = (prod)=>{
    return (<div>
           {JSON.stringify(prod[0])}
    </div>)
}
const load_images = (filename )=>{
   
}
export default function Categories() {
    let [categories, setcategories] = useState([{}]);
    const [done , setdone ] = useState(false);
    const [imageloaded , setimageloaded] = useState(false);
    useEffect(async () =>{
        if(!done){
            axios.get(`http://127.0.0.1:6090/product`)
            .then(res => {
             
              console.log(JSON.stringify(res.data));
              setdone(true);
              

              
              setcategories(res.data);
            })
          
        }

      })
    
    return (

<Row   >
{done==true ? categories.map((el)=>{
            if(el.imageUrl && el.imageUrl.length != 0){return (
                <Col   className=" mb-2 justify-content-center p-1 col-auto col-lg-3 col-md-6 col-sm-6 col-xs-6"> 
                 <a  onClick={()=>{console.log(el._id)}} style={{textDecoration : "none"}} className="text-black-50"  href={`http://127.0.0.1:6090/product/${el._id}`}>     
                
                <ProductCard 
 image={`http://localhost:6090/product/media/${el.imageUrl[0].filename}`} title={el.name} price="200" />  
                </a>
            </Col>
            )
            }else{return (
           
                <Col  className="mb-2 justify-content-center p-1 col-auto col-lg-3 col-md-6 col-sm-6 col-xs-6"> 
          <a  onClick={()=>{console.log(el.name)}} style={{textDecoration : "none"}} className="text-black-50" href={`http://127.0.0.1:6090/product/${el._id}`}>
                <ProductCard 
 image={SubImage} title={el.name} price={el.price} />  
              
     </a>
            </Col>
            )}}) : <div>LOADING DATA</div> }
               
     </Row>          
    )
}
