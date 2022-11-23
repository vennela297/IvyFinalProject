import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Location from "./LocationFilter"
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AuthService from "../services/auth.service";



export default function Car(props) {
  const[product,SetProducts] = useState([]);
  const user=AuthService.getCurrentUser()
  

  
    useEffect(()=>{
      axios.get("http://localhost:8080/api/vlx/getBikes").then(res=>SetProducts(res.data.filter(pro=>pro.category==="Car"))).catch(err=>alert(err))
    },[])

    function handleFilter(city) {

      // SetProducts(product.filter((pro)=>pro.place===city))
      axios.get("http://localhost:8080/api/vlx/getBikes").then(res=>SetProducts(res.data.filter((pro)=>pro.place===city && pro.category==="Car" ))).catch(err=>alert(err));
    }



    function handleCostFilter(str) {
      if(str=="below5L")
      {
        axios.get("http://localhost:8080/api/vlx/getBikes").then(res=>SetProducts(res.data.filter((pro)=>pro.price < 500000 && pro.category==="Car" ))).catch(err=>alert(err));

      }
      else{
        axios.get("http://localhost:8080/api/vlx/getBikes").then(res=>SetProducts(res.data.filter((pro)=>pro.price > 500000 && pro.category==="Car" ))).catch(err=>alert(err));
      }

    }

    function HandleClick(userID,productName,category,price) {
      const item={category,price,productName,userID};
      axios.post("http://localhost:8080/api/vlx/savewishlist",item)
    
    
    
    
    }
    



  return (
   <>
   <div style={{display:"flex"}}>
   
<div  style={{display:"flex",flexDirection:"column"}}>
   <div className="Car__filters__location">
        <h1>Location</h1>
        <Box
     sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}
         >
           
           <Tabs
       orientation="vertical"
       variant="scrollable"
       
       aria-label="Vertical tabs example"
       sx={{width:"200px"}}
     >
    
       
       <Tab label="Bangalore" value="Bangalore" onClick={(e)=>{
         handleFilter("Bangalore")
      
        
       }} />
       <Tab label="Hyderabad" onClick={(e)=>{
        e.preventDefault();
        handleFilter("Hyderabad")
      
        
       }}  />
       <Tab label="Chennai" onClick={(e)=>{
        e.preventDefault();
        handleFilter("Chennai")
      
        
       }} />
       <Tab label="Pune" onClick={(e)=>{
        e.preventDefault();
        handleFilter("Pune")
      
      
        
       }} />
       <Tab label="Delhi" onClick={(e)=>{
        e.preventDefault();
        handleFilter("Delhi")
      
        
       }} />
    
     </Tabs>
         </Box>
         </div>


         <div className="Car__filters__location">
        <h1>Cost</h1>
        <Box
     sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}
         >
           
           <Tabs
       orientation="vertical"
       variant="scrollable"
       
       aria-label="Vertical tabs example"
       sx={{width:"200px"}}
     >
    
       
       <Tab label="Below 5L" value="below5L" onClick={(e)=>{
         handleCostFilter("below5L")
      
        
       }} />
       <Tab label="above 5L" onClick={(e)=>{
        e.preventDefault();
        handleCostFilter("above5L")
      
        
       }}  />
       
    
     </Tabs>
         </Box>
         </div>
         </div>
  
   <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
    {product?.filter(item => item.productName.includes(props.find)).map((row,index)=>{
        return(

       <Card sx={{ maxWidth: 345,margin:2}} key={index}>
        {console.log(row.productName)}
       <CardActions>
     <IconButton aria-label="add to favorites">
         <FavoriteIcon  />
       </IconButton>
       <Button size="small" align="right">{row.date}</Button>
    
      

     </CardActions>
    <div>
    <img src={row.image}
    style={{width:"400px",height:"200px"}}
    />

    </div>
    
     <CardContent>
     <Typography gutterBottom variant="h5" component="div">
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
     
   </Card>)
     
    })}
   </div>
   </div>
   </>
  )
}

//<Button onClick={()=>{HandleClick(user.id,row.productName,row.category,row.price)}}>BUY</Button>
// function HandleClick(userID,productName,category,price) {
//   const item={category,price,productName,userID};
//   axios.post("http://localhost:8080/api/vlx/savewishlist",item)




// }

//import AuthService from "../services/auth.service";
//  const user=AuthService.getCurrentUser()