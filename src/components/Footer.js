import "./Footer.css";
import IconButton from '@mui/material/IconButton';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';


export default function Footer(){
    return(
      <>
        <div className="Footer">
            <div className="Footer__container1">
              <p>POPULAR LOCATIONS</p>
              <ul>
                <li>kolkata</li>
                <li>mumbai</li>
                <li>chennai</li>
                <li>Pune</li>
              </ul>
            </div>
            <div className="Footer__container2">
            <p>TRENDING LOCATIONS</p>
              <ul>
                <li>Bhubaneshwar</li>
                <li>Hyderabad</li>
                <li>Chandigarh</li>
                <li>Nashik</li>
              </ul>
               
            </div>
            <div className="Footer__container3">
            <p>ABOUT US</p>
              <ul>
                <li>About OLX Group</li>
                <li>Careers</li>
                <li>Contact Us</li>
                <li>OLXPeople</li>
                <li>Waah Jobs</li>

              </ul>
            </div>
            <div className="Footer__container4">
            <p>OLX</p>
              <ul>
                <li>Help</li>
                <li>Sitemap</li>
                <li>Legal & Privacy information</li>
                <li>Blog</li>
                <li>OLX Autos Sell Car</li>

              </ul>
            </div>
            <div className="Footer__container__icons">
              <p>FOLLOW US</p>
              <div className="Footer__icon__group">
                <IconButton>
                  <FacebookRoundedIcon />

                </IconButton>
                <IconButton>
                  <InstagramIcon />
                </IconButton>
                <IconButton>
                <TwitterIcon />
                </IconButton>
                <IconButton>
                <YouTubeIcon />
                </IconButton>

              </div>
              <div className="Footer__large__images">
                <div className="Footer__large__images1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"></img>

                </div>
                <div className="Footer__large__images2">
                  <img src="https://assets.stickpng.com/images/5a902db97f96951c82922874.png"></img>

                </div>

              </div>

            </div>

        </div>
        <div className="Footer__copyrights">
          <div className="Footer__copyrights__countries">
          Other Countries Pakistan - South Africa - Indonesia
          </div>

          <div className="Footer__copyrights__years">
          All rights reserved © 2006-2022 OLX

          </div>
        

        </div>
        </>
    );
}

