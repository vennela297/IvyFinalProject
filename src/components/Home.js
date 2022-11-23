import React, { useState, useEffect } from "react";
import "./Home.css"
import Card from "./Card";


const Home = (props) => {
  
//https://www.doditsolutions.com/wp-content/uploads/banner_14.jpg
  return(<>
    <div className="Home__banner">
     <img className="Home__banner_img"   src="https://www.doditsolutions.com/wp-content/uploads/banner_14.jpg"></img>
    </div>
    <div className="Home__items">
     <div className="Home__items__heading">
      Fresh Recommendations
     </div>
     <div className="Home__item__cards">
         <Card find={props.find} />
        


     </div>

    </div>

     </>); 
};

export default Home;
//https://img.freepik.com/free-photo/arrangement-black-friday-clock-with-copy-space_23-2148665530.jpg?w=1060&t=st=1668750432~exp=1668751032~hmac=edf9546e8671d3f19d01db1b0bf5cd33c01a7645a24851c15b70a1a62bff4a8chttps://img.freepik.com/free-photo/arrangement-black-friday-clock-with-copy-space_23-2148665530.jpg?w=1060&t=st=1668750432~exp=1668751032~hmac=edf9546e8671d3f19d01db1b0bf5cd33c01a7645a24851c15b70a1a62bff4a8c
//https://media.glassdoor.com/banner/bh/517166/olx-group-banner-1588765852442.jpg