import React from "react";
import './company.css';


import image8 from '../images/svgexport-6 - 2022-03-23T144628.086 1.png';
import image9 from '../images/svgexport-6 - 2022-03-23T144628.086 1.png';
import image10 from '../images/svgexport-7 (4) 1.png';

const Company = () => {
  return (
<div className="container-company">
 <div className="our-company">
   <h2 style={{color: 'rgba(2, 104, 180, 1)'}}>company Facts</h2>
   <p>The serviCE We Offer is Specifically Designed</p>
   <p>We Are Proud Of Our Design Team</p>
 </div>
 <div className="company-facts">
   <div className="section-company">
   <img src={image8} alt="Image" /> 
     <h1>1000 +</h1>
     <p>Completed Projects</p>
   </div>
   <div className="section-company">
   <img src={image9} alt="Image" />  
     <h1>50k +</h1>
     <p>Happy Customers</p>
   </div>
   <div className="section-company">
   <img src={image10} alt="Image" /> 
     <h1>20 +</h1>
     <p>Awords Won</p>
   </div>
 </div>
</div>
  );
};

export default Company;

