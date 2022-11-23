
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

import { useNavigate } from 'react-router-dom';

export default function Users() {

  function removeUser(id) {
      axios.delete(`http://localhost:8080/api/vlx/${id}`);
   
      

  }


    const [users,setUsers]=useState([]);
    const navigate=useNavigate();

    useEffect(()=>{
        axios.get("http://localhost:8080/api/vlx/users").then((res)=>
        
        setUsers(res.data))
            

    },[users])
    

    // function addProduct(id) {
    //     axios.post(`http://localhost:8080/api/shopping/${id}`)
    // }
    return(
        
     <>
     <h1>Users</h1>
        <TableContainer component={Paper}>
             <Table sx={{ minWidth: 650 }} aria-label="simple table">

             <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">Actions</TableCell>
            
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.username}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">
              
             
              <Button variant="contained" onClick={() =>{removeUser(row.id)}}>Remove</Button>
              

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
