
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { useEffect,useState } from 'react';
import Button from '@mui/material/Button';
import AuthService from "../services/auth.service";


import { useNavigate } from 'react-router-dom';

export default function Users() {

  function removeItem(id) {
      axios.delete(`http://localhost:8080/api/vlx/delete/${id}`);
   
      

  }
  const user = AuthService.getCurrentUser();

    const [items,setItems]=useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8080/api/vlx/wishlist").then((res)=>{
            setItems(res.data.filter(pro=>pro.userID===user.id))
        })
        
    
            

    },[items])
    


    return(
        
     <>
     <h1>Wish List</h1>
         <TableContainer component={Paper}>
             <Table sx={{ minWidth: 650 }} aria-label="simple table">

             <TableHead>
          <TableRow>
           
            <TableCell align="left">Product Name</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          {items.map((row) => (
            <TableRow
             key={row.Wishid}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.productName} </TableCell>
              <TableCell align="left">{row.category}</TableCell>
              <TableCell align="left">{row.price}</TableCell>

              <TableCell align="right">
               
               <Button variant="contained" onClick={()=>{removeItem(row.wishid)}}>Remove</Button>
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
             </Table>
        </TableContainer>
       <br></br>
         
    
        </>
    );
}
