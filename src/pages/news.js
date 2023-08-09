import Header from '../comp/header';
import Footer from '../comp/Footer';
import back from '../images/Bg.png';
import image1 from '../images/Group 6799.png';
import image2 from '../images/Path 71815.png';
import image3 from  '../images/Group 89264 (2).png';
import image4 from '../images/unsplash_FlPc9_VocJ4.png';
import image5 from '../images/unsplash_Yh2Y8avvPec.png';
import image6 from '../images/Group 89264 (1).png';
import image7 from '../images/unsplash_lFv0V3_2H6s.png';
const Lastest = () => {
  return (
    <>
    <Header />
 
    <main>
  {/* news  */}
<div className="about-container">
<div className="about1">
<img src={image1} alt="Image" /> 
</div>
<div className="about2">
  <div className="image-container">
  <img src={back} alt="Image" />
    <div className="overlay">
      <h3 style={{color: 'rgba(40, 40, 40, 1)'}}> Blog Tittle</h3>
    </div>
  </div>
</div>

<div className="about3">
<img src={image2} alt="Image" /> 
</div>
</div>
 {/* END news */}

   {/* image */}
<div className="first-part">
<div className="last-img">
<img src={image3} alt="Image" /> 
</div>
<div className="last-btn">
<input type="submit" value="Degital Markiting" className="btn"/>
</div>
</div>
   {/* END image  */}

   {/* second-part */}
<div className="second-part">
<h1 style={{color: 'black'}}>Lorem Ipsum Dolor Sit Amet</h1>
<p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nec Et Ipsum Ullamcorper Venenatis Fringilla. Pretium, Purus Eu Nec
<br/>Vulputate Vel Habitant Egestas. Congue Ornare At Ipsum, Viverra. Vitae Magna Faucibus Eros, Lectus Sociis. Etiam Nunc 
<br/>Amet Id Dignissim. Feugiat Id Tempor Vel Sit In Ornare Turpis Posuere. Eu Quisque Integer Non Rhoncus Elementum Vel. Quis
<br/>Nec Viverra</p>
<p>Laoreet Mauris Odio Ut Nec. Nisl, Sed Adipiscing Dignissim Arcu Placerat Ornare Pharetra Nec In. Ultrices In Nisl Potenti Vitae
<br/>Tempus. Auctor Consectetur Luctus Eu In Amet Sagittis. Dis Urna, Vel Hendrerit Convallis Senectus Feugiat Faucibus
<br/>Commodo Egestas Leo Vitae In Morbi. Enim Arcu Dignissim Mauris, Eu, Eget</p>
</div>
 {/* END second-part */}
 <div className="container-blog">
<div className="our-blog">
 <h2>Popular Blogs</h2>
</div>
<div className="block">
 <div className="item">
 <img src={image4} alt="Image" /> 
   <div className="item-content">
   <h4>Bolg Title</h4>
   <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
     <li className="circle-blue">UI/UX Designer</li>
   </ul>
   <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing</p>
   <p className="item-date">Teacref Oct 20. 2022</p>
   </div>
 </div>
 <div className="item">
 <img src={image5} alt="Image" /> 
   <div className="item-content">
   <h4>Bolg Title</h4>
   <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
     <li className="circle-blue">Digital Marketing</li>
   </ul>
   <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing</p>
   <p className="item-date">Teacref Oct 20. 2022</p>
   </div>
 </div>
 <div className="item">
 <img src={image6} alt="Image" /> 
   <div className="item-content">
   <h4>Bolg Title</h4>
   <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
     <li className="circle-blue">UI/UX Designer</li>
   </ul>
   <p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing</p>
   <p className="date">Teacref Oct 20. 2022</p>
   </div>
 </div>
 <div className="item">
 <img src={image7} alt="Image" /> 
<div className="item-content">
 <h4>Blog Title</h4>
 <ul style={{ color: 'rgba(0, 0, 0, 0.6)' }}>
   <li className="circle-blue">Digital Marketing</li>
 </ul>
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,</p>
 <p className="item-date">Techreif Oct 20, 2022</p>
</div>
</div>
 </div>
</div>

 </main>


    <Footer />
  </>
  );
}

export default Lastest;