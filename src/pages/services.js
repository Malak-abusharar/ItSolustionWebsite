import Header from '../comp/header';
import Footer from '../comp/Footer';
import back from '../images/Bg.png';
import image1 from '../images/Group 6799.png';
import image2 from '../images/Path 71815.png';
import image3 from '../images/Group 89371.png';
import image4 from '../images/Group 88453 1.png';
import image5 from '../images/Frame 807.png';
import image6 from '../images/Frame 808.png';


const Services = () => {
  return (
    <>
    <Header />
 
    <main>
    
    {/* our service */}
<div className="about-container">
 <div className="about1">
 <img src={image1} alt="Image" />
 </div>

 <div className="about2">
  <div className="image-container">
    <img src={back} alt="Image" />
    <div className="overlay">
      <h3 style={{color: 'rgba(40, 40, 40, 1)'}}> Our Services</h3>
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>The Service We Offer Is Specifically Designed</p>
      <p>To Meet Your Needs</p>
    </div>
  </div>
</div>

 <div className="about3">
 <img src={image2} alt="Image" />
 </div>
</div>
      {/* END our service */}

 {/* service */}
<div className="section-container">
<div className="section">
<img src={image3} alt="Image" />
 <h5>Digital Marketing</h5>
 <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut <br/>
 labore et dolore magna aliqua. Ut<br/>enim ad minim veniam</p>
 <ul style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
   <li className="circle-red">Google Ads</li>
   <li className="circle-blue">Facebook Ads</li>
   <li className="circle-green">Instagram Ads</li>
   <li className="circle-orange">Search Engine Optimization</li>
   <li className="circle-purple">Influencer Marketing</li>
 </ul>
 {/* <a href="#" className="blue-link">Learn More &gt;</a> */}
 <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button>

</div>
<div className="section">
<img src={image4} alt="Image" />
 <h5>Website development & design</h5>
 <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut <br/>
 labore et dolore magna aliqua. Ut<br/>enim ad minim veniam</p>
 <ul style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
   <li className="circle-red">Wordpress Development</li>
   <li className="circle-blue">E-commerce</li>
   <li className="circle-green">Website Hosting</li>
   <li className="circle-orange">UI Design</li>
   <li className="circle-purple">Copywriting</li>
   <li className="circle-green">Speed Optimization</li>
 </ul>
 {/* <a href="#" className="blue-link">Learn More &gt;</a> */}
 <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button>

</div>
<div className="section">
<img src={image5} alt="Image" />
 <h5>Software</h5>
 <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut <br/>
 labore et dolore magna aliqua. Ut<br/>enim ad minim veniam</p>
 <ul style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
   <li className="circle-red">Setting Up CRM</li>
   <li className="circle-blue">Software Recommendation<br />For A Specific Business Type</li>
 </ul>
 {/* <a href="#" className="blue-link">Learn More &gt;</a> */}
 <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button>

</div>
<div className="section">
<img src={image6} alt="Image" />
<h5>Graphic Design & Branding</h5>
<p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing elit, sed do<br/>eiusmod tempor incididunt ut <br/>
 labore et dolore magna aliqua. Ut<br/>enim ad minim veniam</p>
 <ul style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
   <li className="circle-red">Brand Guidelines</li>
   <li className="circle-blue">Brand Identity</li>
   <li className="circle-green">Color Palette</li>
   <li className="circle-orange">Social Media Designs</li>
   <li className="circle-purple">Printables</li>
 </ul>
 <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button>
</div>
</div>
{/* END service */}


 </main>


    <Footer />
  </>
  );
}

export default Services;
