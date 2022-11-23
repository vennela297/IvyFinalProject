import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useNavigate } from "react-router-dom";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";
import Footer from "./components/Footer"

import EventBus from "./common/EventBus";
import { Button } from "bootstrap";
import SellProduct from "./components/Form"
import Header from "./components/Header";
import Users from "./components/Users"
import Bikes from "./components/Bike";
import Phones from "./components/Phones";
import Car from "./components/Car";
import Wishlist from "./components/WishList";
import Electronics from "./components/electronics";
import Protected from "./components/Protected";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const navigate=useNavigate();
  const [search,setSearch]=useState("");
  
    window.addEventListener('beforeunload',()=>{
      alert("window closed")
    })
   
      
  

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <>
    <Header search={search} set={setSearch} />

  

      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home find={search}/>} />
          <Route path="/home" element={<Home find={search}/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/profile" element={<Protected><Profile/></Protected>} />
          <Route path="/user" element={<Protected><BoardUser/></Protected>} />
          <Route path="/mod" element={<BoardModerator/>} />
          <Route path="/admin" element={<Protected><BoardAdmin/></Protected>} />
          <Route path="/sell" element={<Protected><SellProduct/></Protected>} /> 
          <Route path="/users" element={<Protected><Users/></Protected>} /> 
          <Route path="/bikes" element={<Protected><Bikes find={search}/></Protected>} /> 
          <Route path="/phones" element={<Protected><Phones find={search}/></Protected>} /> 
          <Route path="/Car" element={<Protected><Car find={search}/></Protected>} /> 
          <Route path="/wishlist" element={<Protected><Wishlist/></Protected>} />
          <Route path="/electronics" element={<Protected><Electronics find={search}/></Protected>} />
        </Routes>
      </div>

    <Footer />
    </>


  );
};

export default App;