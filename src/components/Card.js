import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Emailjs from "@emailjs/browser";
import AuthService from "../services/auth.service";




export default function MediaCard(props) {
  const[product,SetProducts] = useState([])
  const user=AuthService.getCurrentUser()
  const [search,setSearch]=useState("")

  useEffect(()=>{
    console.log(localStorage.getItem)
  },[search])



  



  

function HandleClick(userID,productName,category,price) {
  const item={category,price,productName,userID};
  axios.post("http://localhost:8080/api/vlx/savewishlist",item)






}
  

  
    useEffect(()=>{
      axios.get("http://localhost:8080/api/vlx/getBikes").then(res=>SetProducts(res.data)).catch(err=>alert(err))
     
     
    },[])


  return (
   <>
    {product?.filter(item => item.productName.includes(props.find)).map((row,index)=> {

      return(
       
            <Card sx={{ maxWidth: 345,margin:2}} key={index}>
        
            <CardActions>
          <IconButton aria-label="add to favorites">
              <FavoriteIcon  />
            </IconButton>
            <Button size="small" align="right">{row.date}</Button>
           {console.log(row.productName)}
           
    
          </CardActions>
         <div>
         <img src={row.image}
         style={{width:"350px",height:"200px"}}
         />

         </div>
         
          <CardContent>
          <Typography gutterBottom variant="h7" component="div">
             {row.productName}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
             {row.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
          {row.description}
            </Typography>
           
            <Typography variant="body2" color="text.secondary">
            {row.ownerName},  {row.place}
            </Typography>
          
          </CardContent>
         
          <Button onClick={()=>{HandleClick(user.id,row.productName,row.category,row.price)}}>BUY</Button>
      
          
          
        </Card>
            
      ) 
    })}
   </> 
  )
}
//<Button onClick={()=>{HandleClick(user.id,row.productName,row.category,row.price)}}>BUY</Button>
// function HandleClick(userID,productName,category,price) {
//   const item={category,price,productName,userID};
//   axios.post("http://localhost:8080/api/vlx/savewishlist",item)




// }
//import AuthService from "../services/auth.service";
//const user=AuthService.getCurrentUser()
