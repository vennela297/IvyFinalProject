import "./Form.css"
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import { Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import Select from '@mui/material/Select';
import axios from "axios";
import SendIcon from '@mui/icons-material/Send';


export default function NewForm() {

  //  price ownerName 
  const [category, setCategory] = useState('');
  const [date,setDate]=useState("");
  const [place, setPlace] = useState('');
  const [productName,setProductname]=useState("");
  
  const [image,setImage]=useState("");
  const [description,setDes]=useState("");
  const [price,setPrice]=useState("");
  const [ownerName,setOwnerName]=useState("");

  const [emailID,setEmail]=useState([]);

  // const imageChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     setImage(URL.createObjectURL(e.target.files[0]))
  //   }
  // };

  function imageChange(e) {
   
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);

    oFReader.onload = function (oFREvent) {
      console.log(e.target.files[0]);
      console.log(oFREvent.target.result);
      setImage(oFREvent.target.result);
    };
  }



  const handleSubmit = async(e) => {
    // console.log(category);
    // console.log(place);
    // console.log(productName);
    
    // console.log(date);
    // console.log(image);
    // console.log(des);
    // console.log(price);
    // console.log(ownerName);
    const current = new Date();
    
    const date=`${current.getFullYear()}/${current.getMonth()+1}/${current.getDate()}`
   
  const item = {category,date,description,image,ownerName,place,price,productName,emailID};
  console.log(item);

  await axios.post("http://localhost:8080/api/vlx/saveBike",item).catch(err=>alert(err))


  }

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
        
      
    return (
      <div className="form">
         <Box className="box"
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '50ch' },
          }}
          
         
          
          >
             <InputLabel   id="demo-simple-select-standard-label">Product Name</InputLabel>
        <TextField small id="standard-basic" required label="Product Name" value={productName} onChange={(e)=>setProductname(e.target.value)} />

        <InputLabel   id="demo-simple-select-standard-label">Category</InputLabel>
        <Select
        required
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={category}
          onChange={handleChange}
          label="Category"
          placeholder="Category"
          style={{width:"430px"}}
        >
         
          <MenuItem value="Car">Car</MenuItem>
          <MenuItem value="Bike">Bike</MenuItem>
          <MenuItem value="Home Electronics">Home Electronics</MenuItem>
          <MenuItem value="Mobile phones">Mobile phones</MenuItem>
          <MenuItem value="Clothes">Clothes</MenuItem>
        </Select>
        {/* <InputLabel   id="demo-simple-select-standard-label">Date</InputLabel>
        <TextField
        id="date"
        label="Date"
        min="2022-11-21"
        max="2022-11-22"
        required 
        type="date"
        defaultValue="2017-05-24"
        value={date}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(e)=>setDate(e.target.value)}

      /> */}
   <InputLabel id="demo-simple-select-standard-label">Images</InputLabel>


{/* <input type="file" required  onChange={imageChange} /> */}
<Button variant="outlined" component="label"  style={{ width: 430}}>
        Upload
        <input hidden accept="image/*" multiple type="file"  onChange={imageChange} />
      </Button>
<div class="container-fluid">
  <div class="row">
    <div class="col-12 px-0">
      <img class="img-fluid" src={image}></img>
    </div>
  </div>  
</div>
<InputLabel   id="demo-simple-select-standard-label">Owner Name</InputLabel>
  
<TextField required  id="standard-basic" label="Owner Name" value={ownerName}  onChange={(e) => {setOwnerName(e.target.value)}} />


<InputLabel   id="demo-simple-select-standard-label">Owner Email</InputLabel>
<TextField required  id="standard-basic" label="Owner Email" value={emailID} onChange={(e) => {setEmail(e.target.value)}} />
<InputLabel id="demo-simple-select-standard-label">Place</InputLabel>
        <Select required 
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={place}
          small
          onChange={handlePlaceChange}
          label="Place"
          style={{width:"430px"}}
        >
         
          <MenuItem value="Bangalore">Bangalore</MenuItem>
          <MenuItem value="Hyderabad">Hyderabad</MenuItem>
          <MenuItem value="Chennai">Chennai</MenuItem>
          <MenuItem value="Pune">Pune</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
        </Select>
        
        <InputLabel id="demo-simple-select-standard-label">Price</InputLabel>
        <TextField required  id="standard-basic" label="Price" value={price} onChange={(e)=>{setPrice(e.target.value)}}/>

        <InputLabel id="demo-simple-select-standard-label">Product Description</InputLabel>

        <TextareaAutosize required 
       
        
      aria-label="minimum height"
      minRows={3}
      placeholder="Minimum 3 rows"
      style={{ width: 430}}
      value={description}
      onChange={(e)=>{setDes(e.target.value)}}
    />
    <InputLabel id="demo-simple-select-standard-label">Post</InputLabel>
       <Button  style={{ width: 430,marginBottom:"50px"}} variant="contained" onClick={handleSubmit} endIcon={<SendIcon />}>
        Post
      </Button>
        

        </Box>

      </div>
       
     
      );
          
      
    

}


  