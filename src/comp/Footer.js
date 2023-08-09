import React from "react";
import    './Footer.css';

const Footer = () => {
  return (
      <footer className="footer">
        <div className="footer-part1">
        <h2 style={{ color: 'white' }}>Ready to get started?</h2>
          <button className="button-start">Get Started</button>
        </div>
  
        <div className="footer-part2">
        <div className="footer__addr">
    <h1 className="footer__logo">Subscribe to our<br /> newsletter</h1>
  
    <div className="email-address">
      <input type="text" placeholder="Email address" className="box" />
      <button className="button-email">&gt;</button>
  
    </div>
  </div>
  
  
          <ul className="footer__nav">
            <li className="nav__item">
  

              <ul className="nav__ul">
                
              <li>
      <button onClick={() => console.log("Home clicked")}>Home</button>
    </li>
  
                {/* <li>
                  <a href="#">About Us</a>
                </li> */}
                <li>
      <button onClick={() => console.log("About Us clicked")}>About Us</button>
    </li>
  
  
    <li>
      <button onClick={() => console.log("Services clicked")}>Services</button>
    </li>
    <li>
      <button onClick={() => console.log("Last News clicked")}>Last News</button>
    </li>
              </ul>
            </li>
  
            <li className="nav__item nav__item--extra">
  
              <ul className="nav__ul nav__ul--extra">
                <li>
                <button onClick={() => console.log("About Us clicked")}>Help</button>
                </li>
  
                <li>
                <button onClick={() => console.log("About Us clicked")}>FAQs</button>
                </li>
  
                <li>
                <button onClick={() => console.log("About Us clicked")}>Contact Us</button> 
                </li>


  
                </ul>        
            </li>
    

            <li className="nav__item nav__item--extra2">
  
              <ul className="nav__ul nav__ul--extra2">

                <li>
                    <i className='bx bx-location-plus'></i>
                    <p style={{ color: 'white' , display: 'inline'}}> 28 Division St, New York, <br />NY 10002, USA </p>
                </li>
  
                <li>
                  <i className='bx bx-envelope'></i>
                  <button onClick={() => console.log("About Us clicked")}>Email: Startnext@Gmail.Com</button> 
                </li>
  
                <li>
                  <i className='bx bx-phone'></i>
                  <button onClick={() => console.log("About Us clicked")}>Phone: +(321) 984 754</button>
                </li>


              </ul>        
            </li>


          </ul>
  
        </div>
  

<div className="footer-part3">
  <ul className="nav-start" id="nav-start">
    <li>
      <button onClick={() => console.log("Terms and Conditions clicked")}>Terms and Condities</button>
    </li>
    <li>
      <button onClick={() => console.log("Privacy Policy clicked")}>Privacy Policy</button>
    </li>
  </ul>

  <div className="legal">
    <p style={{ color: 'rgba(255, 255, 255, 1)' }}>&copy; 2022 All rights reserved techreif</p>
  </div>

  <div className="social">
    <i className='bx bxl-facebook' style={{ color: '#fffff7' }}></i>
    <i className='bx bxl-twitter' style={{ color: '#fffff7' }}></i>
    <i className='bx bxl-instagram' style={{ color: '#fffff7' }}></i>
  </div>
</div>



  
      </footer>
    );
  };

export default Footer;
