import Header from '../comp/header';
import Footer from '../comp/Footer';
import Customer from '../comp/customer';
import Project from '../comp/project';
import Company from '../comp/comapny'

import image1 from '../images/Group 89410 (1).jpg';
import image2 from '../images/Group 89371.png';
import image3 from '../images/Group 88453 1.png';
import image4 from '../images/Frame 807.png';
import image5 from '../images/Frame 808.png';

import image13 from '../images/unsplash_XkKCui44iM0.png';
import image14 from '../images/unsplash_rxpThOwuVgE.png';
import image15 from '../images/unsplash_-AXDunSs-n4.png';
import image16 from '../images/unsplash_52H5Nfi5WiE.png';

const Home = () => {


  return (
    <>

    <Header />   



    <main>
    
    {/* Home  */}
<div className="home">
  <span className="info-span">
    <h1>Secure <span class="it">IT Solutions </span> For A More<br/>Secure Environment</h1>
    <p>Ament Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do
      <br/>Amet Sint Velit Officia Consequat Duis Enim Velit. Exercitation
      <br/>Veniam Consequat Sunt Nostrud Amet</p>
    <button className="btn-start">Get Started</button>
  </span>
  <span className="image-span">
  <img src={image1} alt="Image" />



  </span>
</div>
       {/* END home */}

         {/* our service */}
    <div className="container-ourserivce">
      <div className="our-service">
        <h2 >Our Services</h2>
        <p style={{color: 'rgba(0, 0, 0, 0.6)'}}>The Service We Offer Is Specifically Designed<br/>To Meet Your Needs</p>
      </div>
    </div>
             {/* END our service */}

                    {/* service */}
    <div className="section-container">
      <div className="section">
      <img src={image2} alt="Image 1" />
        <h4>Digital Marketing</h4>
        <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
          <li className="circle-red">Google Ads</li>
          <li className="circle-blue">Facebook Ads</li>
          <li className="circle-green">Instagram Ads</li>
          <li className="circle-green">Search Engine Optimization</li>
          <li className="circle-green">Influencer Marketing</li>
        </ul>
        <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button> 
      </div>
      <div className="section">
      <img src={image3} alt="Image 1" />
        <h4>Website development & design</h4>
        <ul style={{color: '#000'}}>
          <li className="circle-red">LWordpress Development</li>
          <li className="circle-blue">Encommerce</li>
          <li className="circle-green">Website Hosting</li>
          <li className="circle-green">UI Design</li>
          <li className="circle-green">Copywriting</li>
          <li className="circle-green">Speed Optimization</li>
        </ul>
        <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button> 
      </div>
      <div className="section">
      <img src={image4} alt="Image 1" />
        <h4>Software</h4>
        <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
          <li className="circle-red">Setting Up CRM</li>
          <li className="circle-blue">Software Recommendation<br/> For A Specific Business Type</li>
        </ul>
        <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button> 

      </div>
      <div className="section">
      <img src={image5} alt="Image 1" />
        <h4>SGraphic design & Branding</h4>
        <ul style={{color: 'rgba(0, 0, 0, 0.6)'}}>
          <li className="circle-red">Brand Guigelines</li>
          <li className="circle-blue">Brand Identity</li>
          <li className="circle-green">Color Pallete</li>
          <li className="circle-green">Social Media Designs</li>
          <li className="circle-green">Printables</li>
        </ul>
        <button className="blue-link" onClick={() => console.log("About Us clicked")}>Learn More &gt;</button> 
      </div>
    </div>
             {/* END service */}
{/* our project  */}
<div className="container-ourproject">
      <div className="our-project">
        <h2 style={{color: 'rgba(2, 104, 180, 1)'}}>Our Projects</h2>
        <p>You Can See Our Projects</p>
      </div>
    </div>
          {/* END our project */}


    <Project/>


 {/*  our strategy */}
    <div className="container-ourstrategy">
      <div className="our-strategy">
        <h2 style={{color: 'rgba(2, 104, 180, 1)'}}>Our Strategy</h2>
        <p>Amet Minim Mollit Non Deserunt Ullamco Est<br/>Sit Aliqua Dolor</p>
      </div>
    </div> 
             {/* END our strategy */}

            {/* strategy */}
    <div className="section-container-strategy">
      <div className="section-strategy">
        <div className="circle" style={{backgroundColor: 'rgba(229, 244, 253, 1)'}}>
          <span style={{color: 'rgba(15, 122, 211, 1)'}}>1</span>
        </div>
        <h4>Collect Ideas</h4>
        <div className="divider"></div>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor<br/> incididunt ut labore et<br/> dolore magna aliqua. Ut<br/> enim ad minim veniam</p>
      </div>
      <div className="section-strategy" style={{ marginTop: '70px' }}>
        <div className="circle" style={{backgroundColor: 'rgba(255, 244, 236, 0.59)'}}>
          <span style={{color: 'rgba(247, 157, 86, 1)'}}>2</span>
        </div>
        <h4>Collect Ideas</h4>
        <div className="divider"></div>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor<br/> incididunt ut labore et<br/> dolore magna aliqua. Ut<br/> enim ad minim veniam</p>
      </div>
      <div className="section-strategy">
        <div className="circle" style={{backgroundColor: 'rgba(237, 253, 255, 1)'}}>
          <span style={{color: 'rgba(67, 206, 162, 1)'}}>3</span>
        </div>
        <h4>Collect Ideas</h4>
        <div className="divider"></div>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor<br/> incididunt ut labore et<br/> dolore magna aliqua. Ut<br/> enim ad minim veniam</p>
      </div>
      <div className="section-strategy" style={{ marginTop: '70px' }}>
  <div className="circle" style={{ backgroundColor: 'rgba(238, 238, 238, 1)' }}>
          <span style={{color: 'rgba(156, 148, 147, 1)'}}>4</span>
        </div>
        <h4>Collect Ideas</h4>
        <div className="divider"></div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus praesentium reprehenderit quod tenetur
          suscipit</p>
      </div>
    </div>
         {/* END strategy */}

               {/* company */}  
               <Company/>
  
         {/* END company  */}

           {/* customer  */}
           <Customer />  
{/* END customer */}


              {/* Question */}
              <div className="question">
      <div className="asked-question">
        <h2 style={{color: 'rgba(2, 104, 180, 1)'}}>Frquantly Asked Question</h2>
        <p>The ServiCE We Offer Is Specifically Designed <br/>We Are Proud Of Our Design Team </p>
      </div>
    </div>

    <div className="container-question">

      <div className="left-section">


        <div className="question-section">
          <div className="qsection">
            <p>Ament Minim molit non deserunt ullamco</p>
            <p style={{color: 'rgba(111, 108, 144, 1)'}}>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat aute irure dolor</p>
          </div>
          <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAQdJREFUSEvtlj8PwUAYh3+vxSBRG7PzPdiR+Ag2A6MENSsSm0Ri8xEM7Po91MzWSgwWr3QRQdPeVbSS3nzvPbnn/XNHiGhRRFwk4J+Zj6Nqptzg0LwRNwjQZFQw4KSY1va4uAKIP8V63jg7PHSIeS4DfN3LhPZ5JBZS4JxubRiohgETYWOPRF0KrOn7HUDlMGCATccoVRKwa8CzuGKkms1g+X6uiy/k2DFEoGGj6dZT3/4z2G2NSFQHg77NrqSPH0ri18dfeSSArW2ImuSstnoAJmpF9YjqO4aYSoHz3WPmmr60bsxlpY8AkZm+ZpanWeEiBQ55U9/wQGPQ9xSFDQlYQZpaSGSq7yy1hx8yCB8kAAAAAElFTkSuQmCC"}
       alt="" /> 
  <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAQdJREFUSEvtlj8PwUAYh3+vxSBRG7PzPdiR+Ag2A6MENSsSm0Ri8xEM7Po91MzWSgwWr3QRQdPeVbSS3nzvPbnn/XNHiGhRRFwk4J+Zj6Nqptzg0LwRNwjQZFQw4KSY1va4uAKIP8V63jg7PHSIeS4DfN3LhPZ5JBZS4JxubRiohgETYWOPRF0KrOn7HUDlMGCATccoVRKwa8CzuGKkms1g+X6uiy/k2DFEoGGj6dZT3/4z2G2NSFQHg77NrqSPH0ri18dfeSSArW2ImuSstnoAJmpF9YjqO4aYSoHz3WPmmr60bsxlpY8AkZm+ZpanWeEiBQ55U9/wQGPQ9xSFDQlYQZpaSGSq7yy1hx8yCB8kAAAAAElFTkSuQmCC" }
       alt="" />
        </div>

        <div className="question-section">
          <p>Ament Minim molit non deserunt ullamco</p>
        <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSEvF1mvon2MYB/DPRlZkidVCycq5rbxZORXyQiRjZVmavNC0lVMokhxyCjm+cNgLkWQr82I5FEVShGU5hIZZzo3QWovF1nddv/X8np7f//f8t3/9r1fPc9/XfX2v+7q/12GGaZIZ04RrssD74RQcjcPL6Z+xCR/iv74X6Qt8LG7BxThkhPE/8Aruw3fjHBgHfCDux0rktn3kXzyIu5DvTpkIOOFch/l1MkZexhv4FN9g/wr7yTgPi2stRxL6C/FbF/Io4BPxHg6tQ6/Xrb8fc+Vj8BTOKb2fihM/ts91Ac/FehxZynfijj4xLp3YfAA31v+XWIhtTRtdwKuxpJRur7dq44ZgCW9kA/7qcOxRXFvrj+G6iYAX1PtF51VcMOKmZ+Ht2jsb73TohYzv4jTsKC4k9XZL+8bP4fIKy3HYo9gy3Ac4R47H50W4e3FrF/AB+B0H48ki06in7Quc88ntixBizusCDhPfqo3zESZPBfCVWFWGEsWN7VBfgWdLIYwehLlJpIEjIdYj9XN9EazpZJNw0f2kNpPXqQ1Db3xTpUHWZzWqTjOsEwRhaKtJuDj+Z+2G2WH4EPANeKgUZmNrfe8rcGz9XbaC8XAbeCleLIUT8HV972uoT8IXZetSpE4M3Tjt7v1SiBMvTRG5luH5spUK9nEbODm9BYfhBeTAVLB6DS7BrzgCO9vA+X8ay7G9kv+HEch98zgFJJ0sNeIJXDOw165cUUxRz/qbOHfgYcuBPsApmSmlZ+B/pHNlUtktXU0iYb6s9u/GbR237tMkHsfVdfYZXNW00wU8Bx9VUY9uJol0qb4ys1Jm0Jm+qkYxyOWRN85GZqwPWoPACmweg54BInX+zNJL9Tu96vTQ0cmMPv9gLV7DZzX6hDQp/EmT1PqMPoPZLFFbhF+6nB037B2EvHPYmBD2kcxmGRDv2dthrwmSSnZzjbcpgV2S8TbDYPruuCeZ9ECfqfJUHNUa6L8tQiZtesm4UPcysjdK0wa8C8u9nB9xgoInAAAAAElFTkSuQmCC"}
          alt="" />
        </div>
        <div className="question-section">
          <p>Ament Minim molit non deserunt ullamco</p>
          <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSEvF1mvon2MYB/DPRlZkidVCycq5rbxZORXyQiRjZVmavNC0lVMokhxyCjm+cNgLkWQr82I5FEVShGU5hIZZzo3QWovF1nddv/X8np7f//f8t3/9r1fPc9/XfX2v+7q/12GGaZIZ04RrssD74RQcjcPL6Z+xCR/iv74X6Qt8LG7BxThkhPE/8Aruw3fjHBgHfCDux0rktn3kXzyIu5DvTpkIOOFch/l1MkZexhv4FN9g/wr7yTgPi2stRxL6C/FbF/Io4BPxHg6tQ6/Xrb8fc+Vj8BTOKb2fihM/ts91Ac/FehxZynfijj4xLp3YfAA31v+XWIhtTRtdwKuxpJRur7dq44ZgCW9kA/7qcOxRXFvrj+G6iYAX1PtF51VcMOKmZ+Ht2jsb73TohYzv4jTsKC4k9XZL+8bP4fIKy3HYo9gy3Ac4R47H50W4e3FrF/AB+B0H48ki06in7Quc88ntixBizusCDhPfqo3zESZPBfCVWFWGEsWN7VBfgWdLIYwehLlJpIEjIdYj9XN9EazpZJNw0f2kNpPXqQ1Db3xTpUHWZzWqTjOsEwRhaKtJuDj+Z+2G2WH4EPANeKgUZmNrfe8rcGz9XbaC8XAbeCleLIUT8HV972uoT8IXZetSpE4M3Tjt7v1SiBMvTRG5luH5spUK9nEbODm9BYfhBeTAVLB6DS7BrzgCO9vA+X8ay7G9kv+HEch98zgFJJ0sNeIJXDOw165cUUxRz/qbOHfgYcuBPsApmSmlZ+B/pHNlUtktXU0iYb6s9u/GbR237tMkHsfVdfYZXNW00wU8Bx9VUY9uJol0qb4ys1Jm0Jm+qkYxyOWRN85GZqwPWoPACmweg54BInX+zNJL9Tu96vTQ0cmMPv9gLV7DZzX6hDQp/EmT1PqMPoPZLFFbhF+6nB037B2EvHPYmBD2kcxmGRDv2dthrwmSSnZzjbcpgV2S8TbDYPruuCeZ9ECfqfJUHNUa6L8tQiZtesm4UPcysjdK0wa8C8u9nB9xgoInAAAAAElFTkSuQmCC"}
           alt="" />
        </div>


      </div>

      <div className="rigth-section">

        <div className="question-section">
          <p>Ament Minim molit non deserunt ullamco</p>
          <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSEvF1mvon2MYB/DPRlZkidVCycq5rbxZORXyQiRjZVmavNC0lVMokhxyCjm+cNgLkWQr82I5FEVShGU5hIZZzo3QWovF1nddv/X8np7f//f8t3/9r1fPc9/XfX2v+7q/12GGaZIZ04RrssD74RQcjcPL6Z+xCR/iv74X6Qt8LG7BxThkhPE/8Aruw3fjHBgHfCDux0rktn3kXzyIu5DvTpkIOOFch/l1MkZexhv4FN9g/wr7yTgPi2stRxL6C/FbF/Io4BPxHg6tQ6/Xrb8fc+Vj8BTOKb2fihM/ts91Ac/FehxZynfijj4xLp3YfAA31v+XWIhtTRtdwKuxpJRur7dq44ZgCW9kA/7qcOxRXFvrj+G6iYAX1PtF51VcMOKmZ+Ht2jsb73TohYzv4jTsKC4k9XZL+8bP4fIKy3HYo9gy3Ac4R47H50W4e3FrF/AB+B0H48ki06in7Quc88ntixBizusCDhPfqo3zESZPBfCVWFWGEsWN7VBfgWdLIYwehLlJpIEjIdYj9XN9EazpZJNw0f2kNpPXqQ1Db3xTpUHWZzWqTjOsEwRhaKtJuDj+Z+2G2WH4EPANeKgUZmNrfe8rcGz9XbaC8XAbeCleLIUT8HV972uoT8IXZetSpE4M3Tjt7v1SiBMvTRG5luH5spUK9nEbODm9BYfhBeTAVLB6DS7BrzgCO9vA+X8ay7G9kv+HEch98zgFJJ0sNeIJXDOw165cUUxRz/qbOHfgYcuBPsApmSmlZ+B/pHNlUtktXU0iYb6s9u/GbR237tMkHsfVdfYZXNW00wU8Bx9VUY9uJol0qb4ys1Jm0Jm+qkYxyOWRN85GZqwPWoPACmweg54BInX+zNJL9Tu96vTQ0cmMPv9gLV7DZzX6hDQp/EmT1PqMPoPZLFFbhF+6nB037B2EvHPYmBD2kcxmGRDv2dthrwmSSnZzjbcpgV2S8TbDYPruuCeZ9ECfqfJUHNUa6L8tQiZtesm4UPcysjdK0wa8C8u9nB9xgoInAAAAAElFTkSuQmCC"}
        alt="" />
        </div>
        <div className="question-section">
          <p>Ament Minim molit non deserunt ullamco</p>
          <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSEvF1mvon2MYB/DPRlZkidVCycq5rbxZORXyQiRjZVmavNC0lVMokhxyCjm+cNgLkWQr82I5FEVShGU5hIZZzo3QWovF1nddv/X8np7f//f8t3/9r1fPc9/XfX2v+7q/12GGaZIZ04RrssD74RQcjcPL6Z+xCR/iv74X6Qt8LG7BxThkhPE/8Aruw3fjHBgHfCDux0rktn3kXzyIu5DvTpkIOOFch/l1MkZexhv4FN9g/wr7yTgPi2stRxL6C/FbF/Io4BPxHg6tQ6/Xrb8fc+Vj8BTOKb2fihM/ts91Ac/FehxZynfijj4xLp3YfAA31v+XWIhtTRtdwKuxpJRur7dq44ZgCW9kA/7qcOxRXFvrj+G6iYAX1PtF51VcMOKmZ+Ht2jsb73TohYzv4jTsKC4k9XZL+8bP4fIKy3HYo9gy3Ac4R47H50W4e3FrF/AB+B0H48ki06in7Quc88ntixBizusCDhPfqo3zESZPBfCVWFWGEsWN7VBfgWdLIYwehLlJpIEjIdYj9XN9EazpZJNw0f2kNpPXqQ1Db3xTpUHWZzWqTjOsEwRhaKtJuDj+Z+2G2WH4EPANeKgUZmNrfe8rcGz9XbaC8XAbeCleLIUT8HV972uoT8IXZetSpE4M3Tjt7v1SiBMvTRG5luH5spUK9nEbODm9BYfhBeTAVLB6DS7BrzgCO9vA+X8ay7G9kv+HEch98zgFJJ0sNeIJXDOw165cUUxRz/qbOHfgYcuBPsApmSmlZ+B/pHNlUtktXU0iYb6s9u/GbR237tMkHsfVdfYZXNW00wU8Bx9VUY9uJol0qb4ys1Jm0Jm+qkYxyOWRN85GZqwPWoPACmweg54BInX+zNJL9Tu96vTQ0cmMPv9gLV7DZzX6hDQp/EmT1PqMPoPZLFFbhF+6nB037B2EvHPYmBD2kcxmGRDv2dthrwmSSnZzjbcpgV2S8TbDYPruuCeZ9ECfqfJUHNUa6L8tQiZtesm4UPcysjdK0wa8C8u9nB9xgoInAAAAAElFTkSuQmCC"}
            alt="" />
        </div>

        <div className="question-section">
          <p>Ament Minim molit non deserunt ullamco</p>
          <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAvZJREFUSEvF1mvon2MYB/DPRlZkidVCycq5rbxZORXyQiRjZVmavNC0lVMokhxyCjm+cNgLkWQr82I5FEVShGU5hIZZzo3QWovF1nddv/X8np7f//f8t3/9r1fPc9/XfX2v+7q/12GGaZIZ04RrssD74RQcjcPL6Z+xCR/iv74X6Qt8LG7BxThkhPE/8Aruw3fjHBgHfCDux0rktn3kXzyIu5DvTpkIOOFch/l1MkZexhv4FN9g/wr7yTgPi2stRxL6C/FbF/Io4BPxHg6tQ6/Xrb8fc+Vj8BTOKb2fihM/ts91Ac/FehxZynfijj4xLp3YfAA31v+XWIhtTRtdwKuxpJRur7dq44ZgCW9kA/7qcOxRXFvrj+G6iYAX1PtF51VcMOKmZ+Ht2jsb73TohYzv4jTsKC4k9XZL+8bP4fIKy3HYo9gy3Ac4R47H50W4e3FrF/AB+B0H48ki06in7Quc88ntixBizusCDhPfqo3zESZPBfCVWFWGEsWN7VBfgWdLIYwehLlJpIEjIdYj9XN9EazpZJNw0f2kNpPXqQ1Db3xTpUHWZzWqTjOsEwRhaKtJuDj+Z+2G2WH4EPANeKgUZmNrfe8rcGz9XbaC8XAbeCleLIUT8HV972uoT8IXZetSpE4M3Tjt7v1SiBMvTRG5luH5spUK9nEbODm9BYfhBeTAVLB6DS7BrzgCO9vA+X8ay7G9kv+HEch98zgFJJ0sNeIJXDOw165cUUxRz/qbOHfgYcuBPsApmSmlZ+B/pHNlUtktXU0iYb6s9u/GbR237tMkHsfVdfYZXNW00wU8Bx9VUY9uJol0qb4ys1Jm0Jm+qkYxyOWRN85GZqwPWoPACmweg54BInX+zNJL9Tu96vTQ0cmMPv9gLV7DZzX6hDQp/EmT1PqMPoPZLFFbhF+6nB037B2EvHPYmBD2kcxmGRDv2dthrwmSSnZzjbcpgV2S8TbDYPruuCeZ9ECfqfJUHNUa6L8tQiZtesm4UPcysjdK0wa8C8u9nB9xgoInAAAAAElFTkSuQmCC"} 
            alt="" />
        </div>
      </div>
    </div>
             {/* END Question */}
   {/* just happend */}
   <div className="just-happend">
      <div className="happend">
        <h2 style={{color: 'rgba(2, 104, 180, 1)'}}>This just Happened</h2>
        <p>Amet Minim Mollit Non Deserunt Ullamco Est</p>
        <p>Sit Aliqua Dolor</p>
      </div>
      <div className="container-happend">
        <div className="section-happend">
        <img src={image13} alt="Image" />
          <p>Teachref is transforming and scaling<br/> businesses successfully through services</p>
          <p className="date">Teacref Oct 20. 2022</p>
        </div>
        <div className="section-happend">
        <img src={image14} alt="Image" />
          <p>Teachref is transforming and scaling <br/>businesses successfully through services</p>
          <p className="date">Teacref Oct 20. 2022</p>
        </div>
        <div className="section-happend">
        <img src={image15} alt="Image" />
          <p>Teachref is transforming and scaling<br/> businesses successfully through services</p>
          <p className="date">Teacref Oct 20. 2022</p>
        </div>
        <div className="section-happend">
        <img src={image16} alt="Image" />
          <p>Teachref is transforming and scaling<br/> businesses successfully through services</p>
          <p className="date">Teacref Oct 20. 2022</p>
        </div>

      </div>
    </div>
                {/* just happend */}

       </main>

    <Footer />
  </>
  );
}

export default Home;
