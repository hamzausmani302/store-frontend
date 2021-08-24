import React , {useState , useEffect} from 'react'
import { Button, Container, Row, Col , Image } from 'react-bootstrap';
import axios from 'axios';

const Product = (prod)=>{
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
        <Container>
            {/* {done==true ? Product(categories) : <div>NO DATA</div> } */}
            {done==true ? categories.map((el)=>{if(el.imageUrl && el.imageUrl.length != 0){return (<Container><img style={{width : 30 , height : 30}} src="http://localhost:6090/product/media/imageUrl-alitfitt.png" /></Container>)}}) : <div>NO DATA</div> }
dwdwa
        </Container>
    )
}
