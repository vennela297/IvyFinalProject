import "./LocationFilter.css";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios";
import { useEffect } from "react";

export default function Locationfilter(props)
{
    return(
        <div className="Car__filters__location">
        <h1>Location</h1>
        <Box
     sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224}}
         >
           
           <Tabs
       orientation="vertical"
       variant="scrollable"
       
       aria-label="Vertical tabs example"
       sx={{ borderRight: 1, borderColor: 'divider' }}
     >
    
       
       <Tab label="Bangalore"  />
       <Tab label="Hyderabad"  />
       <Tab label="Chennai" />
       <Tab label="Pune" />
       <Tab label="Delhi" />
    
     </Tabs>
         </Box>

             


        </div>
    );

}