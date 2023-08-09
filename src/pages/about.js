import Header from '../comp/header';
import Footer from '../comp/Footer';
 import Company from '../comp/comapny'
 import Customer from '../comp/customer';
import back from '../images/Bg.png';
import image1 from '../images/Group 6799.png';
import image2 from '../images/Path 71815.png';
import image3 from '../images/Frame.png';
import image4 from '../images/unsplash_rDEOVtE7vOs.png';
import image5 from '../images/unsplash_C8Ta0gwPbQg.png';
import image6 from '../images/unsplash_OhKElOkQ3RE.png';
import image7 from '../images/unsplash_Zz5LQe-VSMY.png';


const About = () => {
  return (
    <>
    <Header />
   
   
    <main>
    
    {/* About */}
<div className="about-container">
 <div className="about1">
 <img src={image1} alt="Image" /> 
 </div>

 <div className="about2">
  <div className="image-container">
    <img src={back} alt="Image" />
    <div className="overlay">
      <h3 style={{color: 'rgba(40, 40, 40, 1)'}}> About US</h3>
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Lorem ipsum dolor sit amet consectetur<br/>Adipiscing Elit</p>
    </div>
  </div>
</div>

 <div className="about3">
 <img src={image2} alt="Image" /> 
 </div>
</div>
   {/* END about */}

    {/* About the comany */}
<div className="about-comany">
 <div className="left-content">
 <img src={image3} alt="Image" /> 
 </div>
 <div className="right-content">
   <h2 style={{color: 'rgba(15, 122, 211, 1)'}}>About the company</h2>
   <div className="divider"></div>
   <h1 style={{color:'rgba(40, 40, 40, 1)'}}>Secure <span style={{color:'rgba(98, 194, 194, 1)'}}>IT Solutions</span> 
     For A More <br/>Secure Environment</h1>
   <p className={{color:'rgba(0, 0, 0, 0.6)'}}>Ament Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do
      <br/> Amet Sint Velit Officia Consequat Duis Enim Velit.Exercitation
      <br/> Veniam Consequat Sunt Nostrud Amet</p>
 </div>
</div>
       {/* END About the comany */}

        {/* our team */}
<div className="container-ourteam">
 <div className="our-team">
   <h2 style={{color: 'rgba(2, 104, 180, 1)'}}>Our Awesome Team</h2>
   <p style={{color: 'rgba(0, 0, 0, 0.6)'}}>You Can See Our Project</p>
 </div>
</div>
   {/* END our team */}

   {/* team */}
<div className="section-team">
 <div className="team">
 <img src={image4} alt="Image" />
   <h4 style={{color: 'black'}}>Person Name</h4>
   <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
     <li className="circle-blue" style={{color: 'black'}}>UI/UX Designer</li>
   </ul>
   <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
 </div>
 <div className="team">
 <img src={image5} alt="Image" />
   <h4 style={{color: 'black'}}>Person Name</h4>
   <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
     <li className="circle-blue" style={{color: 'black'}}>Digital Marketing</li>
   </ul>
   <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
 </div>
 <div className="team">
 <img src={image6} alt="Image" />
   <h4 style={{color: 'black'}}>Person Name</h4>
   <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
     <li class="circle-blue" style={{color: 'black'}}>UI/UX Designer</li>
   </ul>
   <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
 </div>
 <div className="team">
 <img src={image7} alt="Image" />
   <h4 style={{color: 'black'}}>Person Name</h4>
   <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
     <li style={{color: 'black'}} className="circle-blue">Digital Marketing</li>
   </ul>
   <p>Lorem ipsum dolor sit amet, <br/> consectetur adipiscing </p>
 </div>
</div>
        {/* END team  */}

 {/* customer  */}
<Customer/>
{/* END customer */}


    {/* company */}
<Company/>
  {/* END company */}

 </main>



    <Footer />
  </>
  );
}

export default About;
