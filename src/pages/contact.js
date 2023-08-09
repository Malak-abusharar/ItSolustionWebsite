import Header from '../comp/header';
import Footer from '../comp/Footer';
import back from '../images/Bg.png';
import image1 from '../images/Group 6799.png';
import image2 from '../images/Path 71815.png';
import image3 from '../images/Group 89359.png';
import image4 from '../images/Rectangle 8087 (1).png';

import 'boxicons/css/boxicons.min.css'; 


const Home = () => {
  return (
    <>

    <Header />   


    <main>
  
  {/* contact */}
<div className="about-container">
<div className="about1">
<img src={image1} alt="Image" /> 
</div>

 <div className="about2">
  <div className="image-container">
    <img src={back} alt="Image" />
    <div className="overlay">
      <h3 style={{color: 'rgba(40, 40, 40, 1)'}}> Contact Us</h3>
      <p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Keep in Toch With Us</p>
    </div>
  </div>
</div>
<div className="about3">
<img src={image2} alt="Image" /> 
</div>
</div>

  {/* END contact  */}

   {/* contact with us */}
<div className="about-comany">
<div className="left-content">
<img src={image3} alt="Image" />
</div>
<div className="right-content">
  <h2 style={{ color: 'rgba(15, 122, 211, 1)'}}>Contact With Us Know</h2>
  <div className="divider"></div>
  <h1 style={{ color: 'rgba(40, 40, 40, 1)'}}>We Are With Yoy To Help You, <br />Just Contact Us</h1>
  <div className="con">
    <div className="con-add">
      <div className="con-item">
        {/* <i className='bx bx-location-plus'></i> */}
        <i className='bx bx-location-plus'></i> 
        <h5 style={{color: 'black'}}>Address:</h5>
      </div>
      <p>28 Division St, New York, <br />NY 10002, USA</p>
    </div>
    <div className="con-em">
      <div className="con-item">
      {/* <i className='bx bx-envelope'></i>  */}
      <i className='bx bx-envelope bx-sm text-primary'></i>
        <h5 style={{color: 'black'}}>Email:</h5>
      </div>
      <p>Startnext@Gmail.Com</p>
    </div>
    <div className="con-ph">
      <div className="con-item">
      {/* <i className='bx bx-phone'></i>  */}
      <i className='bx bx-phone bx-sm text-primary'></i> 
        <h5 style={{color: 'black'}}>Phone:</h5>
      </div>
      <p>+ (321) 984 75413545</p>
    </div>
  </div>
</div>
</div>
{/* END contact  with us */}

 {/* contact section starts  */}
 <section className="contact">
<h2 className="heading" style={{ color: 'rgba(40, 40, 40, 1)' }}>Drop Us A Line</h2>
<p style={{ color: 'rgba(0, 0, 0, 0.6)' }}>Fill Out The Contact Form And We Will Get Back To You Shortly</p>

<div className="row">
  <form action="/submit">
    <div className="input-group">
      <input type="text" placeholder="First Name" className="box" />
      <input type="text" placeholder="Last Name" className="box" />
    </div>
    <div className="input-group">
      <input type="text" placeholder="Email" className="box" />
      <select id="section" className="box">
        <option value="section1">Digital Marketing</option>
        <option value="section2">Website development & design</option>
        <option value="section3">Software</option>
        <option value="section4">Graphic design & Branding</option>
      </select>
    </div>
    <textarea name="" className="box" placeholder="Message" id="" cols="30" rows="10"></textarea>
    <div className="input-btn">
      <input type="submit" value="Send Message" className="btn" />
    </div>
  </form>
</div>
</section>
{/* contact section ends */}

<div className="rectangle">
<img src={image4} alt="Image" /> 
</div>

  </main>


    <Footer />
  </>
  );
}

export default Home;
