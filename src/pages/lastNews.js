import Header from '../comp/header';
import Footer from '../comp/Footer';

import './style.css';

import back from '../images/Bg.png';
import image1 from '../images/Group 6799.png';
import image2 from '../images/Path 71815.png';
import image3 from '../images/unsplash_FlPc9_VocJ4.png';
import image4 from '../images/unsplash_Yh2Y8avvPec.png';
import image5 from '../images/Group 89264 (1).png';
import image6 from '../images/unsplash_lFv0V3_2H6s.png';

const LastestNews = () => {
  return (
    <>
    <Header />
    
    <main>

{/* news */}
<div className="about-container">
<div className="about1">
<img src={image1} alt="Image" /> 
</div>


<div className="about2">
  <div className="image-container">
  <img src={back} alt="Image" />
    <div className="overlay">
    <h2 style={{color: 'rgba(40, 40, 40, 1)'}}>Latest News</h2>
<p style={{color: 'rgba(0, 0, 0, 0.6)'}}>Follow Us For The Latest News And Articles</p>
    </div>
  </div>
</div>

<div className="about3">
<img src={image2} alt="Image" /> 
</div>
</div>
  {/* END news */}

   {/* news */}
<div className="nav-project">
<ul className="nav-menuproject" id="nav-menuproject">
{/* <li><a href="">All</a></li> */}
<li><button onClick={() => console.log("About Us clicked")}>All</button></li>
<li><button onClick={() => console.log("About Us clicked")}>Digital Marketing</button></li>
<li><button onClick={() => console.log("About Us clicked")}>Website development & design</button></li>
<li><button onClick={() => console.log("About Us clicked")}>Software</button></li>
</ul>
</div>
  {/* END news */}

   {/* table */}
<div className="block">
<div className="item-row">
<div className="item">
<a href="lastest.html">
<img src={image3} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image4} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image5} alt="Image" />
</a>
<div className="item-content">
<h4>Bolg Title</h4>
<ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
<li class="circle-blue">UI/UX Designer</li>
</ul>
<p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing</p>
<p className="date">Teacref Oct 20. 2022</p>
</div>
</div>
<div className="item">
<a href="lastest.html">
<img src={image6} alt="Image" />
</a>
<div className="item-content">
<h4>Bolg Title</h4>
<ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
<li className="circle-blue">Digital Marketing</li>
</ul>
<p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing</p>
<p className="item-date">Teacref Oct 20. 2022</p>
</div>
</div>
</div>
<div className="item-row">
<div className="item">
<a href="lastest.html">
<img src={image3} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image4} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image5} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image6} alt="Image" />
</a>
<div className="item-content">
<h4>Bolg Title</h4>
<ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
<li className="circle-blue">Digital Marketing</li>
</ul>
<p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing</p>
<p className="item-date">Teacref Oct 20. 2022</p>
</div>
</div>
</div>
<div className="item-row">
<div className="item">
<a href="lastest.html">
<img src={image3} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image4} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image5} alt="Image" />
</a>
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
<a href="lastest.html">
<img src={image6} alt="Image" />
</a>
<div className="item-content">
<h4>Bolg Title</h4>
<ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
<li className="circle-blue">Digital Marketing</li>
</ul>
<p>Lorem ipsum dolor sit amet,<br/>consectetur adipiscing</p>
<p className="item-date">Teacref Oct 20. 2022</p>
</div>
</div>
</div>
</div>
           {/* END table*/}


</main>


    <Footer />
  </>
  );
}

export default LastestNews;
