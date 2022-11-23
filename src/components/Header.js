import "./Header.css";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Avatar from "@mui/material/Avatar";
import MarkChatUnreadOutlinedIcon from "@mui/icons-material/MarkChatUnreadOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate, Link } from "react-router-dom";
import EventBus from "../common/EventBus";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import { useEffect } from "react";

import AuthService from "../services/auth.service";
import SellProduct from "./Form";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import vlx from "./vlxLogo.png"


export default function Header(props) {
  const navigate = useNavigate();
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
 
  // const [query,setQuery]=useState("");

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
    navigate("/home");
    setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <div className="header__left__logo">
            <img src={vlx}></img>
          </div>
          <div className="header__left__search">
            <Box sx={{ minWidth: 300 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">All Categories</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Category"
                >
                  <MenuItem onClick={() => navigate("/Car")} value="Cars">Cars</MenuItem>
                  <MenuItem  onClick={() => navigate("/bikes")} value="Bike">Bike</MenuItem>
                  <MenuItem onClick={() => navigate("/electronics")} value="Home Electronics">Home Electronics</MenuItem>
                  <MenuItem onClick={() => navigate("/phones")} value="Mobile Phone">Mobile Phone</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className="header__middle">
          <TextField
            fullWidth
            placeholder="Search cars,bikes..."
            id="standard-bare"
            variant="outlined"
     
            onChange={(e)=>{
              props.set(e.target.value);
              
            
            }}
            
            InputProps={{
              endAdornment: (
                <IconButton onClick={()=>{localStorage.setItem("find",props.search.search)}}>
                  <SearchOutlinedIcon 
                 
                  fontSize="large" />
                </IconButton>
              ),
            }}
          />
        </div>
        <div className="header__right">
          <div className="header__right__icons">
            {currentUser ? (
              <IconButton>
                <LogoutIcon onClick={logOut} />
              </IconButton>
            ) : (
              <>
                <IconButton>
                  <LoginIcon
                    fontSize="medium"
                    onClick={() => {
                      navigate("/login");
                    }}
                  />
                </IconButton>

                <IconButton>
                  <PersonAddIcon
                    onClick={() => {
                      navigate("/register");
                    }}
                  />
                </IconButton>
              </>
            )}

            {currentUser && (
              <IconButton>
                <Avatar color="primary" onClick={()=>{navigate("/profile")}}>{currentUser.username.substring(0,1)}</Avatar>
              </IconButton>
            )}
          </div>
          <div className="header__right__button">
            {currentUser &&  (
              <>
                  <Button
                    variant="contained"
                    endIcon={<AddIcon />}
                    onClick={() => navigate("/sell")}
                  >
                    Sell
                  </Button>

                 {!showAdminBoard &&
                   <Button
                   variant="outlined"

                   onClick={() => navigate("/wishlist")}
                 >
                 WishList
                 </Button>
                 }
                
                  
                 {showAdminBoard && <Button
                    variant="contained"
                    className="header__right__button2"
                   onClick={()=>{navigate("/users")}}
                    
                  >
                    All Users
                  </Button>}
              </>
            )}
          </div>

        </div>
      </div>

      {currentUser && (
        <div className="Navigation">
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs aria-label="basic tabs example">
                <Tab onClick={() => navigate("/")} label="All Categories" />
                <Tab onClick={() => navigate("/Car")} label="Car" />
                <Tab onClick={() => navigate("/bikes")} label="Bike" />
                <Tab label="Home Electronics"  onClick={() => navigate("/electronics")}/>
                <Tab label="Mobile Phones" onClick={() => navigate("/phones")}/>
               
                {/* <Tab label="Houses for sale"/>
          <Tab label="Houses For Rent"/> */}
              </Tabs>
            </Box>
          </Box>
        </div>
      )}
    </>
  );
}
//"https://www.bing.com/th?id=OIP.w3Xd5s2MjzBiWOyC9FFEGQHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"